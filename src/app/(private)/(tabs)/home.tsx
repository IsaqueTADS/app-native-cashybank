import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-nyc-bg items-center justify-center p-lg">
      <Text className="text-nyc-text-primary font-display text-3xl">
        CashyBank
      </Text>
      <Text className="text-nyc-text-secondary font-body text-base mt-md">
        Saldo disponível
      </Text>
      <Text className="text-nyc-accent font-display text-4xl font-bold mt-lg">
        R$ 1.250,00
      </Text>
      <View className="bg-nyc-card rounded-md p-lg mt-xl w-full">
        <Text className="text-nyc-text-primary font-display text-lg">
          Últimas transações
        </Text>
        <View className="bg-nyc-border h-px my-md" />
        <Text className="text-nyc-text-secondary font-body text-sm">
          Nenhuma transação recente
        </Text>
      </View>
      <View className="flex-row gap-md mt-lg">
        <View className="bg-nyc-accent rounded-sm px-xl py-md">
          <Text className="text-nyc-accent-text font-display text-base font-bold">
            Entrada
          </Text>
        </View>
        <View className="bg-nyc-negative rounded-sm px-xl py-md">
          <Text className="text-nyc-text-primary font-display text-base font-bold">
            Saída
          </Text>
        </View>
      </View>
    </View>
  );
}
