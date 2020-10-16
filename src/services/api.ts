import axios from "axios";

const api = axios.create({
  baseURL: "https://happy-backend-heitormaf.herokuapp.com/",
});

export default api;
