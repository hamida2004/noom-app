import {
  View,
  ImageBackground,
  StyleSheet,
  Pressable,
  Text,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { colors, styles } from "../styles";

const Level = ({ level, page, levelsCompleted }) => {
  const router = useRouter();
  console.log(levelsCompleted);
  // Map the level number to its respective image source
  const images = {
    1: require("../../assets/images/level1.jpg"),
    2: require("../../assets/images/level2.jpg"),
    3: require("../../assets/images/level3.jpg"),
  };

  // Get the image source based on the level prop
  const imageSource = images[level] || images[1]; // Default to level 1 if level is invalid

  return (
    <Pressable
      disabled={!levelsCompleted.includes(level)}
      style={{ flex: 1, width: "100%" }}
      onPress={() => {
        router.push(page);
      }}
    >
      <ImageBackground
        source={imageSource}
        style={{
          ...style.imageBackground,
          opacity: levelsCompleted.includes(level) ? 1 : 0.5,
        }}
      />
      <View
        style={{
          ...styles.flex,
          position: "absolute",
          top: 0,
          left: 40,
          gap: 20,
          paddingTop:0
        }}
      >
        <FontAwesome
          name="bookmark"
          size={40}
          color={levelsCompleted.includes(level) ? colors.gold : colors.main}
        />
        <Text
          style={{
            ...styles.header,
            marginLeft: 20,
            opacity: levelsCompleted.includes(level) ? 1 : 0.5,
          }}
        >
          level {level}
        </Text>
      </View>
    </Pressable>
  );
};

// Define your styles in a separate file or inline as needed
const style = StyleSheet.create({
  imageBackground: {
    width: "100%",
    flex: 1,
    borderRadius: 16,
    elevation: 5,
    overflow: "hidden", // Ensures the borderRadius is applied properly
  },
});

export default Level;
