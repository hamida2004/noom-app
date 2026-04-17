// styles.js
import { StyleSheet } from 'react-native';

export const colors = {
  main: "#2d014dff", // Turquoise
  light: "#fff",   // White
  dark: "#111E15", // Dark green
  blue: "#010f2bff", // Navy blue
  sand: "#E4C6A0", // Sand color
  gold: "#FFD700", // Gold
  gray: "#979797"  // Gray
};

export const styles = StyleSheet.create({
  // Original Styles
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
  header: {
    fontSize: 28,
    fontFamily: "PlaypenSans",
    fontWeight: "bold",
    color: colors.dark, // Use dark text for headers
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: colors.dark,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    elevation: 2,
    borderRadius: 16,
    minWidth: 160,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden", // Ensures the borderRadius is applied properly
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: '100%',
    height: '100%',
  },

  // New Styles
  // Header Section
  headerSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  avatarContainer: {
    width: 32,
    height: 32,
    borderRadius: 25,
    borderColor: colors.light,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  avatar: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.light,
  },
  notificationBellContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationBell: {
    fontSize: 24,
    color: colors.dark,
  },

  // Title Section
  titleSection: {
    alignItems: "center",
    marginTop: 20,
    width: '100%'
  },
  appName: {
    fontSize: 24,
    fontFamily: "PlaypenSans",
    fontWeight: "bold",
    color: colors.light,
  },
  subtitle: {
    fontSize: 16,
    color: colors.light,
    marginTop: 5,
  },

  // Cards Section
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  driveModeCard: {
    backgroundColor: colors.blue, // Navy blue
  },
  healthCard: {
    backgroundColor: colors.main, // Turquoise
  },
  mentalHealthCard: {
    backgroundColor: colors.gold, // Gold
  },
  sleepAdjustCard: {
    backgroundColor: colors.sand, // Sand color
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.light,
    marginTop: 10,
  },

  // Footer Section
  footer: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: colors.light,
    borderRadius: 8,
    elevation: 2
  },
  footerText: {
    fontSize: 16,
    color: colors.blue,
    fontWeight: "bold",
  },
  braceletImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    borderColor: colors.light,
    borderWidth: 1,
  },
  paragraph: {
    fontSize: 16,
    fontFamily: "PlaypenSans",
    color: colors.light,
    textAlign: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  connectButton: {
    backgroundColor: colors.main, // Turquoise
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  connectButtonText: {
    fontSize: 16,
    fontFamily: "PlaypenSans",
    fontWeight: "bold",
    color: colors.light,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: "PlaypenSans",
    fontWeight: "bold",
    color: colors.light, // Light text for gradient background
    marginBottom: 20,
  },
  toggleContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.light,
    marginBottom: 20,
  },
  enabledButton: {
    backgroundColor: colors.blue, // Navy blue
  },
  disabledButton: {
    backgroundColor: colors.gray,
  },
  toggleButtonText: {
    fontSize: 16,
    fontFamily: "PlaypenSans",
    marginLeft: 10,
    color: colors.light,
  },
  drivingTimeContainer: {
    marginTop: 20,
    alignItems: 'center',
    width:'100%'
  },
  drivingTimeText: {
    fontSize: 16,
    fontFamily: "PlaypenSans",
    color: colors.light,
  },
  drivingTimeValue: {
    fontSize: 16,
    fontFamily: "PlaypenSans",
    fontWeight: 'bold',
    color: colors.light,
  },
  fatigueChartContainer: {
    marginTop: 20,
    alignItems: 'center',
    width:'100%'
  },
  fatigueTitle: {
    fontSize: 16,
    fontFamily: "PlaypenSans",
    color: colors.light,
    marginBottom: 10,
  },
  fatigueBarContainer: {
    width: '80%',
    height: 20,
    backgroundColor: colors.gray,
    borderRadius: 10,
    overflow: 'hidden',
  },
  fatigueBar: {
    height: '100%',
    backgroundColor: colors.blue, // Navy blue
  },
  fatigueValue: {
    fontSize: 16,
    fontFamily: "PlaypenSans",
    color: colors.light,
    marginTop: 10,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  carImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    borderColor: colors.light,
    borderWidth: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    elevation: 2,
    overflow:'hidden',
    backgroundColor:'rgba(255,255,255,0.9)'

  },
  input: {
    flex: 1,
    minWidth:200,
    fontSize: 16,
  },
});
export const glass = {
  card: {
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },
  label: {
    color: "#94a3b8",
    fontSize: 12,
    marginBottom: 8,
    textTransform: "uppercase",
  },
  time: {
    fontSize: 48,
    color: "#fff",
    textAlign: "center",
    marginBottom: 16,
  },
  toggle: {
    padding: 12,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.1)",
    alignItems: "center",
  },
  toggleText: {
    color: "#fff",
    fontWeight: "600",
  },
  projected: {
    marginTop: 16,
    padding: 12,
    borderRadius: 14,
    backgroundColor: "rgba(16,185,129,0.15)",
  },
  projectedLabel: {
    color: "#6ee7b7",
    fontSize: 10,
  },
  projectedTime: {
    color: "#a7f3d0",
    fontSize: 24,
    fontWeight: "bold",
  },
  timeline: {
    flexDirection: "row",
    gap: 2,
    marginVertical: 12,
  },
  bar: {
    width: 6,
    height: 40,
    borderRadius: 3,
  },
  hint: {
    color: "#64748b",
    fontSize: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    width: "80%",
  },
  save: {
    textAlign: "center",
    color: colors.main,
    fontWeight: "bold",
    marginTop: 10,
  },
};

