import { useTheme } from "@/hooks/use-theme";
import { Stack } from "expo-router";


export default function PrivateLayout() {
  const theme =  useTheme()

  return (
   <Stack screenOptions={{
      contentStyle: { backgroundColor: theme.colors.background },
      headerStyle : {backgroundColor: theme.colors.background, },
      headerTintColor: theme.colors.text,
      headerShown: false
    }}
    >

     <Stack.Screen name="(tabs)" options={{ headerShown: true, title: "Home" }} />
   </Stack>
  );
}
