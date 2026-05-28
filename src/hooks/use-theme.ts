import { themeTokens } from '@/constants/design-tokens'
import { useColorScheme } from 'nativewind'

export type Theme = typeof themeTokens.light

export function useTheme(): Theme {
  const { colorScheme } = useColorScheme()

  return colorScheme === 'dark' ? themeTokens.dark : themeTokens.light
}

export type ThemeColor = keyof Theme['colors']
