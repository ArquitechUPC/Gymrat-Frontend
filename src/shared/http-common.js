
// Base URLs for microservices
import axios from "axios";

const AUTH_API_URL = import.meta.env.VITE_AUTH_API_URL;
const CLASSES_API_URL = import.meta.env.VITE_CLASSES_API_URL;
const CLIENTS_API_URL = import.meta.env.VITE_CLIENTS_API_URL;
const PLANS_API_URL = import.meta.env.VITE_PLANS_API_URL;

// Axios instance for each microservice
const authApi = axios.create({
    baseURL: AUTH_API_URL,
    headers: { 'Content-type': 'application/json' }
});
const classesApi = axios.create({
    baseURL: CLASSES_API_URL,
    headers: { 'Content-type': 'application/json' }
});
const clientsApi = axios.create({
    baseURL: CLIENTS_API_URL,
    headers: { 'Content-type': 'application/json' }
});
const plansApi = axios.create({
    baseURL: PLANS_API_URL,
    headers: { 'Content-type': 'application/json' }
});
export { authApi, classesApi, clientsApi, plansApi };