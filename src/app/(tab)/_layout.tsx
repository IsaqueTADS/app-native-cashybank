import { Tabs } from "expo-router";

import { MaterialIcons } from "@expo/vector-icons";
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
      tabBarInactiveTintColor: theme.colors.textMuted
    }} >
      <Tabs.Screen name="home" options={{
        title: "Home",
        tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={22} color={color} />
          ),
      }} />
    </Tabs>
  );
}
