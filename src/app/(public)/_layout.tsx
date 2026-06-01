import { useAuthContext } from '@/contexts/auth-context'
import { useTheme } from '@/hooks/use-theme'
import { Redirect, Stack } from 'expo-router'

export default function PublicLayout() {
  const theme = useTheme()
  const { user, token } = useAuthContext()

  if (user && token) return <Redirect href={'/profile'} />

  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: theme.colors.background },
        headerStyle: { backgroundColor: theme.colors.background },
        headerTintColor: theme.colors.foreground,
        headerShown: false,
      }}
    />
  )
}
