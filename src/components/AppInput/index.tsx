import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { clsx } from "clsx";
import { useRef, useState } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";

interface AppInputParams<T extends FieldValues> extends TextInputProps {
  control: Control<T>
  name: Path<T>
  leftIconName?: keyof typeof MaterialIcons.glyphMap
  label?: string

}

export function AppInput<T extends FieldValues> ({control, name, leftIconName, label, secureTextEntry, ...rest}: AppInputParams<T>){
  const theme = useTheme()
  const inputRef = useRef<TextInput>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [showText, setShowText] = useState(secureTextEntry)

  function handleFocus(){
    if(inputRef.current){
      setIsFocused(inputRef.current.isFocused())
    }
  }

  return <Controller control={control} name={name} render={({field: {onChange, value}}) =>{ return (
  <View className="w-full">
    {label && <Text className={clsx("mb-2 text-base", isFocused ? "text-primary" : "text-muted-foreground ")}>{label}</Text>}

    <TouchableOpacity className={clsx("flex-row items-center border  bg-transparent rounded-lg px-4 py-1.5 gap-2", isFocused ?  "border-primary" : "border-border" )}>
      {leftIconName && <MaterialIcons name={leftIconName} color={isFocused ? theme.colors.primary : theme.colors.mutedForeground} size={22} />}
      <TextInput
       value={value}
       onChange={onChange}
       className="flex-1 text-input-foreground text-xl"
       placeholderTextColor={theme.colors.muted}
       onFocus={handleFocus}
       onEndEditing={handleFocus}
       ref={inputRef}
       secureTextEntry={showText}
       {...rest}
      />
       {
      secureTextEntry && <TouchableOpacity onPress={ () => setShowText((prev) => !prev)}><MaterialIcons name={showText ? "visibility" : "visibility-off"} size={22}  color={theme.colors.mutedForeground}/></TouchableOpacity>
    }
    </TouchableOpacity>

   

  </View>
  )}}/>
}