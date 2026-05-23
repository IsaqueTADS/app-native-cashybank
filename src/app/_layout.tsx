import { Stack } from "expo-router";
import "../global.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function TabLayout() {
  return (
    <ThemeProvider>
      <Stack />
    </ThemeProvider>
  );
}
