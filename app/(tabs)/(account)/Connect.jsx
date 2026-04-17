
import React, { useState } from "react";
import { View, Text, Image, Pressable, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { colors, styles, ui } from "../../../src/styles";
import bracelet from "../../../assets/images/bracelet.png";

const ConnectDevice = () => {
  const [connected,setConnected] = useState(false)
  const toggleConnected =() =>{
    setConnected(!connected)
  }
  const ConnectDevice = () =>{
    // try to connect 
    toggleConnected()
  }
   return (
    <LinearGradient
      colors={[colors.main, colors.blue]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >

      <View style={{ flex: 1, padding: 24, justifyContent: "center" }}>


     
       <Animated.View
          style={[
            ui.projectedBox,
            {
                shadowColor: "#22d3ee",
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.9,
              shadowRadius: 4,
              elevation: 12,
              marginVertical:20
            },
          ]}
        >
          <Text style={ui.projectedLabel}>The device is {connected ? "connected" : "not connected"}</Text>
        </Animated.View>
        {/* ===== HEADER ===== */}
        <View style={{ alignItems: "center", marginBottom: 32 }}>
          <Text style={ui.title}>Connect Your Bracelet</Text>
          <Text style={ui.subtitle}>
            Secure real-time sync with your wearable
          </Text>
        </View>

        {/* ===== HERO CARD ===== */}
        <BlurView intensity={30} tint="dark" style={ui.glassCard}>

          {/* Bracelet Image */}
          <View style={ui.deviceImageWrapper}>
            <Image
              source={bracelet}
              style={ui.deviceImage}
              resizeMode="contain"
            />
          </View>

          {/* Description */}
          <Text style={ui.deviceText}>
            The intelligent bracelet continuously monitors your heart rate,
            temperature, movement, and sleep cycles to provide precise,
            real-time insights into your health and recovery.
          </Text>

          {/* Connect Button */}
          <Pressable
            style={ui.connectButton}
            onPress={ConnectDevice}
          >
            <Text style={ui.connectButtonText}>Connect Device</Text>
          </Pressable>

        </BlurView>
      </View>
    </LinearGradient>
  );
};

export default ConnectDevice;
