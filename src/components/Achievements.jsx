import { View, Text } from "react-native";
import React from "react";
import AchievementCircle from "./AcheivementCircle";
import { styles } from "../styles";

const Achievements = () => {
  const acheivement = { listen: 90, read: 80, write: 57, speak: 46 };
  // reorder the object elemenets incremently according to thier average + calculate the average
  // Convert the object into an array of key-value pairs
  const sortedArray = Object.entries(acheivement).sort(([, a], [, b]) => b - a);
  console.log(sortedArray);
  const colors = ["#EC0076", "#00ED9A", "orange", "#8A00ED"];

  return (
    <View
      style={{
        width: "100%",
        ...styles.flex,
        // backgroundColor:'red',
        marginVertical:40
      }}
    >
      <View style={{ ...styles.flex ,width:'100%',justifyContent:'space-between'}}>
        {sortedArray.map((element, index) => {
          return (
            <View>
              <AchievementCircle
                color={colors[index]}
                percentage={element[1]}
              />
              <Text
                style={{ ...styles.text, color: colors[index], marginTop: 20 }}
              >
                {element[0]}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Achievements;
