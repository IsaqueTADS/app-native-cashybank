import { AppHeader } from '@/components/AppHeader'
import { useAuthContext } from '@/contexts/auth-context'
import { Redirect, Stack, usePathname } from 'expo-router'

export default function PrivateLayout() {
  const { user, token } = useAuthContext()
  const pathname = usePathname()

  if (!user || !token) return <Redirect href={'/login'} />

  return (
    <>
      {!pathname.startsWith('/profile') && <AppHeader />}
      <Stack screenOptions={{ headerShown: false }} />
    </>
  )
}
