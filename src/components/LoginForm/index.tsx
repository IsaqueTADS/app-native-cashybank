import { useForm } from "react-hook-form"
import { Text } from "react-native"
import { z } from "zod"

const loginFornSchema = z.object({
  email: z.email("O Email deve ser válido"),
  password: z.string().min(1, "Prencha um valor"),
})


type LoginFormSchema = z.infer<typeof loginFornSchema>

export function LoginForm(){


  const {control, handleSubmit, formState: {isSubmitting}} = useForm<LoginFormSchema>()

  return < >

    <Text className="text-nyc-text-primary">corre</Text>

  </>
}