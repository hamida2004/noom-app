import React from "react";
import { Redirect } from "expo-router";
import { View, StatusBar, ActivityIndicator } from "react-native";
import { colors, styles } from "../src/styles";
import useUser from "../hooks/useUser" // تأكد من تعريف colors.main

const Index = () => {
  const { user, loading } = useUser();
  console.log()

  return (
    <View style={{ ...styles.container, padding: 0 }}>
      {loading ? (
        <ActivityIndicator size="large" color={colors.main} />
      ) : user ? (
        <Redirect href="/(tabs)/Home" />
      ) : (
        <Redirect href="/(auth)/Login" />
      )}

      <StatusBar barStyle={"default"} />
    </View>
  );
};

export default Index;
