import { type HariniInfo } from "@/types/justPage.types";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

export async function fetchHariniInfo(): Promise<HariniInfo> {
  const response = await fetch(`${API_BASE_URL}/harini/info`);

  if (!response.ok) {
    throw new Error("Could not load Harini info");
  }

  return (await response.json()) as HariniInfo;
}
