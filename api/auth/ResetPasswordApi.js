import axios from 'axios'
import { urlResetPassword } from '../routes/auth'

const ResetPasswordApi = async({token,email,password}) => {
  const data = {token, email, password}
  try {
    const res = await axios({
      baseURL: urlResetPassword,
      method: "POST",
      data,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // timeout: 30000,
      timeoutErrorMessage: "Request time out, coba lagi",
    });
    return res.data
    
  } catch (error) {
    return error.response.data
    
  }

}

export default ResetPasswordApi