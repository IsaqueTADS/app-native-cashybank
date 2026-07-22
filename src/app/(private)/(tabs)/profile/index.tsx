import { AppRow } from '@/components/AppRow'
import { List } from '@/components/List'
import { useAuthContext } from '@/contexts/auth-context'
import { useTheme } from '@/hooks/use-theme'
import { Feather } from '@expo/vector-icons'
import { router } from 'expo-router'
import { Image, Text, View } from 'react-native'

export default function Profile() {
  const { handleLogout, user } = useAuthContext()
  const theme = useTheme()

  const MENU_ITEMS = [
    { LABEL: 'Dados pessoais', ICON: 'user' as const, SHOW_ARROW: true },
    {
      LABEL: 'Configuração',
      ICON: 'settings' as const,
      SHOW_ARROW: true,
      ON_PRESS: () => {
        router.navigate('/profile/settings')
      },
    },
    { LABEL: 'Segurança', ICON: 'shield' as const, SHOW_ARROW: true },
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
    <View className="flex-1 bg-background px-6 pt-8">
      <View className="flex-1">
        <View className="items-center gap-3 px-6 pb-4 pt-7">
          <View className="h-[88px] w-[88px]">
            <Image
              source={require('@/assets/isaque-perfil-profissional.png')}
              className="h-[88px] w-[88px] rounded-full"
            />
            <Feather
              name="camera"
              size={28}
              color={theme.colors.primary}
              style={{ position: 'absolute', right: 0, bottom: 0 }}
            />
          </View>

          <Text className="font-display text-2xl font-bold text-foreground">
            {user?.name}
          </Text>

          <Text className="font-body text-sm text-muted-foreground">
            {user?.email}
          </Text>

          <Text className="font-body text-[13px] text-muted">
            Membro desde maio de{' '}
            {new Date(user?.created_at || '').getFullYear()}
          </Text>
        </View>

        <View className="flex-1">
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
