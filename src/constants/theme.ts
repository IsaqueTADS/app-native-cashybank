export const Colors = {
  light: {
    text: '#FFFFFF',
    background: '#0A0A0A',
    backgroundElement: '#18181B',
    backgroundSelected: '#2E3135',
    textSecondary: '#A1A1AA',
  },
  dark: {
    text: '#FFFFFF',
    background: '#0A0A0A',
    backgroundElement: '#18181B',
    backgroundSelected: '#2E3135',
    textSecondary: '#A1A1AA',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;
