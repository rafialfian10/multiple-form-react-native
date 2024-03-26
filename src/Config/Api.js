import axios from "axios";

export const API = axios.create({
  baseURL: "https://www.emsifa.com/api-wilayah-indonesia/api",
});
