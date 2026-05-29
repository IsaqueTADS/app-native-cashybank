import { useTheme } from '@/hooks/use-theme'
import { MaterialIcons } from '@expo/vector-icons'
import { clsx } from 'clsx'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface AppButtonParams extends TouchableOpacityProps {
  variant?: 'default' | 'outline'
  iconName?: keyof typeof MaterialIcons.glyphMap
}

const variants = {
  variant: {
    default: 'bg-primary',
    outline: 'border border-primary text-primary',
  },
}

export function AppButton({
  children,
  iconName,
  variant = 'default',
  ...rest
}: React.PropsWithChildren<AppButtonParams>) {
  const theme = useTheme()
  return (
    <TouchableOpacity
      {...rest}
      className={clsx(
        'w-full flex-row  rounded-md px-4 py-4',
        variants.variant[variant],
        iconName ? 'justify-between' : 'justify-center',
      )}
    >
      <Text
        className={clsx(
          'text-base font-bold',
          variant === 'outline' ? 'text-primary' : 'text-primary-foreground',
        )}
      >
        {children}
      </Text>
      {iconName && (
        <MaterialIcons
          name={iconName}
          size={24}
          color={
            variant === 'outline'
              ? theme.colors.primary
              : theme.colors.primaryForeground
          }
        />
      )}
    </TouchableOpacity>
  )
}
