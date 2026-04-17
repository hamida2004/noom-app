import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { styles, colors } from "../styles";
import { Link, useRouter } from "expo-router";
const LevelIntro = ({ headerAr, headerEn, textAr, textEng, learn, brief }) => {
  const [arabic, setArabic] = useState(false);
  const router = useRouter();
  return (
    <View style={{ ...styles.container, padding: 0 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: colors.main,
          textAlign: "center",
          marginBottom: 80,
        }}
      >
        {arabic ? headerAr : headerEn}
      </Text>
      <Text style={{ ...styles.text, marginBottom: 40 }}>
        {arabic ? textAr : textEng}
      </Text>
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 40,
        }}
      >
        <View style={{ ...styles.flex, gap: 20 }}>
          <Pressable
            onPress={() => {
                router.push('./Learn')
            }}
            style={{ ...styles.button, backgroundColor: colors.main }}
          >
            <Text style={{ ...styles.text, color: colors.light }}>
              {arabic ? "ابدأ التعلم" : "Start learning"}
            </Text>
          </Pressable>

          <Pressable
            onPress={() => {router.push('./Brief')}}
            style={{ ...styles.button, backgroundColor: colors.main }}
          >
            <Text style={{ ...styles.text, color: colors.light }}>
              {arabic ? "نبذة حضارية" : "Cultural Brief"}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LevelIntro;
