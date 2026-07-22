import { AppHeader } from '@/components/AppHeader'
import { useAuthContext } from '@/contexts/auth-context'
import { Redirect, Stack } from 'expo-router'

export default function PrivateLayout() {
  const { user, token } = useAuthContext()

  if (!user || !token) return <Redirect href={'/login'} />

  return (
    <>
      <AppHeader />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  )
}