export const ui = {
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#f8fafc",
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: 12,
    marginTop: 4,
  },
  glassCard: {
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },
  sectionLabel: {
    color: "#94a3b8",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  alarmTime: {
    fontSize: 56,
    color: "#ffffff",
    textAlign: "center",
    marginVertical: 16,
    fontWeight: "300",
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 14,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.08)",
  },
  toggleText: {
    color: "#e5e7eb",
    fontSize: 14,
    fontWeight: "600",
  },
  switch: {
    width: 46,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#334155",
    padding: 2,
  },
  knob: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  projectedBox: {
    marginTop: 16,
    padding: 12,
    borderRadius: 14,
    backgroundColor: "rgba(16,185,129,0.15)",
  },
  projectedLabel: {
    color: "#6ee7b7",
    fontSize: 10,
    textTransform: "uppercase",
  },
  projectedTime: {
    color: "#a7f3d0",
    fontSize: 22,
    fontWeight: "700",
  },
  metricsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    
  },
  metric: {
    width: "48%",
    padding: 16,
    borderRadius: 20,
    marginBottom: 12,
    elevation:4

  },
  metricLabel: {
    color: "#94a3b8",
    fontSize: 10,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  metricValue: {
    color: "#f8fafc",
    fontSize: 18,
    fontWeight: "700",
  },
  alarmRow: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 12,
  marginVertical: 16,
},

alarmIcon: {
  width: 42,
  height: 42,
  borderRadius: 21,
  backgroundColor: "rgba(99,102,241,0.15)",
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 1,
  borderColor: "rgba(99,102,241,0.35)",
},

topBar: {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: 72,
  paddingHorizontal: 20,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottomWidth: 1,
  borderColor: "rgba(255,255,255,0.08)",
  zIndex: 20,
},

topBarLeft: {
  flexDirection: "row",
  alignItems: "center",
  gap: 10,
},

logoCircle: {
  width: 36,
  height: 36,
  borderRadius: 18,
  backgroundColor: "#6366f1",
  alignItems: "center",
  justifyContent: "center",
  shadowColor: "#6366f1",
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.8,
  shadowRadius: 10,
  elevation: 8,
},

logoText: {
  color: "white",
  fontSize: 18,
  fontWeight: "700",
},

logoName: {
  color: "#e5e7eb",
  fontSize: 18,
  fontWeight: "600",
  letterSpacing: 1,
},

topBarRight: {
  flexDirection: "row",
  alignItems: "center",
  gap: 12,
},

iconButton: {
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: "rgba(255,255,255,0.06)",
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 1,
  borderColor: "rgba(255,255,255,0.12)",
},
avatarGlow: {
  width: 150,
  height: 150,
  borderRadius: 75,
  backgroundColor: "rgba(99,102,241,0.15)",
  alignItems: "center",
  justifyContent: "center",
  shadowColor: "#6366f1",
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.8,
  shadowRadius: 25,
  elevation: 12,
},

avatarImage: {
  width: 130,
  height: 130,
  borderRadius: 65,
},

avatarCamera: {
  position: "absolute",
  bottom: 8,
  right: "38%",
  backgroundColor: "rgba(15,23,42,0.8)",
  borderRadius: 20,
  padding: 8,
  borderWidth: 1,
  borderColor: "rgba(255,255,255,0.15)",
},

inputRow: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottomWidth: 1,
  borderColor: "rgba(255,255,255,0.08)",
  paddingVertical: 12,
},

input: {
  flex: 1,
  color: "#e5e7eb",
  fontSize: 16,
},

actionRow: {
  marginTop: 16,
},

actionText: {
  color: "#6366f1",
  fontSize: 14,
  fontWeight: "500",
},

toggleRow: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingVertical: 12,
},

ctaCard: {
  marginTop: 24,
  paddingVertical: 18,
  borderRadius: 24,
  alignItems: "center",
  borderWidth: 1,
  borderColor: "rgba(255,255,255,0.12)",
},

ctaText: {
  color: "#e5e7eb",
  fontSize: 16,
  fontWeight: "600",
  letterSpacing: 1,
},
deviceImageWrapper: {
  width: "100%",
  height: 180,
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 20,
},

deviceImage: {
  width: "80%",
  height: "100%",
},

deviceText: {
  color: "#cbd5f5",
  fontSize: 14,
  textAlign: "center",
  lineHeight: 22,
  marginBottom: 24,
},

connectButton: {
  marginTop: 8,
  paddingVertical: 16,
  borderRadius: 22,
  alignItems: "center",
  backgroundColor: "rgba(99,102,241,0.25)",
  borderWidth: 1,
  borderColor: "rgba(99,102,241,0.5)",
  shadowColor: "#6366f1",
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.8,
  shadowRadius: 15,
  elevation: 10,
},

connectButtonText: {
  color: "#e5e7eb",
  fontSize: 16,
  fontWeight: "600",
  letterSpacing: 1,
},


};
