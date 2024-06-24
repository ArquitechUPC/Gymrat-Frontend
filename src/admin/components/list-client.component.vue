<template>
  <div class="container">
    <h1>Clientes</h1>
    <ul class="client-list">
      <li v-for="client in clients" :key="client.id" class="client-item">
        <div class="client-info">
          <div class="client-detail">
            <strong>ID:</strong> {{ client.id }}
          </div>
          <div class="client-detail">
            <strong>Class Exits:</strong> {{ client.class_exits }}
          </div>
          <div class="client-detail">
            <strong>Given Plan:</strong> {{ client.given_plan }}
          </div>
          <div class="client-detail">
            <strong>Given User:</strong> {{ client.given_user }}
          </div>
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
.container {
  padding: 20px;
  background-color: #f4f6f8;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
  color: #2c3e50;
  text-align: center;
}

.client-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.client-item {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.client-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.client-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.client-detail {
  font-size: 1em;
  color: #34495e;
}

.client-detail strong {
  color: #2c3e50;
}
</style>
