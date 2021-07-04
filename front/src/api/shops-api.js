import axios from "api/axios-instance";

const BASE_API_URL = "/shop";

const ApiService = {
  async getAll() {
    const response = await axios.get(BASE_API_URL);
    return response?.data;
  },
};

export default ApiService;
