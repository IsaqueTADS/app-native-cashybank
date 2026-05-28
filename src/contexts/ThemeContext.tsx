import { useColorScheme, vars } from 'nativewind'
import { View } from 'react-native'

import { darkTheme, lightTheme } from '@/constants/design-tokens'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { colorScheme } = useColorScheme()

  const themeStyle = colorScheme === 'dark' ? vars(darkTheme) : vars(lightTheme)

  return <View style={[{ flex: 1 }, themeStyle]}>{children}</View>
}
