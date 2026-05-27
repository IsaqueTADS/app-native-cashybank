import { DismissKeyboardView } from "@/components/DismissKeyBoardView";
import { LoginForm } from "@/components/LoginForm";
import { View } from "react-native";

export default function Login (){
  return <DismissKeyboardView>

    <View className="flex-1 w-[82%] self-center " >
      <LoginForm />
    </View>
    
  </DismissKeyboardView>
}