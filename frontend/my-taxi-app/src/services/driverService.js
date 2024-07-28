// src/services/driverService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/driver'; // Update with your API URL

export const driverLogin = async (username, password) => {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
};
