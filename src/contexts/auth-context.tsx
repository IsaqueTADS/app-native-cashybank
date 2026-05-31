import { LoginFormSchema } from '@/components/LoginForm'
import { RegisterFormSchema } from '@/components/RegisterForm'
import { authenticateService } from '@/services/cashybank/auth-services'
import { createContext, useContext, useState } from 'react'

type AuthContextType = {
  user: null
  token: string | null
  handleAutenticate: (params: LoginFormSchema) => Promise<void>
  handleRegister: (params: RegisterFormSchema) => Promise<void>
  handleLogout: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

export function AuthContextProvider({ children }: React.PropsWithChildren) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  async function handleAutenticate({ email, password }: LoginFormSchema) {
    const response = await authenticateService({
      email,
      password,
    })

    console.log(response)
  }

  async function handleRegister({
    fullName,
    email,
    password,
  }: RegisterFormSchema) {}

  function handleLogout() {}

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        handleAutenticate,
        handleRegister,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuthContext deve ser usado dentro de um AuthProvider')
  }

  return context
}
