import Cookies from "js-cookie";

const GetToken = ({ isAdmin = false }) => {
  const token = Cookies.get(!isAdmin ? "token" : "adminKey");
  token ? token : "Unauthorized";
  return `Bearer ${token}`;
};

export default GetToken;
