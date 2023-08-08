import React, { ReactNode, createContext, useContext, useState } from 'react'

interface SignupContextType {
  data: {
    [key: string]: any
    step1?: any
    step2?: any
    // ... add as many steps as you have
  }
  addData: (step: string, value: any) => void
  resetData: () => void
}

const SignupContext = createContext<SignupContextType | undefined>(undefined)

export const useSignup = () => {
  const context = useContext(SignupContext)
  if (!context) {
    throw new Error('useSignup must be used within a SignupProvider')
  }
  return context
}
type ParentProps = {
  children: ReactNode
}

export const SignupProvider: React.FC<ParentProps> = ({ children }) => {
  const [data, setData] = useState<SignupContextType['data']>({})

  const addData = (step: string, value: any) => {
    setData((prev) => ({ ...prev, [step]: { ...prev[step], ...value } }))
  }

  const resetData = () => {
    setData({})
  }

  return (
    <SignupContext.Provider value={{ data, addData, resetData }}>{children}</SignupContext.Provider>
  )
}
