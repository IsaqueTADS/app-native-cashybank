import { useTheme } from "@/hooks/use-theme";
import { Stack } from "expo-router";


export default function PrivateLayout() {
  const theme =  useTheme()

  return (
   <Stack screenOptions={{headerShown: false}} />
  );
}
