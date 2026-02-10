import axios from "axios";
import { authHeader } from "./authHeader";

const API_URL = "https://site-survey-backend-production.up.railway.app/api/reports";

export const getDashboardSummary = () => {
  return axios.get(
    `${API_URL}/dashboard`,
    authHeader()
  );
};
