import axios from 'axios';

const API_URL = 'http://localhost:8080/classes';

class ClassService {
    getClasses() {
        return axios.get(API_URL).then(response => response.data);
    }

    getClassById(id) {
        return axios.get(`${API_URL}/${id}`).then(response => response.data);
    }

    createClass(classData) {
        return axios.post(API_URL, classData).then(response => response.data);
    }

    updateClass(id, classData) {
        return axios.put(`${API_URL}/${id}`, classData).then(response => response.data);
    }

    deleteClass(id) {
        return axios.delete(`${API_URL}/${id}`).then(response => response.data);
    }
}

export default new ClassService();