import { LoginFormSchema } from '@/components/LoginForm'
import { RegisterFormSchema } from '@/components/RegisterForm'
import {
  authenticateService,
  registerService,
} from '@/services/cashybank/auth-services'
import { IUser } from '@/shared/interfaces/user-interface'
import { createContext, useContext, useState } from 'react'

type AuthContextType = {
  user: IUser | null
  token: string | null
  handleAutenticate: (params: LoginFormSchema) => Promise<void>
  handleUserRegister: (params: RegisterFormSchema) => Promise<void>
  handleLogout: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

export function AuthContextProvider({ children }: React.PropsWithChildren) {
  const [user, setUser] = useState<IUser | null>(null)
  const [token, setToken] = useState<string | null>(null)

  async function handleAutenticate({ email, password }: LoginFormSchema) {
    const { user, token } = await authenticateService({
      email,
      password,
    })
    setUser(user)
    setToken(token)
  }

  async function handleUserRegister({
    fullName,
    email,
    password,
  }: RegisterFormSchema) {
    await registerService({ fullName, email, password })
    await handleAutenticate({ email, password })
  }

  function handleLogout() {}

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        handleAutenticate,
        handleUserRegister,
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
