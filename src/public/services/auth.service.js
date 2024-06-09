import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081/api/v1/auth';

const authStorage = localStorage;

export default {
    // Login
    async login(username, password) {
        try {
            const response = await axios.post(`${API_BASE_URL}/login`, {
                username,
                password,
            });
            authStorage.setItem('token', response.data.token);
            return response;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    },

    // Register Admin
    async registerAdmin(userData) {
        try {
            const response = await axios.post(`${API_BASE_URL}/register-admin`, userData);
            authStorage.setItem('token', response.data.token);
            return response;
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    },

    // Change Password
    async changePassword(userData) {
        try {
            const response = await axios.post(`${API_BASE_URL}/change-password`, userData);
            authStorage.setItem('token', response.data.token);
            return response;
        } catch (error) {
            console.error('Password change error:', error);
            throw error;
        }
    },

    // Get Current User (If logged in)
    getCurrentUser() {
        const token = authStorage.getItem('token');
        if (token) {
            return true;
        } else {
            return false;
        }
    },

    // Logout
    logout() {
        authStorage.removeItem('token');
    },


    async axiosWithAuth() {
        const token = authStorage.getItem('token');
        if (token) {
            return axios.create({
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } else {
            return axios;
        }
    },
};
