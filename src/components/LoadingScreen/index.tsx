import { useTheme } from '@/hooks/use-theme'
import { ActivityIndicator, Image, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export function LoadingScreen() {
  const theme = useTheme()

  return (
    <SafeAreaView className='flex-1'>
      <View
        className="flex-1 items-center justify-center gap-6"
        style={{ backgroundColor: theme.colors.background }}
      >
        <Image
          source={require('@/assets/logo_cashybank.png')}
          className="h-14 w-[240px]"
        />
        <ActivityIndicator size="small" color={theme.colors.primary} />
      </View>
    </SafeAreaView>
  )
}
