import { useBottomSheetContext } from '@/contexts/bottomsheet-context'
import { useTheme } from '@/hooks/use-theme'
import { CreateTransactionInterface } from '@/shared/interfaces/https/create-transaction'
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export function NewTransaction() {
  const [transaction, setTranscation] = useState<CreateTransactionInterface>({
    categoryId: 0,
    description: '',
    typeId: 0,
    value: 0,
  })
  const theme = useTheme()
  const {closeBottomSheet} = useBottomSheetContext()

  return (
    <View className="px-8 py-5">
      <TouchableOpacity className="w-full flex-row items-center justify-between">
        <Text className="text-xl font-bold text-white">Nova transação</Text>
        <MaterialIcons name="close" color={'#7c7c8aff'} size={20} onPress={closeBottomSheet} />
      </TouchableOpacity>
    </View>
  )
}
