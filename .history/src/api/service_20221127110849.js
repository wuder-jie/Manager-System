import axios from "axios";
const service = axios.create({
  baseURL: "http://1.116.64.64:5004/api2",
  timeout: 3000,
});
