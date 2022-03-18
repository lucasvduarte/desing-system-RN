import { Box, Text } from "@/core";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme/theme";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Box
        bg="error"
        h="100px"
        justifyContent="center"
        alignItems="center"
        mt="100px"
      >
        <Text>Ola, mundo</Text>
      </Box>
    </ThemeProvider>
  );
}
