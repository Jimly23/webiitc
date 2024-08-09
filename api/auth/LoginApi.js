import axios from "axios";
import { urlLogin } from "../routes/auth";

const LoginApi = async ({ email, password }) => {
  try {
    const data = { email, password };

    const res = await axios({
      baseURL: urlLogin,
      method: "POST",
      data,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // timeout: 30000,
      timeoutErrorMessage: "Request time out, coba lagi",
    });

    console.log("res", res);
    return res.data;
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      console.log(error.message);
    } else {
      return error.response.data;
    }
    // return error.response.data;
  }
};

export default LoginApi;
