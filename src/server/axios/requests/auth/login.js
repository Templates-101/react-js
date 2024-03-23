import { API_URL } from "../../../base-url";
import axios from "axios";

export const login = async (credentials) => {
  try {
    const res = await axios.post(`${API_URL}/api/v1/login`, {
      email: credentials.email,
      password: credentials.password,
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
