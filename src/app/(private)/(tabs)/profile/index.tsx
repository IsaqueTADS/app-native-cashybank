import { AppButton } from '@/components/AppButton'
import { useAuthContext } from '@/contexts/auth-context'
import { router } from 'expo-router'
import { Text, View } from 'react-native'

export default function Profile() {
  const { handleLogout, user } = useAuthContext()

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
          <AppButton variant="outline" onPress={()=> router.navigate("/profile/settings")}>Configuração</AppButton>
        </View>
      </View>
      <AppButton onPress={handleLogout}>Sair</AppButton>
    </View>
  )
}
