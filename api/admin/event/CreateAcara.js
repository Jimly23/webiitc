import axios from "axios";
import urlEvent from "@/api/routes/admin/event";
import GetToken from "@/api/utils/GetToken";

const CreateAcara = async ({ name, description }) => {
  const data = { name, description };
  console.log(data);
  try {
    const res = await axios({
      method: "POST",
      url: urlEvent,
      data,
      headers: {
        Authorization: GetToken({ isAdmin: true }),
      },
      timeout: 5000,
      timeoutErrorMessage: "Request time out, coba lagi",
    });

    if (res.status === 200 && res.data?.event?.id) {
      return {
        success: true,
        message: res.data.message || "Event created successfully",
      };
    } else {
      return {
        success: false,
        message: res.data.message || "Failed to create event",
      };
    }
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      console.log("Timeout error:", error.message);
      return { success: false, message: error.message };
    } else {
      return (
        error.response?.data || { success: false, message: "Unknown error" }
      );
    }
  }
};

export default CreateAcara;
