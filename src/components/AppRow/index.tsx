import { useTheme } from '@/hooks/use-theme'
import { Feather } from '@expo/vector-icons'
import { clsx } from 'clsx'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { twMerge } from 'tailwind-merge'

interface AppRowProps extends TouchableOpacityProps {
  iconName?: keyof typeof Feather.glyphMap
  iconColor?: string
  label: string
  labelColor?: string
  showArrow?: boolean
  arrowColor?: string
  onPress?: () => void;
}

export function AppRow({
  iconName = 'user',
  iconColor,
  label,
  labelColor,
  showArrow = true,
  arrowColor,
  className,
  onPress,
  ...rest
}: AppRowProps) {
  const theme = useTheme()

  return (
    <TouchableOpacity onPress={onPress}
      className={twMerge(clsx('flex-row items-center py-lg', className))}
      {...rest}
    >
      <Feather
        name={iconName}
        size={20}
        color={iconColor ?? theme.colors.primary}
      />

      <Text
        className="flex-1 pl-md text-base"
        style={{ color: labelColor ?? theme.colors.foreground }}
      >
        {label}
      </Text>

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
