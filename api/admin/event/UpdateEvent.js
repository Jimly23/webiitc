import axios from "axios";
import urlEvent from "@/api/routes/admin/event";
import GetToken from "@/api/utils/GetToken";

// Membuat instance axios dengan konfigurasi default
const axiosInstance = axios.create({
  baseURL: urlEvent,
  timeout: 5000,
  headers: {
    Authorization: GetToken({ isAdmin: true }),
  },
});

const UpdateEvent = async ({ id, name, description }) => {
  try {
    const response = await axiosInstance.put(`/${id}`, { name, description });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.code === "ECONNABORTED") {
        console.error("Timeout error:", error.message);
        return { success: false, message: "Request time out, coba lagi" };
      } else if (error.response) {
        console.error("Server error:", error.response.data);
        return error.response.data;
      }
    }
    console.error("Unknown error:", error.message);
    return { success: false, message: "Terjadi kesalahan tidak terduga" };
  }
};

export default UpdateEvent;
