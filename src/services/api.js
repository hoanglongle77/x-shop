import axiosInstance from "@/shared/config";

export const SessionApi = {
  getAllSessions: () => {
    return axiosInstance.get("/sessions/").then((response) => response.data);
  },
};
