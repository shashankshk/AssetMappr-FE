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
  setIsAuthenticated: () => {},
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
}

export const AuthContext = createContext<AuthContextType>(initialAuthContext)
