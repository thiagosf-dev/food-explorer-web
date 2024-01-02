import axios from "axios";

const BASE_URL = import.meta.env.VITE_REACT_APP_API_BASE_URL;
const PORT = import.meta.env.VITE_REACT_APP_API_PORT;

export const api = axios.create({
  baseURL: `${BASE_URL}:${PORT}`,
});
