import { AppRow } from '@/components/AppRow'
import { List } from '@/components/List'
import { useAuthContext } from '@/contexts/auth-context'
import { useTheme } from '@/hooks/use-theme'
import { Text, View } from 'react-native'

export default function Profile() {
  const { handleLogout, user } = useAuthContext()
  const theme = useTheme()

  const MENU_ITEMS = [
    { LABEL: 'Dados pessoais', ICON: 'user' as const, SHOW_ARROW: true },
    { LABEL: 'Segurança', ICON: 'shield' as const, SHOW_ARROW: true },
    { LABEL: 'Notificações', ICON: 'bell' as const, SHOW_ARROW: true },
    { LABEL: 'Ajuda', ICON: 'info' as const, SHOW_ARROW: true },
    {
      LABEL: 'Sair da conta',
      ICON: 'log-out' as const,
      SHOW_ARROW: false,
      ICON_COLOR: theme.colors.destructive,
      LABEL_COLOR: theme.colors.destructive,
      ON_PRESS: handleLogout,
    },
  ]

  return (
    <View className="flex-1 bg-background p-8">
      <View className="flex-1">
        <Text className="text-primary"> {user?.name}</Text>
        <Text className="text-foreground"> {user?.email}</Text>
        <Text className="text-foreground">
          {new Date(user?.created_at || '').toLocaleDateString()}
        </Text>
        <View className="mt-[100px] flex-1">
          <List
            data={MENU_ITEMS}
            renderItem={({ item }) => (
              <AppRow
                label={item.LABEL}
                iconName={item.ICON}
                showArrow={item.SHOW_ARROW}
                iconColor={item.ICON_COLOR}
                labelColor={item.LABEL_COLOR}
                onPress={item.ON_PRESS}
              />
            )}
          />
        </View>
      </View>
    </View>
  )
}
