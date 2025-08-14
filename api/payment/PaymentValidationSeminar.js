import GetToken from "@/api/utils/GetToken";
import axios from "axios";
import { UrlPaymentSeminarValidation } from "../routes/paymentseminar";

const PaymentValidationSeminarApi = async ({ isApprove, reason, id }) => {
  const data = {
    isApprove,
    reason,
  };
  try {
    const res = await axios({
      method: "POST",
      baseURL: `${UrlPaymentSeminarValidation}/${id}/update`,
      data,
      headers: {
        Authorization: GetToken({ isAdmin: true }),
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
export default PaymentValidationSeminarApi;
