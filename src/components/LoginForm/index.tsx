import { useForm } from "react-hook-form"
import { z } from "zod"
import { AppInput } from "../Input"

const loginFormSchema = z.object({
  email:z.email("O Email deve ser válido"),
  password: z.string().min(1, "Prencha um valor"),
})

type LoginFormSchema = z.infer<typeof loginFormSchema>

export function LoginForm(){
  const {control, handleSubmit, formState: {isSubmitting}} = useForm<LoginFormSchema>()

  return < >
    <AppInput control={control} name="email" label="Email" placeholder="example@gmail.com" leftIconName="email"   />
  </>
}
