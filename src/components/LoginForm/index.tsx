import { useForm } from "react-hook-form"
import { View } from "react-native"
import { z } from "zod"
import { AppInput } from "../Input"

const loginFormSchema = z.object({
  email:z.email("O Email deve ser válido"),
  password: z.string().min(1, "Prencha um valor"),
})

type LoginFormSchema = z.infer<typeof loginFormSchema>

export function LoginForm(){
  const {control, handleSubmit, formState: {isSubmitting}} = useForm<LoginFormSchema>()

  return <View className="p-7 bg-card rounded-lg gap-7">
    <AppInput control={control} name="email" label="Email" placeholder="Example@gmail.com" leftIconName="email"   />
    <AppInput control={control} name="password" label="Senha" placeholder="Senha" leftIconName="lock" secureTextEntry   />
  </View>
}
