import axios from "axios";
import GetToken from "../utils/GetToken";
import UrlSeminar from "../routes/seminar";

const GetAllSeminarUserApi = async () => {
  // console.log("Token yang dikirim:", GetToken({ isAdmin: false }));
  try {
    const res = await axios({
      method: "GET",
      baseURL: `${UrlSeminar}`,
      headers: {
        Authorization: GetToken({ isAdmin: false }),
      },
      timeout: 5000,
      timeoutErrorMessage: "Request time out, coba lagi",
    });
    return res.data;
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      console.log(error.message);
    } else {
      console.log(error);
      return error.response.data;
    }
  }
};

export default GetAllSeminarUserApi;
