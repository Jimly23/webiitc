import urlEvent from "@/api/routes/admin/event";

import axios from "axios";

const GetEvent = async () => {
  console.log(urlEvent);
  try {
    const res = await axios({
      baseURL: urlEvent,

      timeout: 5000,
      timeoutErrorMessage: "Request time out, coba lagi",
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    if ((error.code = "ECONNABORTED")) {
      console.log(error.message);
    } else {
      return error.response.data;
    }
  }
};

export default GetEvent;
