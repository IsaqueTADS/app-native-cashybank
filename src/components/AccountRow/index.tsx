import { useTheme } from '@/hooks/use-theme'
import { Feather } from '@expo/vector-icons'
import { clsx } from 'clsx'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { twMerge } from 'tailwind-merge'

interface AccountRowProps extends TouchableOpacityProps {
  iconName?: keyof typeof Feather.glyphMap
  iconColor?: string
  label: string
  showArrow?: boolean
  arrowColor?: string
}

export function AccountRow({
  iconName = 'user',
  iconColor,
  label,
  showArrow = true,
  arrowColor,
  className,
  ...rest
}: AccountRowProps) {
  const theme = useTheme()

  return (
    <TouchableOpacity
      className={twMerge(clsx('flex-row items-center py-lg', className))}
      {...rest}
    >
      <Feather
        name={iconName}
        size={20}
        color={iconColor ?? theme.colors.primary}
      />

      <Text className="flex-1 pl-md text-base text-white">{label}</Text>

      {showArrow && (
        <Feather
          name="chevron-right"
          size={18}
          color={arrowColor ?? theme.colors.muted}
        />
      )}
    </TouchableOpacity>
  )
}
