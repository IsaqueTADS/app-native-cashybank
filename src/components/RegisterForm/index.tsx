import { useAuthContext } from '@/contexts/auth-context'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { router } from 'expo-router'
import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native'
import { z } from 'zod'
import { AppButton } from '../AppButton'
import { AppInput } from '../AppInput'

const registerFormSchema = z
  .object({
    fullName: z.string('Prencha um valor').min(1, 'Prencha um valor'),
    email: z.email('O Email deve ser válido'),
    password: z.string('Prencha um valor').min(1, 'Prencha um valor'),
    confirmPassword: z
      .string('Confirme sua senha')
      .min(1, 'Confirme sua senha'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })

export type RegisterFormSchema = z.infer<typeof registerFormSchema>

export function RegisterForm() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    mode: 'onTouched',
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })
  const { handleUserRegister } = useAuthContext()

  async function handleRegister(data: RegisterFormSchema) {
    try {
      await handleUserRegister(data)
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data)
      }
    }
  }
  return (
    <View className="mb-20 gap-4 ">
      <View className="mb-14 gap-7 rounded-lg bg-card p-7 ">
        <AppInput
          control={control}
          name="fullName"
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
          name="confirmPassword"
          label="Confirmar a Senha"
          placeholder="Confirme sua Senha"
          leftIconName="lock-outline"
          secureTextEntry
        />

        <View className="mt-4">
          <AppButton
            iconName="arrow-forward"
            onPress={handleSubmit(handleRegister)}
          >
            {isSubmitting ? 'Carregando...' : 'Registrar'}
          </AppButton>
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
