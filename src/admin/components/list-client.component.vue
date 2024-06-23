<template>
  <div>
    <h1>Clientes</h1>
    <ul>
      <li v-for="client in clients" :key="client.id">
        <div>
          <strong>ID:</strong> {{ client.id }}
        </div>
        <div>
          <strong>Given User:</strong> {{ client.givenUser }}
        </div>
        <div>
          <strong>Given Plan:</strong> {{ client.givenPlan }}
        </div>
        <div>
          <strong>Class Exits:</strong> {{ client.classExits }}
        </div>
        <div>
          <strong>Goals:</strong> {{ client.goals.join(', ') }}
        </div>
        <div>
          <strong>Measurements:</strong> {{ client.measurements.join(', ') }}
        </div>
        <div>
          <strong>Class IDs:</strong> {{ client.classIds.join(', ') }}
        </div>
        <div>
          <strong>Status:</strong> {{ client.status.join(', ') }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ClientService from '@/admin/services/client.service.js';

export default {
  name: 'ListClientComponent',
  data() {
    return {
      clients: []
    };
  },
  async created() {
    try {
      this.clients = await ClientService.getClients();
    } catch (error) {
      console.error('Failed to load clients:', error);
    }
  }
};
</script>

<style scoped>
/* Estilos opcionales */
</style>
