// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   Pressable,
//   ActivityIndicator,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { LinearGradient } from "expo-linear-gradient";
// import { BlurView } from "expo-blur";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import { LineChart } from "react-native-chart-kit";
// import { colors, styles ,ui} from "../../../src/styles";
// import { ref, onValue } from "firebase/database";
// import { realtimeDB } from "../../../firebase/config";
// import OnnxService from "../../../src/services/modelService.native";

// const SleepAdjust = () => {
//   const [sensorData, setSensorData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // Alarm
//   const [alarmTime, setAlarmTime] = useState(new Date());
//   const [smartAlarm, setSmartAlarm] = useState(true);
//   const [showPicker, setShowPicker] = useState(false);
//   const [modelSleep, setModelSleep] = useState(null);


//   useEffect(() => {
//   OnnxService.loadModel();
// }, []);
 

//   useEffect(() => {
//   setLoading(true);

//   const dataRef = ref(realtimeDB, "bracelet/latest");

//   const unsubscribe = onValue(
//     dataRef,
//     (snapshot) => {
//       if (snapshot.exists()) {
//         const data = snapshot.val();

//         console.log("📡 ESP DATA RECEIVED FROM FIREBASE:", data);

//         setSensorData(data);
//         console.log(data)
//       } else {
//         console.log("⚠️ No data at bracelet/data");
//         setSensorData(null);
//       }

//       setLoading(false);
//     },
//     (error) => {
//       console.error("❌ Firebase read error:", error);
//       setLoading(false);
//     }
//   );

//   return () => unsubscribe();
// }, []);


//   useEffect(() => {
//     const dataRef = ref(realtimeDB, "bracelet/data");
//     const unsub = onValue(dataRef, (snap) => {
//       if (snap.exists()) {
//         setSensorData(snap.val());
//         runModel(snap.val())
//         setLoading(false);
//       }
//     });
//     return () => unsub();
//   }, []);

// const runModel = async (data) => {

//   try {

//     /*
//     Your model expects 9 features.

//     TEMPORARY:
//     Using random values (as requested).

//     Later replace with real feature extraction.
//     */

//     const features = Array.from({ length: 9 }, () => Math.random() * 5);

//     const prediction = await OnnxService.predict(features);

//     setModelSleep(prediction[0]);
//     console.log(prediction[0],'///',modelSleep)

//   } catch (err) {

//     console.log("MODEL ERROR", err);

//   }

// };


//   if (loading) {
//     return (
//       <LinearGradient colors={[colors.main, colors.blue]} style={{ flex: 1 }}>
//         <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
//           <ActivityIndicator size="large" color={colors.light} />
//         </SafeAreaView>
//       </LinearGradient>
//     );
//   }

//   return (
//     <LinearGradient colors={[colors.main, colors.blue]} style={{ flex: 1 }}>
//       <SafeAreaView style={{ flex: 1 }}>
//         <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 120 }}>

//           {/* ===== HEADER ===== */}
//           <View style={{ marginBottom: 24 }}>
//             <Text style={ui.title}>Tonight’s Overview</Text>
//             <Text style={ui.subtitle}>Real-time sync from bracelet</Text>
//           </View>

//           {/* ===== SMART ALARM ===== */}
//           <BlurView intensity={25} tint="dark" style={ui.glassCard}>
//             <Text style={ui.sectionLabel}>Latest Alarm</Text>

//             <Pressable onPress={() => setShowPicker(true)}>
//               <Text style={ui.alarmTime}>
//                 {alarmTime.toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 })}
//               </Text>
//             </Pressable>

//             <Pressable
//               style={[
//                 ui.toggle,
//                 smartAlarm && { backgroundColor: "rgba(99,102,241,0.25)" },
//               ]}
//               onPress={() => setSmartAlarm(!smartAlarm)}
//             >
//               <Text style={ui.toggleText}>Smart Cycle Wake</Text>
//               <View style={ui.switch}>
//                 <View
//                   style={[
//                     ui.knob,
//                     smartAlarm && { transform: [{ translateX: 20 }] },
//                   ]}
//                 />
//               </View>
//             </Pressable>

