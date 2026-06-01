import { LoginFormSchema } from '@/components/LoginForm'
import { RegisterFormSchema } from '@/components/RegisterForm'
import { IAuthResponse } from '@/shared/interfaces/https/auth-response'
import { api } from '../api'

type RegisterApiPayload = Omit<RegisterFormSchema, 'confirmPassword'>

export async function authenticateService(userData: LoginFormSchema) {
  const { data } = await api.post<IAuthResponse>('/auth/login', userData)

  return data
}

export async function registerService({
  fullName,
  email,
  password,
}: RegisterApiPayload) {
  await api.post('/auth/register', { name: fullName, email, password })
}
