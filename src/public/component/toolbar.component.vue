<script>
export default {
  name:"toolbar-component",
  title:"toolbarComponent",
  data() {
    return {
      items: [
        { label: 'Update', icon: 'pi pi-refresh' },
        { label: 'Delete', icon: 'pi pi-times' }
      ]
    };
  }
}
</script>


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
        <pv-button icon="pi pi-bars" severity="danger" class="toolbar-button" />
      </template>

      <template #end>
        <div class="right-section">

        </div>
      </template>
    </pv-toolbar>
  </div>
</template>

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
  height: 1.5em; /* Ajusta la altura del logo al tamaño de la fuente del texto */
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