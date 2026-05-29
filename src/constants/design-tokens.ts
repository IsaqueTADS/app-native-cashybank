export const colors = {
  background: 'var(--nyc-background)',
  foreground: 'var(--nyc-foreground)',
  card: 'var(--nyc-card)',
  'card-foreground': 'var(--nyc-card-foreground)',
  border: 'var(--nyc-border)',
  input: 'var(--nyc-input)',
  'input-foreground': 'var(--nyc-input-foreground)',
  primary: '#C4F82A',
  'primary-foreground': '#0A0A0A',
  muted: 'var(--nyc-muted)',
  'muted-foreground': 'var(--nyc-muted-foreground)',
  destructive: '#FA541C',
  'destructive-foreground': '#FFFFFF',
}

export const lightTheme = {
  '--nyc-background': '#EDEDED',
  '--nyc-foreground': '#0A0A0A',
  '--nyc-card': '#F0F0F3',
  '--nyc-card-foreground': '#0A0A0A',
  '--nyc-border': '#E0E0E0',
  '--nyc-input': '#F0F0F3',
  '--nyc-input-foreground': '#60646C',
  '--nyc-muted': '#9CA3AF',
  '--nyc-muted-foreground': '#60646C',
}

export const darkTheme = {
  '--nyc-background': '#0A0A0A',
  '--nyc-foreground': '#FFFFFF',
  '--nyc-card': '#18181B',
  '--nyc-card-foreground': '#FFFFFF',
  '--nyc-border': '#27272A',
  '--nyc-input': '#18181B',
  '--nyc-input-foreground': '#A1A1AA',
  '--nyc-muted': '#52525B',
  '--nyc-muted-foreground': '#A1A1AA',
}

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
}

export const fontFamily = {
  display: ['Space Grotesk'],
  body: ['Manrope'],
}

export const fontSize = {
  xs: ['12px', { lineHeight: '16px' }],
  sm: ['14px', { lineHeight: '20px' }],
  base: ['16px', { lineHeight: '24px' }],
  lg: ['18px', { lineHeight: '28px' }],
  xl: ['20px', { lineHeight: '28px' }],
  '2xl': ['24px', { lineHeight: '32px' }],
  '3xl': ['32px', { lineHeight: '40px' }],
  '4xl': ['40px', { lineHeight: '48px' }],
}

export const borderRadius = {
  sm: '6px',
  md: '12px',
  lg: '14px',
  xl: '16px',
}

export const themeTokens = {
  light: {
    colors: {
      background: lightTheme['--nyc-background'],
      foreground: lightTheme['--nyc-foreground'],
      card: lightTheme['--nyc-card'],
      cardForeground: lightTheme['--nyc-card-foreground'],
      border: lightTheme['--nyc-border'],
      input: lightTheme['--nyc-input'],
      inputForeground: lightTheme['--nyc-input-foreground'],
      primary: '#C4F82A',
      primaryForeground: '#0A0A0A',
      muted: lightTheme['--nyc-muted'],
      mutedForeground: lightTheme['--nyc-muted-foreground'],
      destructive: '#FA541C',
      destructiveForeground: '#FFFFFF',
    },
  },
  dark: {
    colors: {
      background: darkTheme['--nyc-background'],
      foreground: darkTheme['--nyc-foreground'],
      card: darkTheme['--nyc-card'],
      cardForeground: darkTheme['--nyc-card-foreground'],
      border: darkTheme['--nyc-border'],
      input: darkTheme['--nyc-input'],
      inputForeground: darkTheme['--nyc-input-foreground'],
      primary: '#C4F82A',
      primaryForeground: '#0A0A0A',
      muted: darkTheme['--nyc-muted'],
      mutedForeground: darkTheme['--nyc-muted-foreground'],
      destructive: '#FA541C',
      destructiveForeground: '#FFFFFF',
    },
  },
} as const
