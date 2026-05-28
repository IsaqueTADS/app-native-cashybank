import { Redirect, Stack } from 'expo-router'
import { useState } from 'react'

export default function PrivateLayout() {
  const [user, setUser] = useState(undefined)

  if (!user) return <Redirect href={'/login'} />

  return <Stack screenOptions={{ headerShown: false }} />
}
