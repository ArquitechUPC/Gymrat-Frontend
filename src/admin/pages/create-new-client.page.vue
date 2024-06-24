<script>
import ClientService from '@/admin/services/client.service.js';
import ToolbarComponent from "@/public/component/toolbar.component.vue";
import authService from "@/public/services/auth.service.js";

export default {
  name: 'CreateNewClientComponent',
  components: {ToolbarComponent},
  data() {
    return {
      client: {
        givenUser: null,
        givenPlan: null,
        classExits: null,
        goals: '',
        measurements: '',
        classIds: '',
        status: ''
      }
    };
  },
  methods: {
    handleLogout() {
      authService.logout();
      this.$router.push('/login');
    },
    async createClient() {
      try {
        // Transformar los campos de texto a arrays de enteros
        this.client.goals = this.client.goals.split(',').map(Number);
        this.client.measurements = this.client.measurements.split(',').map(Number);
        this.client.classIds = this.client.classIds.split(',').map(Number);
        this.client.status = this.client.status.split(',').map(s => s.toLowerCase() === 'true');

        await ClientService.createClient(this.client);
        alert('Cliente creado exitosamente');
        this.$router.push('/');
      } catch (error) {
        console.error('Failed to create client:', error);
        alert('Error al crear el cliente');
      }
    }
  }
};
</script>

<template>
  <div class="container">
    <toolbar-component @logout="handleLogout"></toolbar-component>
    <h1>Crear Nuevo Cliente</h1>
    <form @submit.prevent="createClient" class="client-form">
      <div class="form-group">
        <label for="givenUser">Usuario:</label>
        <input type="number" v-model="client.givenUser" id="givenUser" required class="form-control">
      </div>
      <div class="form-group">
        <label for="givenPlan">Plan:</label>
        <input type="number" v-model="client.givenPlan" id="givenPlan" required class="form-control">
      </div>
      <div class="form-group">
        <label for="classExits">Exits de Clase:</label>
        <input type="number" v-model="client.classExits" id="classExits" required class="form-control">
      </div>
      <div class="form-group">
        <label for="goals">Goals:</label>
        <input type="text" v-model="client.goals" id="goals" required class="form-control">
      </div>
      <div class="form-group">
        <label for="measurements">Measurements:</label>
        <input type="text" v-model="client.measurements" id="measurements" required class="form-control">
      </div>
      <div class="form-group">
        <label for="classIds">Class IDs:</label>
        <input type="text" v-model="client.classIds" id="classIds" required class="form-control">
      </div>
      <div class="form-group">
        <label for="status">Status:</label>
        <input type="text" v-model="client.status" id="status" required class="form-control">
      </div>
      <button type="submit" class="submit-button">Crear Cliente</button>
    </form>
  </div>
</template>


<style scoped>
.container {
  padding: 2rem;
  background-color: #f4f6f8;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
  color: #2c3e50;
  text-align: center;
}

.client-form {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #34495e;
}

.form-control {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
}

.form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  outline: none;
}

.submit-button {
  display: block;
  width: 100%;
  padding: 0.8rem;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
