import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native'
import { z } from 'zod'
import { AppButton } from '../AppButton'
import { AppInput } from '../AppInput'

const loginFormSchema = z.object({
  email: z.email('O Email deve ser válido'),
  password: z.string().min(1, 'Prencha um valor'),
})

type LoginFormSchema = z.infer<typeof loginFormSchema>

export function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormSchema>()

  return (
    <View className="gap-4 ">
      <View className="mb-14 gap-7 rounded-lg bg-card p-7 ">
        <AppInput
          control={control}
          name="email"
          label="Email"
          placeholder="Example@gmail.com"
          leftIconName="email"
        />
        <AppInput
          control={control}
          name="password"
          label="Senha"
          placeholder="Senha"
          leftIconName="lock-outline"
          secureTextEntry
        />
      </View>

      <Text className="text-muted-foreground">Não tem uma conta?</Text>

      <AppButton iconName="arrow-forward" variant="outline">
        Cadastre-se
      </AppButton>
    </View>
  )
}
