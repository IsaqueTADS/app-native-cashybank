import { vars, useColorScheme } from 'nativewind';
import { View } from 'react-native';

import { lightTheme, darkTheme } from '@/constants/design-tokens';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const scheme = useColorScheme();
  const themeStyle = scheme === 'dark' ? vars(darkTheme) : vars(lightTheme);

  return <View style={[{ flex: 1 }, themeStyle]}>{children}</View>;
}
