import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/authContext'
import { getAccessToken } from '../../utils/api/authService'

interface ProtectedRouteProps {
  authenticationPath: string
  children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  authenticationPath,
  ...rest
}) => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuthentication = async () => {
      const accessToken = await getAccessToken()

      if (accessToken) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
      }

      setIsLoading(false)
    }

    checkAuthentication()
  }, [setIsAuthenticated])

  if (isLoading) {
    // You can render a loading indicator here if needed
    return null
  }

  return isAuthenticated ? children : <Navigate to={authenticationPath} replace />
}

export default ProtectedRoute