//             {smartAlarm && (
//               <View style={ui.projectedBox}>
//                 <Text style={ui.projectedLabel}>Projected wake-up</Text>
//                 <Text style={ui.projectedTime}>07:18</Text>
//               </View>
//             )}
//           </BlurView>

//           {/* ===== SLEEP CHART ===== */}
//           <BlurView intensity={25} tint="dark" style={ui.glassCard}>
//             <Text style={ui.sectionLabel}>Sleep Stages</Text>

//             <LineChart
//               data={{
//                 labels: ["Light", "Deep", "REM"],
//                 datasets: [
//                   {
//                     data: [4.5, 1.8, 2.2],
//                   },
//                 ],
//               }}
//               width={300}
//               height={200}
//               chartConfig={{
//                 backgroundGradientFrom: "transparent",
//                 backgroundGradientTo: "transparent",
//                 color: (o = 1) => `rgba(255,255,255,${o})`,
//                 labelColor: () => "#94a3b8",
//                 propsForDots: {
//                   r: "4",
//                   strokeWidth: "2",
//                   stroke: "#6366f1",
//                 },
//               }}
//               bezier
//               style={{ marginTop: 16 }}
//             />
//           </BlurView>

//           {/* ===== METRICS ===== */}
//           <View style={ui.metricsGrid}>
//             <BlurView intensity={20} tint="dark" style={ui.metric}>
//               <Text style={ui.metricLabel}>Heart Rate</Text>
//               <Text style={ui.metricValue}>{sensorData?.hr} BPM</Text>
//             </BlurView>

//             <BlurView intensity={20} tint="dark" style={ui.metric}>
//               <Text style={ui.metricLabel}>Skin Temp</Text>
//               <Text style={ui.metricValue}>
//                 {sensorData?.temp} °C
//               </Text>
//             </BlurView>

//             <BlurView intensity={20} tint="dark" style={ui.metric}>
//               <Text style={ui.metricLabel}>Movement</Text>
//               <Text style={ui.metricValue}>
//                 {sensorData?.movement}
//               </Text>
//             </BlurView>

//             <BlurView intensity={20} tint="dark" style={ui.metric}>
//               <Text style={ui.metricLabel}>Sleep State</Text>
//               <Text style={ui.metricValue}>
//                 {sensorData?.sleep_state}
//               </Text>
//             </BlurView>
//           </View>

//         </ScrollView>

//         {/* TIME PICKER */}
//         {showPicker && (
//           <DateTimePicker
//             value={alarmTime}
//             mode="time"
//             display="spinner"
//             onChange={(e, t) => {
//               setShowPicker(false);
//               if (t) setAlarmTime(t);
//             }}
//           />
//         )}
//       </SafeAreaView>
//     </LinearGradient>
//   );
// };

// export default SleepAdjust;
import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  ActivityIndicator,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import DateTimePicker from "@react-native-community/datetimepicker";
import { colors, ui } from "../../../src/styles";
import { ref, onValue } from "firebase/database";
import { realtimeDB } from "../../../firebase/config";
import OnnxService from "../../../src/services/modelService";

