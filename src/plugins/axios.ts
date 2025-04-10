import axios from "axios";
import { useAuthStore } from "@/stores/authStore";
import type { Store } from "pinia";

const api = axios.create({
  baseURL: "http://localhost:8080", 
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  console.log(config.headers.Authorization);
  
  return config;
});

export default api;