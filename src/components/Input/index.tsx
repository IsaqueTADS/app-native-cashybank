import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";

interface AppInputParams<T extends FieldValues> extends TextInputProps {
  control: Control<T>
  name: Path<T>
  leftIconName?: keyof typeof MaterialIcons.glyphMap
  label?: string

}


export function AppInput<T extends FieldValues> ({control, name, leftIconName, label, ...rest}: AppInputParams<T>){
  const theme = useTheme()
  return <Controller control={control} name={name} render={({field: {onChange, value}}) =>{ return (
  <View className="w-full">
    {label && <Text className="text-muted-foreground">{label}</Text>}

    <View className="flex-row items-center border border-border bg-transparent rounded-md px-4 py-3.5">
      {leftIconName && <MaterialIcons name={leftIconName} color={theme.colors.mutedForeground} size={20} />}
      <TextInput
       value={value}
       onChange={onChange}
       className="flex-1 text-input-foreground"
       placeholderTextColor={theme.colors.muted}
       {...rest}
      />
    </View>

  </View>
  )}}/>
}