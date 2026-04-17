import React from "react";
import { Stack, useRouter } from "expo-router";
const _layout = () => {
  const router=useRouter()
  return (
    <Stack
      screenOptions={{
        headerShown: false,

      }}
    />
      
  );
};

export default _layout;
