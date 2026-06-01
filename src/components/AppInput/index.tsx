import { useTheme } from '@/hooks/use-theme'
import { MaterialIcons } from '@expo/vector-icons'
import { clsx } from 'clsx'
import { useRef, useState } from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native'
import { Error } from '../Error'

interface AppInputParams<T extends FieldValues> extends TextInputProps {
  control: Control<T>
  name: Path<T>
  leftIconName?: keyof typeof MaterialIcons.glyphMap
  label?: string
}

export function AppInput<T extends FieldValues>({
  control,
  name,
  leftIconName,
  label,
  secureTextEntry,
  ...rest
}: AppInputParams<T>) {
  const theme = useTheme()
  const inputRef = useRef<TextInput>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [showText, setShowText] = useState(secureTextEntry)

  function handleFocus() {
    if (inputRef.current) {
      setIsFocused(inputRef.current.isFocused())
    }
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => {
        return (
          <View className="w-full">
            {label && (
              <Text
                className={clsx(
                  'mb-2 text-base',
                  isFocused ? 'text-primary' : 'text-muted-foreground ',
                )}
              >
                {label}
              </Text>
            )}

            <TouchableOpacity
              className={clsx(
                'mb-1 flex-row items-center  gap-2 rounded-lg border bg-transparent px-4 py-1.5',
                isFocused ? 'border-primary' : 'border-border',
              )}
              onPress={() => inputRef.current?.focus()}
            >
              {leftIconName && (
                <MaterialIcons
                  name={leftIconName}
                  color={
                    error
                      ? theme.colors.destructive
                      : isFocused
                        ? theme.colors.primary
                        : theme.colors.mutedForeground
                  }
                  size={22}
                />
              )}
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                className={clsx(
                  'flex-1 text-xl ',
                  error ? 'text-destructive' : 'text-input-foreground',
                )}
                placeholderTextColor={theme.colors.muted}
                onFocus={handleFocus}
                onEndEditing={handleFocus}
                ref={inputRef}
                secureTextEntry={showText}
                {...rest}
              />
              {secureTextEntry && (
                <TouchableOpacity onPress={() => setShowText(prev => !prev)}>
                  <MaterialIcons
                    name={showText ? 'visibility' : 'visibility-off'}
                    size={22}
                    color={theme.colors.mutedForeground}
                  />
                </TouchableOpacity>
              )}
            </TouchableOpacity>
            {error && <Error> {error.message}</Error>}
          </View>
        )
      }}
    />
  )
}
