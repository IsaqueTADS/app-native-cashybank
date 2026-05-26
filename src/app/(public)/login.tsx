import { router } from "expo-router";
import { Button, Text, TextInput, View } from "react-native";

export default function Login (){
  return <View className="flex-1 bg-green-400">
    <Text className="text-nyc-text-primary" >
      Tela de login
    </Text>
    <View className="" >
      <TextInput className="bg-transparent w-full border border-nyc-border " />
    </View>
    <Button title="sair"  onPress={() => router.navigate("/")}/>
  </View>
}