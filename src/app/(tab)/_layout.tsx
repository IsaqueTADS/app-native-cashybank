import { Tabs } from "expo-router";

import { MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false
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
