import axios from "axios";
import urlEvent from "@/api/routes/admin/event";
import GetToken from "@/api/utils/GetToken";

const axiosInstance = axios.create({
  baseURL: urlEvent,
  timeout: 5000,
  headers: {
    Authorization: GetToken({ isAdmin: true }),
  },
});

const GetEvent = async () => {
  try {
    const response = await axiosInstance.get("/");
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.code === "ECONNABORTED") {
        console.error("Timeout error:", error.message);
        return { events: [], error: "Request time out, coba lagi" };
      } else if (error.response) {
        console.error("Server error:", error.response.data);
        return error.response.data;
      }
    }

    console.error("Unknown error:", error.message);
    return { events: [], error: "Terjadi kesalahan tidak terduga" };
  }
};

export default GetEvent;
