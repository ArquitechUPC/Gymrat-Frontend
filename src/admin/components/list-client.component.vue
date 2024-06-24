<template>
  <div>
    <h1>Clientes</h1>
    <ul>
      <li v-for="client in clients" :key="client.id">
        <div>
          <strong>id:</strong> {{ client.id }}
        </div>
        <div>
          <strong>Class Exits:</strong> {{ client.class_exits }}
        </div>
        <div>
          <strong>Given Plan:</strong> {{ client.given_plan }}
        </div>
        <div>
          <strong>Given User:</strong> {{ client.given_user }}
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
