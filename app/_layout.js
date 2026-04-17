import { View, Text } from "react-native";
import React, { useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { DarkModeContext } from "../context/DarkModeContext";
import { DataContext } from "../context/DataContext";
import { Stack } from "expo-router";
const RootLayout = () => {
  const [arabic, setArabic] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [sensorData, setSensorData] = useState(null);

  console.log(arabic, darkMode)
  return (
    <LanguageContext.Provider value={{ arabic, setArabic }}>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <DataContext.Provider value={{ sensorData }}>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
          {/* <Stack /> */}
        </DataContext.Provider>
      </DarkModeContext.Provider>
    </LanguageContext.Provider>
    // <Stack />
  );
};

export default RootLayout;
