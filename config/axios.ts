import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 1000,
});

apiClient.interceptors.request.use(
  async (config) => {
    config.headers["X-Organization-ID"] =
      process.env.EXPO_PUBLIC_ORGANIZATION_ID;

    config.headers["Content-Type"] = "application/json";

    const token = "";

    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
