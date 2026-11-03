import axios from "axios";
import { ContactFormData } from "../validators/contact";
import { env } from "../validators/env";

export const getBackendApiUrl = (): string => {
  // If running in browser and NOT on localhost/127.0.0.1, always target production Render URL
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    const isLocalhost =
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname.startsWith("192.168.") ||
      hostname.startsWith("10.");
    if (!isLocalhost) {
      return (
        env.NEXT_PUBLIC_BACKEND_SERVER_URL ||
        "https://fortschritthealthcareltd.onrender.com"
      ).replace(/\/+$/, "");
    }
    return (
      env.NEXT_PUBLIC_BACKEND_LOCAL_URL ||
      "http://localhost:5001"
    ).replace(/\/+$/, "");
  }

  // Server-side fallback
  const base = env.BACKEND_URL || "http://localhost:5001";
  return base.replace(/\/+$/, "");
};

/**
 * Submits the contact form to the backend
 * @param data Validated contact form data
 */
export const submitContactForm = async (data: ContactFormData) => {
  const baseUrl = getBackendApiUrl();
  const response = await axios.post(`${baseUrl}/api/contact`, data, {
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 30000, // 30s timeout to accommodate cold starts
  });
  return response.data;
};
