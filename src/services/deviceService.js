const BASE_URL = "http://noom.local";

export async function checkDevice() {
  try {
    const res = await fetch(`${BASE_URL}/status`, { timeout: 2000 });
    return res.ok;
  } catch {
    return false;
  }
}

export async function fetchLatestData() {
  try {
    const res = await fetch(`${BASE_URL}/latest`, { timeout: 2000 });
    if (!res.ok) throw new Error("Bad response");
    return await res.json();
  } catch {
    return null;
  }
}
