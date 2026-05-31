import { LoginFormSchema } from '@/components/LoginForm'
import { IAuthResponse } from '@/shared/interfaces/https/auth-response'
import { api } from '../api'

export async function authenticateService(userData: LoginFormSchema) {
  const { data } = await api.post<IAuthResponse>('/auth/login', userData)

  return data
}
