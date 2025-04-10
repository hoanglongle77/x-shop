import axios from "axios";

const axiosInstance = axios.create({
  // @ts-ignore
  baseURL: process.env.BE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
