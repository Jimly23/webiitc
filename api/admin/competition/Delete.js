import { urlGetCompetitions } from "@/api/routes/homepage/GetCompetitions";
import GetToken from "@/api/utils/GetToken";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: urlGetCompetitions,
  timeout: 5000,
  headers: {
    Authorization: GetToken({ isAdmin: true }),
  },
});
const DeleteCompetitionApi = async ({ slug }) => {
  try {
    const response = await axiosInstance.delete(`/${slug}`);
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

export default DeleteCompetitionApi;
