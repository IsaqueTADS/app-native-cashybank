import { DismissKeyboardView } from "@/components/DismissKeyBoardView";
import { router } from "expo-router";
import { Button, Text, TextInput, View } from "react-native";

export default function Login (){
  return <DismissKeyboardView>
    <Text className="text-nyc-text-primary " >
      Tela de login
    </Text>
    <View className="" >
      <TextInput className="bg-nyc-card w-full border border-nyc-border " />
    </View>
    <Button title="sair"  onPress={() => router.navigate("/")}/>
  </DismissKeyboardView>
}