<template>
  <div class="login-form-container">
    <div class="login-form">
      <h1>Login</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>

      <p class="link-container">
        <router-link to="/register-admin">Don't have an account? Register</router-link>
        <span class="separator"> | </span>
        <router-link to="/reset-password">Forgot password?</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import authService from "@/public/services/auth.service.js";

export default {
  name: 'LoginComponent',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: null,
    };
  },
  methods: {
    handleSubmit() {
      authService
          .login(this.username, this.password)
          .then((response) => {
            console.log('Logged in:', response.data);
            this.$router.push('/dashboard');
          })
          .catch((error) => {
            this.errorMessage = error.response.data.message || 'Login failed';
          });
    },
  },
};
</script>

<style scoped>
.login-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f4;
}

.login-form {
  background-color: #fff;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 350px; /* Adjust width as needed */
  text-align: center;
}

.login-form h1 {
  margin-bottom: 2rem;
  color: #333;
}

.login-form label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
}

.login-form input {
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.login-form button {
  background-color: #4caf50;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.login-form button:hover {
  background-color: #45a049;
}

.error {
  color: red;
  margin-top: 1rem;
}

@media (max-width: 450px) {
  .login-form {
    width: 90%;
  }
}

.link-container {
  margin-top: 2rem;
  text-align: center;
}

.link-container .separator {
  margin: 0 0.5rem;
}

.link-container a {
  color: #333;
  text-decoration: none;
}

.link-container a:hover {
  text-decoration: underline;
}
</style>
