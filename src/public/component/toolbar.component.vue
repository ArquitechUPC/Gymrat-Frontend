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
            <ul>
              <li>
                <a href="/register-client">Nuevo cliente</a>
              </li>
              <li>
                <a href="/create-new-class">Nueva clase</a>
              </li>
              <li>
                <a href="/register-trainer">Nueva entrenador</a>
              </li>
              <li>
                <a href="/admin-dashboard">Dashboard</a>
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
</style>