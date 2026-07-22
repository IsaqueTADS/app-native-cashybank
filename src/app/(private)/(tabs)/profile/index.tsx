import { AppRow } from '@/components/AppRow'
import { List } from '@/components/List'
import { useAuthContext } from '@/contexts/auth-context'
import { useTheme } from '@/hooks/use-theme'
import { Text, View } from 'react-native'

export default function Profile() {
  const { handleLogout, user } = useAuthContext()
  const theme = useTheme()

  console.log(user)
  return (
    <View className="flex-1 bg-background">
      <View className="flex-1">
        <Text className="text-primary"> {user?.name}</Text>
        <Text className="text-foreground"> {user?.email}</Text>
        <Text className="text-foreground">
          {new Date(user?.created_at || '').toLocaleDateString()}
        </Text>
        <View className="mt-[100px]">
          <AppRow
            label="Sair da conta"
            labelColor={theme.colors.destructive}
            iconColor={theme.colors.destructive}
            iconName="log-out"
            onPress={handleLogout}

            <List />
          />
        </View>
      </View>
    </View>
  )
}
