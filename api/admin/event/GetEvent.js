import axios from "axios";
import urlEvent from "@/api/routes/admin/event";

const GetEvent = async () => {
  try {
    const res = await axios({
      url: urlEvent,
      method: "GET",
      timeout: 5000,
      timeoutErrorMessage: "Request time out, coba lagi",
    });

    if (res.status === 200) {
      console.log(res);
      return { events: res.data.data.events };
    } else {
      throw new Error(res.data.message || "Failed to fetch events");
    }
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      console.log("Timeout error:", error.message);
      return { events: [], error: error.message };
    } else {
      return error.response?.data || { events: [], error: "Unknown error" };
    }
  }
};

export default GetEvent;
