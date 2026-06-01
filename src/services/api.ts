import { create } from 'axios'
import { Platform } from 'react-native'

const baseURL =
  Platform.OS === 'android' ? 'http://10.0.2.2:3333' : 'http://localhost:3333'

const api = create({
  baseURL,
})

export { api }
