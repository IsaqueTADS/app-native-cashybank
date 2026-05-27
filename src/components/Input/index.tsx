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
    {label && <Text className="text-nyc-text-secondary">{label}</Text>}

    <TouchableOpacity className="flex-row  items-center justify-between border-[1px] border-nyc-border ">
      <MaterialIcons name={leftIconName} color={theme.colors.textSecondary} />
      <TextInput 
       value={value}
       onChange={onChange}
       {...rest}
      />
    </TouchableOpacity>

  </View>
  )}}/>
    

}