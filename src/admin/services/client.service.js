import axios from 'axios';

const API_BASE_URL = 'http://20.96.176.25:8080/api/v1';

const ClientService = {
    // Obtener todos los clientes
    async getClients() {
        try {
            const response = await axios.get(`${API_BASE_URL}/clients`);
            return response.data;
        } catch (error) {
            console.error('Error fetching clients:', error);
            throw error;
        }
    },

    // Obtener un cliente por ID
    async getClientById(clientId) {
        try {
            const response = await axios.get(`${API_BASE_URL}/clients/${clientId}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching client with ID ${clientId}:`, error);
            throw error;
        }
    },

    // Crear un nuevo cliente
    async createClient(clientData) {
        try {
            const response = await axios.post(`${API_BASE_URL}/clients`, clientData);
            return response.data;
        } catch (error) {
            console.error('Error creating client:', error);
            throw error;
        }
    },

    // Actualizar un cliente existente
    async updateClient(clientId, clientData) {
        try {
            const response = await axios.put(`${API_BASE_URL}/clients/${clientId}`, clientData);
            return response.data;
        } catch (error) {
            console.error(`Error updating client with ID ${clientId}:`, error);
            throw error;
        }
    },

    // Eliminar un cliente
    async deleteClient(clientId) {
        try {
            const response = await axios.delete(`${API_BASE_URL}/clients/${clientId}`);
            return response.data;
        } catch (error) {
            console.error(`Error deleting client with ID ${clientId}:`, error);
            throw error;
        }
    }
};

export default ClientService;
