import axios from "api/axios-instance";

const BASE_API_URL = "/shop";

const ApiService = {
  async getAll() {
    const response = await axios.get(BASE_API_URL);
    return response?.data;
  },
  async post(data) {
    const response = await axios.post(BASE_API_URL, data);
    return response?.data;
  },
};

export default ApiService;
