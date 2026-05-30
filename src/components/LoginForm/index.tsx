import { zodResolver } from '@hookform/resolvers/zod'
import { router } from 'expo-router'
import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native'
import { z } from 'zod'
import { AppButton } from '../AppButton'
import { AppInput } from '../AppInput'

const loginFormSchema = z.object({
  email: z.email('O Email deve ser válido'),
  password: z.string('Prencha um valor').min(1, 'Prencha um valor'),
})

type LoginFormSchema = z.infer<typeof loginFormSchema>

export function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    mode: 'onTouched',
  })

  function handleLogin(data: LoginFormSchema) {
    console.log(data)
  }

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

        <View className="mt-4">
          <AppButton
            iconName="arrow-forward"
            onPress={handleSubmit(handleLogin)}
          >
            Entrar
          </AppButton>
        </View>
      </View>

      <Text className="text-muted-foreground">Não tem uma conta?</Text>

      <AppButton
        iconName="arrow-forward"
        variant="outline"
        onPress={() => router.navigate('/register')}
      >
        Cadastre-se
      </AppButton>
    </View>
  )
}
