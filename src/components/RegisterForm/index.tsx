import { zodResolver } from '@hookform/resolvers/zod'
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
  .refine(data => data.password !== data.confirmPassword, {
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
  })

  function handleRegister(data: RegisterFormSchema) {
    // Aqui os dados já chegam 100% validados pelo Zod
    console.log(data)

    // Exemplo de navegação após sucesso
    // router.assign('/login')
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
          label="Senha"
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
