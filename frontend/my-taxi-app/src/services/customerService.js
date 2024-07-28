import axios from 'axios';

// Base URL of your backend
const API_URL = 'http://localhost:8080';

// Admin endpoints
const adminLogin = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/admin/login`, null, { params: { username, password } });
        return response.data;
    } catch (error) {
        throw error;
    }
};

const addCab = async (cab) => {
    try {
        const response = await axios.post(`${API_URL}/admin/cabs`, cab);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Driver endpoints
const driverSignUp = async (username, password, email, phoneNumber) => {
    try {
        const response = await axios.post(`${API_URL}/driver/signup`, null, { params: { username, password, email, phoneNumber } });
        return response.data;
    } catch (error) {
        throw error;
    }
};

const driverLogin = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/driver/login`, null, { params: { username, password } });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Cab related functions
const getCabs = async () => {
    try {
        const response = await axios.get(`${API_URL}/admin/cabs`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const bookCab = async (bookingData) => {
    try {
        const response = await axios.post(`${API_URL}/admin/bookings`, bookingData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Booking related functions
const viewBookings = async () => {
    try {
        const response = await axios.get(`${API_URL}/admin/bookings`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const cancelBooking = async (bookingId) => {
    try {
        const response = await axios.post(`${API_URL}/admin/bookings/${bookingId}/cancel`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Export functions for use in components
const customerService = {
    adminLogin,
    addCab,
    driverSignUp,
    driverLogin,
    getCabs,
    bookCab,
    viewBookings,
    cancelBooking
};

export default customerService;
