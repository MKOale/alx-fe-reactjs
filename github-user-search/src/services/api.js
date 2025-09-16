import axios from "axios";

const API_BASE = "https://api.github.com";

export const fetchUser = async (username) => {
  try {
    const response = await axios.get(`${API_BASE}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
s