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
  <div class="container">
    <toolbar-component @logout="handleLogout"></toolbar-component>
    <h1>Registrar Nuevo Entrenador</h1>
    <form @submit.prevent="registerTrainer" class="trainer-form">
      <div class="form-group">
        <label for="givenUser">Usuario:</label>
        <input type="number" v-model="trainer.givenUser" id="givenUser" required class="form-control">
      </div>
      <div class="form-group">
        <label for="speciality">Especialidad:</label>
        <input type="text" v-model="trainer.speciality" id="speciality" required class="form-control">
      </div>
      <div class="form-group">
        <label for="onService">En Servicio:</label>
        <select v-model="trainer.onService" id="onService" required class="form-control">
          <option :value="true">Sí</option>
          <option :value="false">No</option>
        </select>
      </div>
      <div class="form-group">
        <label for="bio">Biografía:</label>
        <textarea v-model="trainer.bio" id="bio" required class="form-control"></textarea>
      </div>
      <div class="form-group">
        <label for="rating">Calificación:</label>
        <input type="number" v-model="trainer.rating" id="rating" step="0.1" min="0" max="5" required class="form-control">
      </div>
      <div class="form-group">
        <label for="givenClasses">Clases Dadas:</label>
        <input type="text" v-model="trainer.givenClasses" id="givenClasses" placeholder="Use comas para separar" required class="form-control">
      </div>
      <button type="submit" class="submit-button">Registrar Entrenador</button>
    </form>
  </div>
</template>


<style scoped>
.container {
  padding: 2rem;
  background-color: #f4f6f8;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
  color: #2c3e50;
  text-align: center;
}

.trainer-form {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #34495e;
}

.form-control {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
}

.form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  outline: none;
}

.submit-button {
  display: block;
  width: 100%;
  padding: 0.8rem;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
