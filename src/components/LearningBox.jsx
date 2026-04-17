import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const LearningBox = () => {
  return (
    <View 
    style={styles.container}
    >
      <Text>LearningBox</Text>
    </View>
  )
}

export default LearningBox


const styles = StyleSheet.create({
container:{
    width:'100%',
    height:240,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 16,
    elevation: 5,
    overflow: "hidden", 
}

})