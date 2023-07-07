import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import Cookies from 'js-cookie'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants'

// will import axios from this file which is to be used in other components
const api: AxiosInstance = axios.create({
  // setting the base url which will be used in the entire application
  // TODO: set the base url of the Django app
  baseURL: 'http://localhost:8000/api',
})

// Add a request interceptor to include the access token in API requests
api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    // Retrieve the access token from the cookie
    const accessToken = Cookies.get('accessToken')

    // Set the access token in the request headers
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    const originalRequest = error.config

    // Check if the error is due to an expired access token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        // Attempt to refresh the access token
        const response = await axios.post('/user/refresh-token/', {
          refres_token: Cookies.get(REFRESH_TOKEN),
        })

        const { access_token } = response.data

        // Store the new access token and refresh token in the cookies
        Cookies.set(ACCESS_TOKEN, access_token)

        // Update the Authorization header with the new access token
        originalRequest.headers.Authorization = `Bearer ${access_token}`

        // Retry the original request with the new access token
        return api(originalRequest)
      } catch (error) {
        // Handle refresh token failure or other errors
        console.log(error)
        throw error
      }
    }

    // Throw the original error if it's not related to access token expiration
    throw error
  },
)

export default api
