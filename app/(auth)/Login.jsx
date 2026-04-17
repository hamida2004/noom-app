import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Pressable,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { colors, styles } from "../../src/styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { auth, db } from "../../firebase/config";
const Login = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // const signIn = async (email, password) => {
    //     try {
    //         const userCredential = await signInWithEmailAndPassword(auth, email, password);
    //         console.log("User created:", userCredential.user);
    //         await AsyncStorage.setItem("user", JSON.stringify(user));
    //         console.log("User signed in:", user);
    //     } catch (error) {
    //         console.error("Error signing in:", error.message);
    //         return
    //     }
    // };

    // const handleLogin = async () => {
    //     try {
    //         await signIn(formData.email, formData.password)
    //         console.log("Login Data:", formData);
    //         router.push("../(tabs)/(Home)/Home");
    //     } catch (error) {
    //         alert('signin failure!')
    //         console.log(error)
    //     }
    // };


    const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User signed in:", user);
    await AsyncStorage.setItem("user", JSON.stringify(user));
    return user;
  } catch (error) {
    console.error("Error signing in:", error.message);
    throw error;
  }
};

const handleLogin = async () => {
  if (!formData.email || !formData.password) {
    alert("Please enter email and password");
    return;
  }

  try {
    const user = await signIn(formData.email, formData.password);
    console.log("Login Data:", user);
    router.push("../(tabs)/(Home)/Home");
  } catch (error) {
    alert("Sign-in failed: " + error.message);
  }
};

    return (
        <LinearGradient
            colors={[colors.main, colors.blue]}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
        >
            <SafeAreaView style={{ ...styles.container, padding: 40, gap: 40 }}>
                <Text
                    style={{
                        ...styles.header,
                        color: colors.light,
                        fontSize: 24,
                        textAlign: "left",
                        marginTop: 40,
                    }}
                >
                    Login
                </Text>

                {/* Email Input */}
                <View
                style={{
                    width:'100%',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:"center"
                }}
                >
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Email"
                            value={formData.email}
                            onChangeText={(value) =>
                                setFormData({ ...formData, email: value })
                            }
                            keyboardType="email-address"
                            style={styles.input}
                        />
                        <Feather name="mail" size={20} color={colors.gray} />
                    </View>

                    {/* Password Input */}
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Password"
                            value={formData.password}
                            onChangeText={(value) =>
                                setFormData({ ...formData, password: value })
                            }
                            secureTextEntry
                            style={styles.input}
                        />
                        <Feather name="lock" size={20} color={colors.gray} />
                    </View>
                    {/* Forgot Password Link */}
                    <Pressable
                        onPress={() => console.log("Forgot Password")}
                        style={{ alignSelf: "flex-end", marginBottom: 20 }}
                    >
                        <Text style={{ color: colors.sand }}>Forgot Password?</Text>
                    </Pressable>

                </View>

                {/* Login Button */}
                <Pressable style={{ ...styles.button, backgroundColor: colors.light }} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>

                {/* Signup Navigation */}
                <Pressable
                    onPress={() => router.push("/Register")}
                    style={{ marginTop: 20 }}
                >
                    <Text style={{ color: colors.gray, textAlign: "center" }}>
                        Don't have an account?{" "}
                        <Text style={{ color: colors.sand}}>Sign up here</Text>
                    </Text>
                </Pressable>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default Login;