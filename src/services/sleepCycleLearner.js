import AsyncStorage from "@react-native-async-storage/async-storage";

const ALPHA = 0.1;
const MIN_CYCLE = 60;
const MAX_CYCLE = 120;
const STORAGE_KEY = "deep_sleep_cycle_estimate";

export async function getCycleEstimate() {
  const value = await AsyncStorage.getItem(STORAGE_KEY);
  return value ? parseFloat(value) : 90;
}

export async function updateCycleEstimate(observedCycles) {
  let estimate = await getCycleEstimate();

  observedCycles.forEach(D => {
    if (D >= MIN_CYCLE && D <= MAX_CYCLE) {
      estimate = (1 - ALPHA) * estimate + ALPHA * D;
    }
  });

  await AsyncStorage.setItem(STORAGE_KEY, estimate.toFixed(2));
  return estimate;
}
