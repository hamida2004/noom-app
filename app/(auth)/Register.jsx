import { createUserWithEmailAndPassword } from "firebase/auth";

import { collection, addDoc } from "firebase/firestore";

import { auth, db } from "../../firebase/config";


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
import { colors, styles } from "../../src/styles";

import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const Signup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  // const addUserData = async (userId, userData) => {
  //   try {
  //     await addDoc(collection(db, "users"), { id: userId, ...userData });
  //     console.log("User data added successfully");
  //   } catch (error) {
  //     console.error("Error adding user data:", error);
  //   }
  // };

  // const signUp = async (email, password) => {
  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  //     console.log("User created:", userCredential.user);
  //     await addUserData(userCredential.user.uid, { username: formData.username, email: formData.email })
  //   } catch (error) {
  //     console.error("Error signing up:", error.message);
  //   }
  // };


  // const handleSignup = async () => {
  //   if (formData.password === formData.confirmPassword ) {

  //     try {
  //       await signUp(formData.email, formData.password)
  //       alert('registered succusfuly')
  //       router.push("/Login");
  //     } catch (error) {
  //       alert('registeration failed', error)
  //     }
  //   }
  //   else {
  //     alert('password and confirm password should match !')
  //     return
  //   }
  //   // Navigate to login after signup
  // };


  const addUserData = async (userId, userData) => {
  try {
    // Use set with uid as doc id instead of addDoc
    await db.collection("users").doc(userId).set(userData);
    console.log("User data added successfully");
  } catch (error) {
    console.error("Error adding user data:", error);
  }
};

const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User created:", user);
    await addUserData(user.uid, {
      username: formData.username,
      email: formData.email,
    });
    return user;
  } catch (error) {
    console.error("Error signing up:", error.message);
    throw error;
  }
};

const handleSignup = async () => {
  if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
    alert("All fields are required!");
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    alert("Password and confirm password must match!");
    return;
  }

  try {
    const user = await signUp(formData.email, formData.password);
    alert("Registered successfully!");
    router.push("/Login");
  } catch (error) {
    alert("Registration failed: " + error.message);
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
          Create Account
        </Text>

        {/* Username Input */}
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
              placeholder="Username"
              value={formData.username}
              onChangeText={(value) =>
                setFormData({ ...formData, username: value })
              }
              style={styles.input}
            />
            <Feather name="user" size={20} color={colors.gray} />
          </View>

          {/* Email Input */}
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

          {/* Confirm Password Input */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChangeText={(value) =>
                setFormData({ ...formData, confirmPassword: value })
              }
              secureTextEntry
              style={styles.input}
            />
            <Feather name="check-circle" size={20} color={colors.gray} />
          </View>
        </View>

        {/* Signup Button */}
        <Pressable style={{ ...styles.button, backgroundColor: colors.light }} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>

        {/* Login Navigation */}
        <Pressable
          onPress={() => router.push("/Login")}
          style={{ marginTop: 20 }}
        >
          <Text style={{ color: colors.gray, textAlign: "center" }}>
            Already have an account?{" "}
            <Text style={{ color: colors.sand }}>Login here</Text>
          </Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Signup;