import { useTheme } from '@/hooks/use-theme'
import { MaterialIcons } from '@expo/vector-icons'
import { Text, View } from 'react-native'

export const Error = ({ children }: React.PropsWithChildren) => {
  const theme = useTheme()
  return (
    <View className="flex-row items-center ">
      <MaterialIcons
        name="error-outline"
        size={16}
        color={theme.colors.destructive}
        className="mr-1"
      />
      <Text className="text-destructive">{children}</Text>
    </View>
  )
}
