import axios from 'axios'
import { urlForgotPassword } from '../routes/auth'

const ForgotPasswordApi = async(email) => {
  const data = {email}
  try {
    const res = await axios({
      baseURL: urlForgotPassword,
      method: "POST",
      data,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      timeout: 30000,
      timeoutErrorMessage: "Request time out, coba lagi",
    });
    return res.data
    
  } catch (error) {
    return error.response
  }

}

export default ForgotPasswordApi