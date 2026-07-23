import { useBottomSheetContext } from '@/contexts/bottomsheet-context'
import { Image, Text, View } from 'react-native'
import { AppButton } from '../AppButton'

export function AppHeader() {
  const { openBottomsheet, closeBottomSheet } = useBottomSheetContext()
  return (
    <View className="mt-5 flex w-full flex-row  items-center justify-between p-8 ">
      <Image
        source={require('@/assets/logo_cashybank.png')}
        className="w-{130px] h-[38px] self-start"
      />
      <AppButton
        className="w-auto py-3 "
        onPress={() =>
          openBottomsheet(
            <Text className="text-white">Testando o testavel</Text>,
            1,
          )
        }
      >
        Nova transação
      </AppButton>
    </View>
  )
}
