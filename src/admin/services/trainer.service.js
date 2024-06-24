import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1';

const TrainerService = {
    // Obtener todos los trainers
    async getTrainers() {
        try {
            const response = await axios.get(`${API_BASE_URL}/trainers`);
            return response.data;
        } catch (error) {
            console.error('Error fetching trainers:', error);
            throw error;
        }
    },
    // Crear un nuevo entrenador
    async createTrainer(trainerData) {
        try {
            const response = await axios.post(`${API_BASE_URL}/trainers`, trainerData);
            return response.data;
        } catch (error) {
            console.error('Error creating trainer:', error);
            throw error;
        }
    }
};

export default TrainerService;
