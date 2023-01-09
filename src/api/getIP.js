import axios from "axios";


export const getIP = async (url) => {
  const response = await axios.get(url);
  return response.data;
};



