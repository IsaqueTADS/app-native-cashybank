import { useTheme } from "@/hooks/use-theme";
import { Redirect, Stack } from "expo-router";
import { useState } from "react";


export default function PrivateLayout() {
  const theme =  useTheme()

  // const [user, setUser] = useState(true)


  // if(!user) return <Redirect href={"/login"} />



  return (
   <Stack screenOptions={{headerShown: false}} />
  );
}
