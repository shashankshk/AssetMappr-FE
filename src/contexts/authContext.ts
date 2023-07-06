import { createContext } from 'react'

export type LoginData = {
  email: string
  password: string
}

interface AuthContextType {
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
  login: (data: LoginData) => void
  logout: () => void
}

const initialAuthContext: AuthContextType = {
  setIsAuthenticated: () => {}, // eslint-disable-line
  isAuthenticated: false,
  login: () => {}, // eslint-disable-line
  logout: () => {}, // eslint-disable-line
}

export const AuthContext = createContext<AuthContextType>(initialAuthContext)
