import { View, Text } from "react-native";
import React from "react";
import { colors, styles } from "../styles";

const Dots = ({ active }) => {
  return (
    <View style={{ ...styles.flex, marginTop: 16 }}>
      <View
        style={{
          height: 8,
          width: 8,
          margin: 4,
          borderRadius: 4,
          opacity: active == 1 ? 1 : 0.5,
          backgroundColor: colors.main,
        }}
      ></View>
      <View
        style={{
          height: 8,
          width: 8,
          borderRadius: 4,
          margin: 4,
          opacity: active == 2 ? 1 : 0.5,

          backgroundColor: colors.main,
        }}
      ></View>
      <View
        style={{
          height: 8,
          margin: 4,
          width: 8,
          borderRadius: 4,
          backgroundColor: colors.main,
          opacity: active == 3 ? 1 : 0.5,
        }}
      ></View>
    </View>
  );
};

export default Dots;
