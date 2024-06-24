<template>
  <div>
    <h1>Trainers</h1>
    <ul>
      <li v-for="trainer in trainers" :key="trainer.id">
        <div><strong>id:</strong> {{ trainer.id }}</div>
        <div><strong>bio:</strong> {{ trainer.bio }}</div>
        <div><strong>given user:</strong> {{ trainer.given_user }}</div>
        <div><strong>on service:</strong> {{ trainer.on_service ? 'no' : 'si' }}</div>
        <div><strong>rating:</strong> {{ trainer.rating }}</div>
        <div><strong>speciality:</strong> {{ trainer.speciality }}</div>
        <div><strong>given_classes:</strong> {{ trainer.given_classes}}</div>
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