const SleepAdjust = () => {
  const [sensorData, setSensorData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [alarmTime, setAlarmTime] = useState(new Date());
  const [smartAlarm, setSmartAlarm] = useState(true);
  const [showPicker, setShowPicker] = useState(false);
  const [modelSleep, setModelSleep] = useState(null);
  const [projectedWake, setProjectedWake] = useState(null);

  const alarmFiredRef = useRef(false);

  // Load model
  useEffect(() => {
    OnnxService.loadModel();
  }, []);

  // Listen to bracelet/latest
  useEffect(() => {
    const dataRef = ref(realtimeDB, "bracelet/latest");

    const unsubscribe = onValue(
      dataRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setSensorData(data);
          runModel(data);
        } else {
          setSensorData(null);
        }
        setLoading(false);
      },
      (error) => {
        console.error("Firebase read error:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // Run model on current sensor features
  const runModel = async (data) => {
    if (!data) return;

    try {
      const features = [
        data.acc_mean,
        data.acc_var,
        data.acc_energy,
        data.hr_mean,
        data.hr_std,
        data.hrv_rmssd,
        data.peak_count,
        data.temp_mean,
        data.temp_slope,
      ];

      const prediction = await OnnxService.predict(features);
      const sleepState = prediction[0];
      setModelSleep(sleepState);

      if (smartAlarm) checkSmartAlarm(sleepState);
    } catch (err) {
      console.log("MODEL ERROR", err);
    }
  };

  // Check if we are in smart alarm window
  const checkSmartAlarm = (sleepState) => {
    if (!alarmTime) return;

    const now = new Date();
    const alarmDateTime = new Date(alarmTime);
    alarmDateTime.setFullYear(now.getFullYear(), now.getMonth(), now.getDate());

    const diffMin = (alarmDateTime - now) / 1000 / 60;

    // Intelligent window: 30 min before alarm
    if (diffMin <= 30 && diffMin >= 0 && !alarmFiredRef.current) {
      // Only trigger alarm if user is not in deep sleep
      if (sleepState !== 3) {
        alarmFiredRef.current = true;
        setProjectedWake(new Date());
        triggerAlarm();
      }
    }

    // Reset alarm if we are before the window
    if (diffMin > 30) alarmFiredRef.current = false;
  };

  // Alarm trigger
  const triggerAlarm = () => {
    Alert.alert("Smart Alarm", "Time to wake up!");
    console.log("ALARM TRIGGERED");
    // TODO: add vibration or local notification here
  };

  if (loading) {
    return (
      <LinearGradient colors={[colors.main, colors.blue]} style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color={colors.light} />
        </SafeAreaView>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient colors={[colors.main, colors.blue]} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 120 }}>
          {/* HEADER */}
          <View style={{ marginBottom: 24 }}>
            <Text style={ui.title}>Tonight’s Overview</Text>
            <Text style={ui.subtitle}>Real-time sync from bracelet</Text>
          </View>

          {/* SMART ALARM */}
          <BlurView intensity={25} tint="dark" style={ui.glassCard}>
            <Text style={ui.sectionLabel}>Latest Alarm</Text>

            <Pressable onPress={() => setShowPicker(true)}>
              <Text style={ui.alarmTime}>
                {alarmTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </Text>
            </Pressable>

            <Pressable
              style={[
                ui.toggle,
                smartAlarm && { backgroundColor: "rgba(99,102,241,0.25)" },
              ]}
              onPress={() => setSmartAlarm(!smartAlarm)}
            >
              <Text style={ui.toggleText}>Smart Cycle Wake</Text>
              <View style={ui.switch}>
                <View
                  style={[ui.knob, smartAlarm && { transform: [{ translateX: 20 }] }]}
                />
              </View>
            </Pressable>

            {smartAlarm && projectedWake && (
              <View style={ui.projectedBox}>
                <Text style={ui.projectedLabel}>Projected wake-up</Text>
                <Text style={ui.projectedTime}>
                  {projectedWake.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </Text>
              </View>
            )}
          </BlurView>

          {/* METRICS */}
          {sensorData && (
            <View style={ui.metricsGrid}>
              <BlurView intensity={20} tint="dark" style={ui.metric}>
                <Text style={ui.metricLabel}>Heart Rate</Text>
                <Text style={ui.metricValue}>{sensorData.hr_mean?.toFixed(1)} BPM</Text>
              </BlurView>

              <BlurView intensity={20} tint="dark" style={ui.metric}>
                <Text style={ui.metricLabel}>Skin Temp</Text>
                <Text style={ui.metricValue}>{sensorData.temp_mean?.toFixed(2)} °C</Text>
              </BlurView>

              <BlurView intensity={20} tint="dark" style={ui.metric}>
                <Text style={ui.metricLabel}>Movement</Text>
                <Text style={ui.metricValue}>{sensorData.acc_mean?.toFixed(2)}</Text>
              </BlurView>

              <BlurView intensity={20} tint="dark" style={ui.metric}>
                <Text style={ui.metricLabel}>Sleep State</Text>
                <Text style={ui.metricValue}>{modelSleep !== null ? modelSleep : "-"}</Text>
              </BlurView>
            </View>
          )}
        </ScrollView>

        {/* TIME PICKER */}
        {showPicker && (
          <DateTimePicker
            value={alarmTime}
            mode="time"
            display="spinner"
            onChange={(e, t) => {
              setShowPicker(false);
              if (t) setAlarmTime(t);
            }}
          />
        )}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SleepAdjust;
