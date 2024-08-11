import urlCompetitionCategory from "@/api/routes/admin";
import UrlTeam from "@/api/routes/team";
import GetToken from "@/api/utils/GetToken";
import axios from "axios";
import Cookies from "js-cookie";
const GetAllTeamApi = async () => {
  try {
    const res = await axios({
      baseURL: UrlTeam,
      headers: {
        Authorization: GetToken({ isAdmin: true }),
      },
      timeout: 5000,
      timeoutErrorMessage: "Request time out, coba lagi",
    });
    return res.data;
  } catch (error) {
    if ((error.code = "ECONNABORTED")) {
      console.log(error.message);
    } else {
      return error.response.data;
    }
  }
};

export default GetAllTeamApi;
