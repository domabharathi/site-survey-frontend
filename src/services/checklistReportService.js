import axios from "axios";
import { authHeader } from "./authHeader";

// 🔹 SUMMARY API
const SUMMARY_API_URL = "https://site-survey-backend-production.up.railway.app/api/checklist-responses";

// 🔹 PDF REPORT API
const REPORT_API_URL = "https://site-survey-backend-production.up.railway.app/api/reports";

export const getChecklistSummary = (checklistId) => {
  return axios.get(
    `${SUMMARY_API_URL}/summary/${checklistId}`,
    authHeader()
  );
};

// ✅ ADD THIS (PDF DOWNLOAD)
export const downloadChecklistPdf = (checklistId) => {
  return axios.get(
    `${REPORT_API_URL}/checklist/${checklistId}`,
    {
      ...authHeader(),
      responseType: "blob" // 🔥 IMPORTANT
    }
  );
};
