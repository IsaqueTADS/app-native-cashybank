import { useKeyboardVisible } from '@/hooks/useKeyboardVisible'
import { Image, View } from 'react-native'

export function AuthHeader() {
  const keyboardIsVisible = useKeyboardVisible()

  if (keyboardIsVisible) return null

  return (
    <View className="mt-5 min-h-40 w-full items-center justify-center px-0 py-12">
      <Image
        source={require('@/assets/logo_cashybank.png')}
        className="h-14 w-[240px]"
      />
    </View>
  )
}
