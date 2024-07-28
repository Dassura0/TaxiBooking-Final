// src/services/adminService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/admin'; // Update with your API URL

export const adminLogin = async (username, password) => {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
};
