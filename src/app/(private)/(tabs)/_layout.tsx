import { Tabs } from "expo-router";

import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@/hooks/use-theme";

export default function TabLayout() {
  const theme = useTheme()

  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: theme.colors.background
      },
      tabBarActiveTintColor: theme.colors.accent,
      tabBarInactiveTintColor: theme.colors.textMuted,
      

    }} >
      <Tabs.Screen name="index" options={{
        title: "Home",
        tabBarIcon: ({ color }) => (
            <Feather name="home" size={22} color={color} />
          ),
      }} />
      <Tabs.Screen name="new-transaction" options={{
        title: "Nova",
        tabBarIcon: ({ color }) => (
            <Feather name="plus-circle" size={22} color={color} />
          ),
      }} />
      <Tabs.Screen name="profile" options={{
        title: "Perfil",
        tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" size={22} color={color} />
          ),
      }} />
    </Tabs>
  );
}
