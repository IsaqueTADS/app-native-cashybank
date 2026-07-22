import { router } from 'expo-router'
import { Button, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background p-8">
      <Text className="font-display text-3xl text-foreground">CashyBank</Text>
      <Text className="mt-md font-body text-base text-muted-foreground">
        Saldo disponível
      </Text>
      <Text className="mt-lg font-display text-4xl font-bold text-primary">
        R$ 1.250,00
      </Text>
      <View className="mt-xl w-full rounded-md bg-card p-lg">
        <Text className="font-display text-lg text-foreground">
          Últimas transações
        </Text>
        <View className="my-md h-px bg-border" />
        <Text className="font-body text-sm text-muted-foreground">
          Nenhuma transação recente
        </Text>
      </View>
      <View className="mt-lg flex-row gap-md">
        <View className="rounded-sm bg-primary px-xl py-md">
          <Text className="font-display text-base font-bold text-primary-foreground">
            Entrada
          </Text>
        </View>
        <View className="rounded-sm bg-destructive px-xl py-md">
          <Text className="font-display text-base font-bold text-destructive-foreground">
            Saída
          </Text>
        </View>
      </View>

      <Button title="Home" onPress={() => router.navigate('/')} />
      <Button title="Login" onPress={() => router.navigate('/login')} />
      <Button title="Register" onPress={() => router.navigate('/register')} />
    </SafeAreaView>
  )
}
