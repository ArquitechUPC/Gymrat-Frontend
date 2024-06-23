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
  <toolbar-component @logout="handleLogout"></toolbar-component>

  <h1>hola crea nuevo cliente</h1>
  <div>
    <h1>Crear Nuevo Cliente</h1>
    <form @submit.prevent="createClient">
      <div>
        <label for="givenUser">Usuario:</label>
        <input type="number" v-model="client.givenUser" id="givenUser" required>
      </div>
      <div>
        <label for="givenPlan">Plan:</label>
        <input type="number" v-model="client.givenPlan" id="givenPlan" required>
      </div>
      <div>
        <label for="classExits">Exits de Clase:</label>
        <input type="number" v-model="client.classExits" id="classExits" required>
      </div>
      <div>
        <label for="goals">Goals:</label>
        <input type="text" v-model="client.goals" id="goals" required>
      </div>
      <div>
        <label for="measurements">Measurements:</label>
        <input type="text" v-model="client.measurements" id="measurements" required>
      </div>
      <div>
        <label for="classIds">Class IDs:</label>
        <input type="text" v-model="client.classIds" id="classIds" required>
      </div>
      <div>
        <label for="status">Status:</label>
        <input type="text" v-model="client.status" id="status" required>
      </div>
      <button type="submit">Crear Cliente</button>
    </form>
  </div>
</template>

<style scoped>

</style>