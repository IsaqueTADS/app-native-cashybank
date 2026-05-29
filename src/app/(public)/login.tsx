import { AuthHeader } from '@/components/AuthHeader'
import { DismissKeyboardView } from '@/components/DismissKeyBoardView'
import { LoginForm } from '@/components/LoginForm'
import { View } from 'react-native'

export default function Login() {
  return (
    <DismissKeyboardView>
      <View className="w-[82%] flex-1 self-center ">
        <AuthHeader />
        <LoginForm />
      </View>
    </DismissKeyboardView>
  )
}
