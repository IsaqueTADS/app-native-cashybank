import { Feather } from '@expo/vector-icons'
import { clsx } from 'clsx'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { twMerge } from 'tailwind-merge'

interface AppToggleButtonProps extends TouchableOpacityProps {
  label: string
  iconName: keyof typeof Feather.glyphMap
  isActive?: boolean
  activeColor?: string
}

export function AppToggleButton({
  label,
  iconName,
  isActive = false,
  activeColor,
  className,
  ...rest
}: AppToggleButtonProps) {
  return (
    <TouchableOpacity
      className={twMerge(
        clsx(
          'flex-1 flex-row items-center justify-center gap-2 rounded-md bg-card py-4',
          className,
        ),
      )}
      {...rest}
    >
      <Feather
        name={iconName}
        size={24}
        color={isActive ? activeColor : '#7c7c8a'}
      />
      <Text
        className={clsx(
          'font-body text-base',
          isActive ? 'text-foreground' : 'text-muted-foreground',
        )}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}
