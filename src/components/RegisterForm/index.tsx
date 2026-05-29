import { router } from 'expo-router'
import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native'
import { z } from 'zod'
import { AppButton } from '../AppButton'
import { AppInput } from '../AppInput'

const registerFormSchema = z.object({
  full_name: z.string().min(1, 'Prencha um valor'),
  email: z.email('O Email deve ser válido'),
  password: z.string().min(1, 'Prencha um valor'),
  confirm_password: z.string().min(1, 'Prencha um valor'),
})

type RegisterFormSchema = z.infer<typeof registerFormSchema>

export function RegisterForm() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RegisterFormSchema>()

  return (
    <View className="gap-4 mb-20 ">
      <View className="mb-14 gap-7 rounded-lg bg-card p-7 ">
        <AppInput
          control={control}
          name="full_name"
          label="Nome Completo"
          placeholder="Nome Sobrenome"
          leftIconName="person"
        />
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
        <AppInput
          control={control}
          name="confirm_password"
          label="Senha"
          placeholder="Confirme a Senha"
          leftIconName="lock-outline"
          secureTextEntry
        />

        <View className="mt-4">
          <AppButton iconName="arrow-forward">Registrar</AppButton>
        </View>
      </View>

      <Text className="text-muted-foreground">Já tem uma conta?</Text>

      <AppButton
        iconName="arrow-forward"
        variant="outline"
        onPress={() => router.navigate('/login')}
      >
        Entrar
      </AppButton>
    </View>
  )
}
