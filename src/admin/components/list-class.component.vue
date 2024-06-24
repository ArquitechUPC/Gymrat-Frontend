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
  <div>
    <h1>Clases</h1>
    <ul>
      <li v-for="classItem in classes" :key="classItem.id">
        <div>
          <strong>ID:</strong> {{ classItem.id }}
        </div>
        <div>
          <strong>Name:</strong> {{ classItem.name }}
        </div>
        <div>
          <strong>Description:</strong> {{ classItem.description }}
        </div>
        <div>
          <strong>Instructor:</strong> {{ classItem.instructor }}
        </div>
        <div>
          <strong>Duration:</strong> {{ classItem.duration }} minutes
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>