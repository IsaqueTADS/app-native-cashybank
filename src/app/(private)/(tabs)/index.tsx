import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 bg-background items-center justify-center p-lg">
      <Text className="text-foreground font-display text-3xl">
        CashyBank
      </Text>
      <Text className="text-muted-foreground font-body text-base mt-md">
        Saldo disponível
      </Text>
      <Text className="text-primary font-display text-4xl font-bold mt-lg">
        R$ 1.250,00
      </Text>
      <View className="bg-card rounded-md p-lg mt-xl w-full">
        <Text className="text-foreground font-display text-lg">
          Últimas transações
        </Text>
        <View className="bg-border h-px my-md" />
        <Text className="text-muted-foreground font-body text-sm">
          Nenhuma transação recente
        </Text>
      </View>
      <View className="flex-row gap-md mt-lg">
        <View className="bg-primary rounded-sm px-xl py-md">
          <Text className="text-primary-foreground font-display text-base font-bold">
            Entrada
          </Text>
        </View>
        <View className="bg-destructive rounded-sm px-xl py-md">
          <Text className="text-destructive-foreground font-display text-base font-bold">
            Saída
          </Text>
        </View>
      </View>

         <Button title="Home" onPress={() => router.navigate("/")}/>
      <Button title="Login" onPress={() => router.navigate("/login")}/>
      <Button title="Register" onPress={() => router.navigate("/register")}/>
    </View>
  );
}
