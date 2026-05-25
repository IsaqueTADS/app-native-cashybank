import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Login (){
  return <View className="flex-1 bg-green-400">
    <Text className="text-nyc-text-primary" >
      Login
    </Text>
    <Button title="sair"  onPress={() => router.navigate("/")}/>
  </View>
}