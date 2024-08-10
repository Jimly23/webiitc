import axios from "axios";
import urlEvent from "@/api/routes/admin/event";
import GetToken from "@/api/utils/GetToken";

const UpdateEvent = async ({ id, name, description }) => {
  const data = { name, description };

  try {
    const res = await axios({
      method: "PUT",
      url: `${urlEvent}/${id}`,
      data,
      headers: {
        Authorization: GetToken({ isAdmin: true }),
      },
      timeout: 5000,
      timeoutErrorMessage: "Request time out, coba lagi",
    });
    return res.data;
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      console.log("Timeout error:", error.message);
    } else {
      return (
        error.response?.data || { success: false, message: "Unknown error" }
      );
    }
  }
};

export default UpdateEvent;
