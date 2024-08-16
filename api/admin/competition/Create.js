import axios from "axios";
import GetToken from "@/api/utils/GetToken";
import { urlGetCompetitions } from "@/api/routes/homepage/GetCompetitions";

const CreateCompetitionApi = async (competitionData) => {
  if (!competitionData || typeof competitionData !== "object") {
    throw new Error("Invalid competitionData: must be an object and not null");
  }

  const formData = new FormData();
  console.log(formData);
  if (competitionData.cover) {
    formData.append("cover", competitionData.cover);
  }

  Object.entries(competitionData).forEach(([key, value]) => {
    if (key !== "cover") {
      // Pastikan cover tidak ditambahkan dua kali
      const formattedValue =
        typeof value === "object" && value !== null
          ? JSON.stringify(value)
          : value;
      formData.append(key, formattedValue);
    }
  });

  try {
    const { data } = await axios.post(urlGetCompetitions, formData, {
      headers: {
        Authorization: GetToken({ isAdmin: true }),
        "Content-Type": "multipart/form-data",
      },
      timeout: 30000,
      timeoutErrorMessage: "Request time out, coba lagi",
    });
    console.log(data);
    return data;
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      console.error(error.message);
    } else {
      return error.response?.data || error.message;
    }
  }
};

export default CreateCompetitionApi;
