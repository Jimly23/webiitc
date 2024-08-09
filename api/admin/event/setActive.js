import urlEvent from "@/api/routes/admin/event";
import GetToken from "@/api/utils/GetToken";
import axios from "axios";

const activateEvent = async ({ id }) => {
  try {
    const res = await axios({
      method: "PUT",
      url: `${urlEvent}/${id}/set-active`,

      timeoutErrorMessage: "Request time out, coba lagi",
    });
    return res.data;
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      console.log(error.message);
    } else {
      return error.response.data;
    }
  }
};

export default activateEvent;
