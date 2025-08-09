import GetToken from "@/api/utils/GetToken";
import axios from "axios";
import UrlPaymentSeminar from "../routes/paymentseminar";

const PaySeminarApi = async ({ proveOfPayment, id }) => {
  const data = {
    proveOfPayment,
  };
  console.log("Token yang dikirim:", GetToken({ isAdmin: false }));

  try {
    const res = await axios({
      method: "POST",
      baseURL: `${UrlPaymentSeminar}/${id}`,
      data,
      headers: {
        Authorization: GetToken({ isAdmin: false }),
        "Content-Type": "multipart/form-data",
      },
      timeout: 30000,
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
export default PaySeminarApi;
