<template>
  <div class="register-form-container">
    <div class="register-form">
      <h1>Register Admin</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="userData.username" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="userData.email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="userData.password" required />
        </div>
        <div>
          <label for="companyId">Company ID:</label>
          <input type="number" id="companyId" v-model.number="userData.companyId" required />
        </div>
        <div>
          <label for="phoneNumber">Phone Number:</label>
          <input type="text" id="phoneNumber" v-model="userData.phoneNumber" />
        </div>
        <div>
          <label for="address">Address:</label>
          <input type="text" id="address" v-model="userData.address" />
        </div>
        <div>
          <label for="city">City:</label>
          <input type="text" id="city" v-model="userData.city" />
        </div>
        <button type="submit">Register</button>
      </form>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>

      <p class="link-container">
        <router-link to="/login">Already have an account? Login</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import authService from "@/public/services/auth.service.js";

export default {
  name: 'RegisterAdminComponent',
  data() {
    return {
      userData: {
        username: '',
        email: '',
        password: '',
        companyId: 0,
        phoneNumber: '',
        address: '',
        city: '',
      },
      errorMessage: null,
    };
  },
  methods: {
    handleSubmit() {
      authService
          .registerAdmin(this.userData)
          .then((response) => {
            // Successful registration, redirect or perform other actions
            console.log('Registered:', response.data);
            this.$router.push('/dashboard'); // Replace with your intended route
          })
          .catch((error) => {
            this.errorMessage = error.response.data.message || 'Registration failed';
          });
    },
  },
};
</script>

<style scoped>
.register-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f4;
}

.register-form {
  background-color: #fff;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 350px; /* Adjust width as needed */
  text-align: center;
}

.register-form h1 {
  margin-bottom: 2rem;
  color: #333;
}

.register-form label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
}

.register-form input {
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.register-form button {
  background-color: #4caf50;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.register-form button:hover {
  background-color: #45a049;
}

.error {
  color: red;
  margin-top: 1rem;
}

.link-container {
  margin-top: 2rem;
  text-align: center;
}

.link-container a {
  color: #333;
  text-decoration: none;
}

.link-container a:hover {
  text-decoration: underline;
}

@media (max-width: 450px) {
  .register-form {
    width: 90%;
  }
}
</style>
