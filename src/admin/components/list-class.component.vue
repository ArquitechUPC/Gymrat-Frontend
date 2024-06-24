<script>
import ClassService from '@/admin/services/class.service.js';

export default {
  name: 'ListClassesComponent',
  data() {
    return {
      classes: []
    };
  },
  async created() {
    try {
      this.classes = await ClassService.getClasses();
    } catch (error) {
      console.error('Failed to load classes:', error);
    }
  }
};
</script>

<template>
  <div class="container">
    <h1>Clases</h1>
    <ul class="class-list">
      <li v-for="classItem in classes" :key="classItem.id" class="class-item">
        <div class="class-info">
          <div class="class-detail">
            <strong>ID:</strong> {{ classItem.id }}
          </div>
          <div class="class-detail">
            <strong>Nombre:</strong> {{ classItem.name }}
          </div>
          <div class="class-detail">
            <strong>Descripción:</strong> {{ classItem.description }}
          </div>
          <div class="class-detail">
            <strong>Instructor:</strong> {{ classItem.instructor }}
          </div>
          <div class="class-detail">
            <strong>Duración:</strong> {{ classItem.duration }} minutos
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
  color: #2c3e50;
}

.class-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.class-item {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s;
}

.class-item:hover {
  transform: translateY(-5px);
}

.class-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.class-detail {
  font-size: 1em;
  color: #34495e;
}

.class-detail strong {
  color: #2c3e50;
}
</style>
