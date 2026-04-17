import {
  View,
  Text,
  Pressable,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { colors, styles } from "../styles";
import { Link } from "expo-router";
const Cultural = ({ level, read, textAr, textEn, headerAr, headerEn }) => {
  const [arabic, setArabic] = useState(true);
  const images = {
    1: require("../../assets/images/level1.jpg"),
    2: require("../../assets/images/level2.jpg"),
    3: require("../../assets/images/level3.jpg"),
  };

  // Get the image source based on the level prop
  const imageSource = images[level] || images[1]; // Default to level 1 if level is invalid

  return (
    <ScrollView
      contentContainerStyle={{ justifyContent: "center", padding: 40 }}
    >
      <Text style={{ ...styles.header, marginBottom: 40, color: colors.main }}>
        {arabic ? headerAr : headerEn}
      </Text>
      <View style={{ width: "100%", height: 200, marginBottom: 40 }}>
        <ImageBackground
          source={imageSource}
          style={{
            ...style.imageBackground,
            opacity: 1,
          }}
        />
      </View>
      <Text style={styles.text}>{arabic ? textAr : textEn}</Text>
      <Link href={read} asChild>
        <Pressable
          onPress={() => console.log("pressed")}
          style={{
            ...styles.button,
            marginVertical: 40,
            backgroundColor: colors.sand,
          }}
        >
          <Text
            style={{
              color: colors.main,
            }}
          >
            {arabic ? "اقرأ المزيد ..." : "read more ..."}
          </Text>
        </Pressable>
      </Link>
    </ScrollView>
  );
};

export default Cultural;
const style = StyleSheet.create({
  imageBackground: {
    width: "100%",
    flex: 1,
    borderRadius: 16,
    elevation: 5,
    overflow: "hidden", // Ensures the borderRadius is applied properly
  },
});
