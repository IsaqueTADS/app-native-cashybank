import { AuthHeader } from '@/components/AuthHeader'
import { DismissKeyboardView } from '@/components/DismissKeyBoardView'
import { RegisterForm } from '@/components/RegisterForm'
import { View } from 'react-native'

export default function Register() {
  return (
    <DismissKeyboardView>
      <View className="w-[82%] flex-1 self-center ">
        <AuthHeader />
        <RegisterForm />
      </View>
    </DismissKeyboardView>
  )
}
