<template>
  <div class="card toolbar">
    <pv-toolbar fixed>
      <template #start>
        <div class="right-section">
          <pv-image src="/gym-rat-logo.png" alt="GymRat Logo" width="50" />
          <span class="brand-name">GymRat</span>
        </div>
      </template>

      <template #center>
        <div class="card flex justify-content-center">
          <pv-sidebar v-model:visible="visible" header="Sidebar">
            <ul class="sidebar-menu">
              <li class="sidebar-item">
                <a href="/register-client" class="sidebar-link">Nuevo cliente</a>
              </li>
              <li class="sidebar-item">
                <a href="/create-new-class" class="sidebar-link">Nueva clase</a>
              </li>
              <li class="sidebar-item">
                <a href="/register-trainer" class="sidebar-link">Nuevo entrenador</a>
              </li>
              <li class="sidebar-item">
                <a href="/admin-dashboard" class="sidebar-link">Dashboard</a>
              </li>
            </ul>
          </pv-sidebar>
          <pv-button icon="pi pi-bars" @click="visible = true" />
        </div>
      </template>

      <template #end>
        <div class="right-section">
          <pv-button icon="pi pi-sign-out" @click="$emit('logout')" class="toolbar-button" />
        </div>
      </template>
    </pv-toolbar>
  </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);

</script>

<style scoped>
.toolbar {
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #dcdcdc;
  background-color: #f8f9fa;
}

.right-section {
  display: flex;
  align-items: center;
}

.logo {
  height: 1.5em;
  width: auto;
  margin-right: 0.5rem;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.toolbar-button {
  margin: 0 1rem;
}
.sidebar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-item {
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s, color 0.3s;
}

.sidebar-item:hover {
  background-color: #f0f0f0;
}

.sidebar-link {
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  display: block;
  transition: color 0.3s;
}

.sidebar-link:hover {
  color: #007bff;
}
</style>