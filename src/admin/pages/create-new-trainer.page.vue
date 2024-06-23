<script>
import TrainerService from '@/admin/services/trainer.service.js';
import ToolbarComponent from "@/public/component/toolbar.component.vue";
import authService from "@/public/services/auth.service.js";


export default {
  name: 'CreateNewTrainerComponent',
  components: {ToolbarComponent},
  data() {
    return {
      trainer: {
        givenUser: null,
        speciality: '',
        onService: true,
        bio: '',
        rating: null,
        givenClasses: ''
      }
    };
  },
  methods: {
    async registerTrainer() {
      try {
        // Transformar el campo de texto de clases dadas a un array de enteros
        this.trainer.givenClasses = this.trainer.givenClasses.split(',').map(Number);

        await TrainerService.createTrainer(this.trainer);
        alert('Entrenador registrado exitosamente');
        this.$router.push('/admin-dashboard');
      } catch (error) {
        console.error('Failed to register trainer:', error);
        alert('Error al registrar el entrenador');
      }
    }
  }
}
</script>

<template>
  <toolbar-component @logout="handleLogout"></toolbar-component>
  <h1>Register New Trainer</h1>
  <form @submit.prevent="registerTrainer">
    <div>
      <label for="givenUser">Usuario:</label>
      <input type="number" v-model="trainer.givenUser" id="givenUser" required>
    </div>
    <div>
      <label for="speciality">Especialidad:</label>
      <input type="text" v-model="trainer.speciality" id="speciality" required>
    </div>
    <div>
      <label for="onService">En Servicio:</label>
      <select v-model="trainer.onService" id="onService" required>
        <option :value="true">Sí</option>
        <option :value="false">No</option>
      </select>
    </div>
    <div>
      <label for="bio">Biografía:</label>
      <textarea v-model="trainer.bio" id="bio" required></textarea>
    </div>
    <div>
      <label for="rating">Calificación:</label>
      <input type="number" v-model="trainer.rating" id="rating" step="0.1" min="0" max="5" required>
    </div>
    <div>
      <label for="givenClasses">Clases Dadas:</label>
      <input type="text" v-model="trainer.givenClasses" id="givenClasses" placeholder="Use comas para separar" required>
    </div>
    <button type="submit">Registrar Entrenador</button>
  </form>
</template>

<style scoped>
/* Estilos opcionales */
form {
  display: flex;
  flex-direction: column;
}

div {
  margin-bottom: 10px;
}

label {
  margin-right: 10px;
}

input, select, textarea {
  padding: 5px;
  font-size: 16px;
}

button {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}
</style>