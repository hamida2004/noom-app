// app/(tabs)/(drive).jsx
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // For gradient background
import { Ionicons } from '@expo/vector-icons'; // Import your global styles
import { styles } from '../../../../src/styles';

import { ref, onValue } from 'firebase/database';
import { realtimeDB } from '../../../../firebase/config'; 

const DriveScreen = () => {
  const [isDriveModeEnabled, setIsDriveModeEnabled] = useState(false); // Toggle for drive mode
  const [drivingTime, setDrivingTime] = useState(0); // Total driving time in seconds
  const [fatigueLevel, setFatigueLevel] = useState(0); // Fatigue level (0-100)

  const [sensorData, setSensorData] = useState(null); // Sensor data from Firebase
    useEffect(() => {
      // Set up Firebase Realtime Database listener
      const dataRef = ref(realtimeDB, 'bracelet/data');
  
      const unsubscribe = onValue(dataRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          console.log('Data received:', data);
          setSensorData(data);
        } else {
          console.log('No data available');
          setSensorData(null);
        }
      }, (error) => {
        console.error('Database error:', error);
      });
  
      // Clean up listener on unmount
      return () => unsubscribe();
    }, []);
  // Simulate driving time increase when drive mode is enabled
  useEffect(() => {
    let intervalId;

    if (isDriveModeEnabled) {
      intervalId = setInterval(() => {
        setDrivingTime((prevTime) => prevTime + 1); // Increment driving time every second
      }, 1000);
    }

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, [isDriveModeEnabled]);

  // Simulate fatigue level increase based on driving time
  useEffect(() => {
    const simulatedFatigue = Math.min(drivingTime / 60, 100); // Convert seconds to minutes and cap at 100%
    setFatigueLevel(simulatedFatigue);
  }, [drivingTime]);

  // Format driving time as HH:MM:SS
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <LinearGradient
      colors={['#00CED1', '#003399']} // Gradient colors: Turquoise to Navy blue
      style={styles.container}
      start={{ x: 0, y: 0 }} // Gradient starts at top-left
      end={{ x: 0, y: 1 }} // Gradient ends at bottom-left
    >
      {/* Header */}
      <Text style={styles.title}>Drive Mode</Text>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/804128/pexels-photo-804128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} // Replace with your car image URL
          style={styles.carImage}
        />
      </View>

      {/* Drive Mode Toggle */}


      {/* Driving Time Counter */}
      <View style={styles.drivingTimeContainer}>
        <Text style={styles.drivingTimeText}>
          Total Driving Time: <Text style={styles.drivingTimeValue}>{formatTime(drivingTime)}</Text>
        </Text>
      </View>

      {/* Fatigue Level Chart */}
      <View style={styles.fatigueChartContainer}>
        <Text style={styles.fatigueTitle}>Fatigue Level</Text>
        <View style={styles.fatigueBarContainer}>
          <View
            style={[
              styles.fatigueBar,
              {
                width: `${fatigueLevel}%`, // Adjust width based on fatigue level
              },
            ]}
          />
        </View>
        <Text style={styles.fatigueValue}>{`${fatigueLevel.toFixed(0)}%`}</Text>
      </View>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            isDriveModeEnabled ? styles.enabledButton : styles.disabledButton,
          ]}
          onPress={() => setIsDriveModeEnabled(!isDriveModeEnabled)}
        >
          <Ionicons
            name={isDriveModeEnabled ? 'car' : 'car-outline'}
            size={30}
            color={isDriveModeEnabled ? '#fff' : '#ccc'}
          />
          <Text style={styles.toggleButtonText}>
            {isDriveModeEnabled ? 'Drive Mode Enabled' : 'Drive Mode Disabled'}
          </Text>
        </TouchableOpacity>
      </View>
      
    </LinearGradient>
  );
};

export default DriveScreen;