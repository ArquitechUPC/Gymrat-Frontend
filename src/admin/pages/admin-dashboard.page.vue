<template>
  <div class="dashboard-container">
    <toolbar-component @logout="handleLogout"></toolbar-component>
    <br>
    <div class="dashboard-content">
      <div class="dashboard-section">
        <h2>Clientes</h2>
        <list-client-component></list-client-component>
      </div>
      <div class="dashboard-section">
        <h2>Entrenadores</h2>
        <list-trainer-component></list-trainer-component>
      </div>
    </div>
    <br>
    <div class="dashboard-content">
      <div class="dashboard-section">
        <h2>Clases</h2>
        <list-classes-component></list-classes-component>
      </div>
      <div class="dashboard-section">
        <h2>Entrenadores</h2>
        <list-trainer-component></list-trainer-component>
      </div>
    </div>
  </div>
</template>

<script>
import ToolbarComponent from "@/public/component/toolbar.component.vue";
import authService from "@/public/services/auth.service.js";
import ListClientComponent from "@/admin/components/list-client.component.vue";
import ListTrainerComponent from "@/admin/components/list-trainer.component.vue";
import ListClassesComponent from "@/admin/components/list-class.component.vue";

export default {
  name: 'AdminDashboardComponent',
  components: {ListClassesComponent, ListTrainerComponent, ToolbarComponent,ListClientComponent},
  data() {
    return {
      // Add any data you need for the dashboard
    };
  },
  methods: {
    handleLogout() {
      authService.logout();
      this.$router.push('/login');
    }
  },
  mounted() {
    // You can fetch data or perform other actions here
    // ...
  },
};
</script>

<style scoped>
.dashboard-container {
  padding: 2rem;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.dashboard-actions {
  display: flex;
  align-items: center;
}

.dashboard-button {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: white;
  margin-right: 1rem;
  cursor: pointer;
}

.dashboard-dropdown {
  position: relative;
}

.dashboard-dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dashboard-dropdown-menu li {
  list-style: none;
  padding: 1rem;
}

.dashboard-dropdown-menu li a {
  color: #333;
  text-decoration: none;
}

.dashboard-dropdown-menu li a:hover {
  background-color: #ddd;
}

.dashboard-content {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.dashboard-section {
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 1 1 45%; /* Adjust flex value for responsive layout */
}

.activity-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.activity-icon {
  font-size: 1.5rem;
  margin-left: 1rem;
}

.activity-date,
.activity-user {
  margin-left: 1rem;
  font-size: 0.9rem;
  color: #666;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .dashboard-section {
    flex: 1 1 100%;
  }
}
</style>
