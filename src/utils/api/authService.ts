import axios, { AxiosError } from 'axios'
import Cookies from 'js-cookie'
import { ACCESS_TOKEN, BASE_URL, REFRESH_TOKEN } from '../constants'

export const getAccessToken = async (): Promise<string | null> => {
  let accessToken = Cookies.get(ACCESS_TOKEN)

  if (!accessToken) {
    // Access token is missing, redirect to login or perform other handling
    return null
  }

  // Verify if the access token is expired (using JWT expiration time or other mechanism)
  const isExpired = isAccessTokenExpired(accessToken)

  if (isExpired) {
    // Access token is expired, try to refresh it
    const refreshedAccessToken = await refreshAccessToken()

    if (refreshedAccessToken) {
      accessToken = refreshedAccessToken
    } else {
      // Refresh failed, redirect to login or perform other handling
      return null
    }
  }

  return accessToken
}

const isAccessTokenExpired = (accessToken: string): boolean => {
  // Decode the access token to extract the payload
  const tokenParts = accessToken.split('.')
  const payloadBase64 = tokenParts[1]
  const payload = JSON.parse(atob(payloadBase64))

  // Get the expiry timestamp from the token payload
  const expiryTimestamp = payload.exp

  // Calculate the current timestamp
  const currentTimestamp = Math.floor(Date.now() / 1000)

  // Compare the expiry timestamp with the current timestamp
  return expiryTimestamp < currentTimestamp
}

const refreshAccessToken = async (): Promise<string | null | undefined> => {
  try {
    // Send a request to the server to exchange the refresh token for a new access token
    const response = await axios.post(`${BASE_URL}/user/refresh-token/`, {
      refresh: Cookies.get(REFRESH_TOKEN),
    })
    const { access } = response.data
    // Store the new access token (e.g., update the cookie)
    Cookies.set(ACCESS_TOKEN, access)

    return access
  } catch (error: unknown | AxiosError) {
    if (error instanceof AxiosError) {
      if (error.response?.data.code == 'token_not_valid') console.log('TOKEN INVALID ERROR')
    }
    // Handle refresh token request error (e.g., refresh token expired, invalid, etc.)
    console.log(error)
  }
}
