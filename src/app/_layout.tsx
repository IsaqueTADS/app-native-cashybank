import { LoadingScreen } from '@/components/LoadingScreen'
import { AuthContextProvider, useAuthContext } from '@/contexts/auth-context'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { useTheme } from '@/hooks/use-theme'
import { Stack } from 'expo-router'
import '../global.css'

function StackLayout() {
  const theme = useTheme()
  const { isRestoringSession } = useAuthContext()

  return isRestoringSession ? (
    <LoadingScreen />
  ) : (
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

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AuthContextProvider>
        <StackLayout />
      </AuthContextProvider>
    </ThemeProvider>
  )
}
