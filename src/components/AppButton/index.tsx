import { useTheme } from '@/hooks/use-theme'
import { MaterialIcons } from '@expo/vector-icons'
import { clsx } from 'clsx'
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

interface AppButtonParams extends TouchableOpacityProps {
  variant?: 'default' | 'outline'
  iconName?: keyof typeof MaterialIcons.glyphMap
  isLoading?: boolean
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
  isLoading = false,
  disabled,
  ...rest
}: React.PropsWithChildren<AppButtonParams>) {
  const theme = useTheme()

  const isDisabled = disabled || isLoading

  return (
    <TouchableOpacity
      {...rest}
      disabled={isDisabled}
      className={clsx(
        'w-full flex-row items-center rounded-md px-4 py-4',
        variants.variant[variant],
        isLoading ? 'justify-center opacity-70' : '',
        !isLoading && iconName ? 'justify-between' : 'justify-center',
        isDisabled && 'opacity-50',
      )}
    >
      {isLoading ? (
        <ActivityIndicator
          color={
            variant === 'outline'
              ? theme.colors.primary
              : theme.colors.primaryForeground
          }
        />
      ) : (
        <>
          <Text
            className={clsx(
              'text-base font-bold',
              variant === 'outline'
                ? 'text-primary'
                : 'text-primary-foreground',
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
        </>
      )}
    </TouchableOpacity>
  )
}
