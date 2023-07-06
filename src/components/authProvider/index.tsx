import React, { createContext, useState } from 'react'
import { AuthContext, LoginData } from '../../contexts/authContext'
import api from '../../utils/api/apiservice'
import { ACCESS_TOKEN, BASE_URL, REFRESH_TOKEN } from '../../utils/constants'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
type ParentProps = {
  children: React.ReactNode
}

export const AuthProvider: React.FC<ParentProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()
  const login = async ({ email, password }: LoginData) => {
    try {
      const response = await axios.post(`${BASE_URL}/user/login`, {
        email,
        password,
      })
      Cookies.set(ACCESS_TOKEN, response.data.access_token)
      Cookies.set(REFRESH_TOKEN, response.data.refresh_token)
      setIsAuthenticated(true)
      navigate('/home')
    } catch (err) {
      throw err
    }
  }

  const logout = () => {
    // Perform logout logic
    Cookies.remove(ACCESS_TOKEN)
    Cookies.remove(REFRESH_TOKEN)
    navigate('/')
    setIsAuthenticated(false)
  }

  const handleSetIsAuthenticated = (value: boolean) => {
    setIsAuthenticated(value)
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, setIsAuthenticated: handleSetIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  )
}
