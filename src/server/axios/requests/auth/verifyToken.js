import { API_URL } from "../../../base-url";
import axios from "axios";

export const verifyToken = async () => {
  try {
    const res = await axios.get(`${API_URL}/api/v1/verify-token`);
    return res.data;
  } catch (error) {
    return error;
  }
};
