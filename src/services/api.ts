import axios from "axios";
import API_URL from "../../variaveis";

const api = axios.create({
  baseURL: API_URL,
});

export default api;
