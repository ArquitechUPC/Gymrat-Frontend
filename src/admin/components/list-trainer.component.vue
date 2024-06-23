<template>
  <div>
    <h1>Trainers</h1>
    <ul>
      <li v-for="trainer in trainers" :key="trainer.id">
        <div><strong>ID:</strong> {{ trainer.id }}</div>
        <div><strong>Usuario:</strong> {{ trainer.givenUser }}</div>
        <div><strong>Especialidad:</strong> {{ trainer.speciality }}</div>
        <div><strong>En Servicio:</strong> {{ trainer.onService ? 'Sí' : 'No' }}</div>
        <div><strong>Biografía:</strong> {{ trainer.bio }}</div>
        <div><strong>Calificación:</strong> {{ trainer.rating }}</div>
        <div><strong>Clases Dadas:</strong> {{ trainer.givenClasses.join(', ') }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import TrainerService from '@/admin/services/trainer.service.js';

export default {
  data() {
    return {
      trainers: []
    };
  },
  async created() {
    try {
      this.trainers = await TrainerService.getTrainers();
    } catch (error) {
      console.error('Failed to load trainers:', error);
    }
  }
};
</script>

<style scoped>
/* Estilos opcionales */
ul {
  list-style-type: none;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

div {
  margin-bottom: 5px;
}
</style>
