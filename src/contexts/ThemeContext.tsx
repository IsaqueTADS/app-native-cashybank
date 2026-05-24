import { useColorScheme, vars } from 'nativewind';
import { View } from 'react-native';

import { darkTheme, lightTheme } from '@/constants/design-tokens';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const scheme = useColorScheme();

  console.log(scheme.colorScheme)
  const themeStyle = scheme.colorScheme === 'dark' ? vars(darkTheme) : vars(lightTheme);

  return <View style={[{ flex: 1 }, themeStyle]}>{children}</View>;
}
