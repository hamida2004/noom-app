import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack 
    screenOptions={{
        headerShown:false
    }}
    initialRouteName='Account'
    >
        <Stack.Screen 
        name='Progress'
        options={
            {
                presentation:'modal'
            }
        }/>

    </Stack>
  )
}

export default _layout