import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { styles, colors } from "../styles";
import { Link } from "expo-router";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Dots from "./Dots";

const Intro = ({ textAr, textEng, active,next }) => {
  const [arabic, setArabic] = useState(true);
  return (
    <View style={styles.container}>
      <Pressable
        style={{
          position: "absolute",
          top: 40,
          right: 40,
        }}
        onPress={() => {
          setArabic(!arabic);
        }}
      >
        <MaterialIcons name="language" size={28} color={colors.main} />
      </Pressable>
      <Text
        style={{
          ...styles.header,
          color: colors.main,
          textAlign: "center",
          marginBottom: 80,
        }}
      >
        Assile | أصيل
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
        <Link href={next} asChild>
          <Pressable style={{ ...styles.button, backgroundColor: colors.main }}>
            <Text style={{ ...styles.text, color: colors.sand }}>
              {arabic ? "التالي" : "Next"}
            </Text>
          </Pressable>
        </Link>
        <Dots active={active} />
      </View>
    </View>
  );
};

export default Intro;
