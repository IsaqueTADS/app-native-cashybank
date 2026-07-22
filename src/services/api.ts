import { AppError } from '@/shared/helpers/AppError'
import { create } from 'axios'
import { Platform } from 'react-native'

const baseURL =
  Platform.OS === 'android' ? 'http://10.0.2.2:3333' : 'http://localhost:3333'

const api = create({
  baseURL,
})

export { api }

api.interceptors.response.use(
  config => config,
  error => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message))
    }else {
      return Promise.reject(new AppError("Falha na requisição."))
    }
  },
)
