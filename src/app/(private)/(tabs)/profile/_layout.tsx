import { useTheme } from "@/hooks/use-theme";
import { Stack } from "expo-router";


export default function ProfileLayout() {
  const theme =  useTheme()

  return (
   <Stack screenOptions={{headerShown: false, contentStyle: { backgroundColor: theme.colors.background },
      headerStyle : {backgroundColor: theme.colors.background, },
      headerTintColor: theme.colors.foreground,}} >

    <Stack.Screen name="index" options={{headerShown: true, title: "Perfil"}} />
   </Stack>
  );
}
