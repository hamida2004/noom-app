import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  SafeAreaView,
  Switch,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { colors, styles, ui } from "../../../src/styles";
import { DarkModeContext } from "../../../context/DarkModeContext";

const Account = () => {
  const router = useRouter();
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const [arabic, setArabic] = useState(false);
  const [user, setUser] = useState({
    userName: "username",
    email: "email@gmail.com",
  });

  const source = require("../../../assets/images/account.jpeg");

  return (
    <LinearGradient colors={[colors.main, colors.blue]} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 120 }}>

          {/* ===== HEADER ===== */}
          <View style={{ marginBottom: 24 }}>
            <Text style={ui.title}>Your Account</Text>
            <Text style={ui.subtitle}>@{user.userName}</Text>
          </View>

          {/* ===== AVATAR ===== */}
          <View style={{ alignItems: "center", marginBottom: 32 }}>
            <View style={ui.avatarGlow}>
              <Image source={source} style={ui.avatarImage} />
            </View>

            <Pressable style={ui.avatarCamera}>
              <Entypo name="camera" size={22} color="#6366f1" />
            </Pressable>
          </View>

          {/* ===== USER INFO ===== */}
          <BlurView intensity={25} tint="dark" style={ui.glassCard}>
            <Text style={ui.sectionLabel}>Profile</Text>

            <View style={ui.inputRow}>
              <TextInput
                value={user.userName}
                onChangeText={(v) => setUser({ ...user, userName: v })}
                style={ui.input}
                placeholder="Username"
                placeholderTextColor="#64748b"
              />
              <Feather name="edit-2" size={18} color="#94a3b8" />
            </View>

            <View style={ui.inputRow}>
              <TextInput
                value={user.email}
                onChangeText={(v) => setUser({ ...user, email: v })}
                style={ui.input}
                placeholder="Email"
                placeholderTextColor="#64748b"
              />
              <Feather name="edit-2" size={18} color="#94a3b8" />
            </View>

            <Pressable style={ui.actionRow}>
              <Text style={ui.actionText}>Change password</Text>
            </Pressable>
          </BlurView>

          {/* ===== SETTINGS ===== */}
          <BlurView intensity={25} tint="dark" style={ui.glassCard}>
            <Text style={ui.sectionLabel}>Preferences</Text>

            <View style={ui.toggleRow}>
              <Text style={ui.toggleText}>Arabic / English</Text>
              <Switch
                value={arabic}
                onValueChange={setArabic}
                trackColor={{ true: "#6366f1", false: "#334155" }}
                thumbColor="#e5e7eb"
              />
            </View>

            <View style={ui.toggleRow}>
              <Text style={ui.toggleText}>Dark Mode</Text>
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                trackColor={{ true: "#6366f1", false: "#334155" }}
                thumbColor="#e5e7eb"
              />
            </View>
          </BlurView>

          {/* ===== CONNECT DEVICE ===== */}
          <Pressable onPress={() => router.push("./Connect")}>
            <BlurView intensity={30} tint="dark" style={ui.ctaCard}>
              <Text style={ui.ctaText}>Connect Device</Text>
            </BlurView>
          </Pressable>

        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Account;
