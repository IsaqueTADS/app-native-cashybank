import { useSnackbarContext } from '@/contexts/snackbar-context'
import { Text, View } from 'react-native'

export function Snackbar() {
  const { visible, message } = useSnackbarContext()

  if (!visible) return <></>

  return (
    <View
      className={`h-{50px } absolute bottom-10 z-10 flex h-[50px] w-[90%] items-center justify-center self-center rounded-xl bg-destructive p-2`}
    >
      <Text className="text-bold text-base text-white">{message}</Text>
    </View>
  )
}
