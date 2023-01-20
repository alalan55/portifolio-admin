import axios from "axios";
import { useAuthStore } from "../stores/auth";

const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

http.interceptors.request.use((config) => {
  const store = useAuthStore();
  config.headers.Authorization = `Bearer ${store.$token}`;
  config.headers.Accept = "application/json";
  return config;
});

export default http;
