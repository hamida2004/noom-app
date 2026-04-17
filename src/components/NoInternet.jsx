import { View, Text, Pressable } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { colors, styles } from "../styles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const NoInternet = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>No Internet</Text>
      <Feather
        name="wifi-off"
        size={60}
        color={colors.main}
        style={{
          marginVertical: 40,
        }}
      />
      <Text style={styles.text}>Connet to the internet and try again</Text>
      <Pressable
        style={{
          marginVertical: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: 12,
        }}
        onPress={() => {
          console.log("refresh");
        }}
      >
        <Text
          style={{
            color: colors.main,
            fontSize:16
          }}
        >
          Refresh
        </Text>
        <FontAwesome5 name="redo" size={16} color={colors.main} />
      </Pressable>
    </View>
  );
};

export default NoInternet;
