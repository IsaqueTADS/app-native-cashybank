import { LoadingScreen } from '@/components/LoadingScreen'
import { AuthContextProvider, useAuthContext } from '@/contexts/auth-context'
import { SnackbarProvider } from '@/contexts/snackbar-context'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { useTheme } from '@/hooks/use-theme'
import { Stack } from 'expo-router'
import '../global.css'
import { Snackbar } from '@/components/Snackbar'

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
    <SnackbarProvider>
      <ThemeProvider>
        <AuthContextProvider>
          <StackLayout />
          <Snackbar />
        </AuthContextProvider>
      </ThemeProvider>
    </SnackbarProvider>
  )
}
