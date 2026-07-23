import { LoadingScreen } from '@/components/LoadingScreen'
import { Snackbar } from '@/components/Snackbar'
import { AuthContextProvider, useAuthContext } from '@/contexts/auth-context'
import { BottomSheetProvider } from '@/contexts/bottomsheet-context'
import { SnackbarProvider } from '@/contexts/snackbar-context'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { useTheme } from '@/hooks/use-theme'
import { Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
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
    <GestureHandlerRootView className='flex-1'>
      <SnackbarProvider>
        <ThemeProvider>
          <AuthContextProvider>
            <BottomSheetProvider>
              <StackLayout />
              <Snackbar />
            </BottomSheetProvider>
          </AuthContextProvider>
        </ThemeProvider>
      </SnackbarProvider>
    </GestureHandlerRootView>
  )
}
