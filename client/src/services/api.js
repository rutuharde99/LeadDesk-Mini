import axios from "axios";

const API = axios.create({
  baseURL: "https://leaddesk-mini-production-d5ae.up.railway.app/api",
});

export default API;