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

const CreateAcara = async ({ name, description }) => {
  if (!name || !description) {
    throw new Error("Nama dan deskripsi acara harus diisi");
  }

  try {
    const response = await axiosInstance.post("/", {
      name,
      description,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.code === "ECONNABORTED") {
        console.error("Timeout error:", error.message);
        throw new Error("Request time out, coba lagi");
      } else if (error.response) {
        console.error("Server error:", error.response.data);
        throw new Error(error.response.data.message || "Gagal membuat acara");
      }
    }

    console.error("Unknown error:", error.message);
    throw new Error("Terjadi kesalahan tidak terduga");
  }
};

export default CreateAcara;
