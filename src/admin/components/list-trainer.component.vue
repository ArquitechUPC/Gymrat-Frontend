<template>
  <div class="container">
    <h1>Trainers</h1>
    <ul class="trainer-list">
      <li v-for="trainer in trainers" :key="trainer.id" class="trainer-item">
        <div class="trainer-info">
          <div class="trainer-detail">
            <strong>ID:</strong> {{ trainer.id }}
          </div>
          <div class="trainer-detail">
            <strong>Bio:</strong> {{ trainer.bio }}
          </div>
          <div class="trainer-detail">
            <strong>Given User:</strong> {{ trainer.given_user }}
          </div>
          <div class="trainer-detail">
            <strong>On Service:</strong> {{ trainer.on_service ? 'No' : 'Sí' }}
          </div>
          <div class="trainer-detail">
            <strong>Rating:</strong> {{ trainer.rating }}
          </div>
          <div class="trainer-detail">
            <strong>Speciality:</strong> {{ trainer.speciality }}
          </div>
          <div class="trainer-detail">
            <strong>Given Classes:</strong> {{ trainer.given_classes }}
          </div>
        </div>
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

.trainer-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.trainer-item {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.trainer-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.trainer-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.trainer-detail {
  font-size: 1em;
  color: #34495e;
}

.trainer-detail strong {
  color: #2c3e50;
}
</style>

