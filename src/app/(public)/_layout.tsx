import { useTheme } from '@/hooks/use-theme'
import { Stack } from 'expo-router'

export default function PublicLayout() {
  const theme = useTheme()

  //  const [user, setUser] = useState(true)

  //   if(user) return <Redirect href={"/"} />

  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: theme.colors.background },
        headerStyle: { backgroundColor: theme.colors.background },
        headerTintColor: theme.colors.foreground,
        headerShown: false,
      }}
    ></Stack>
  )
}
