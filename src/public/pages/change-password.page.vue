<template>
  <div class="change-password-form-container">
    <div class="change-password-form">
      <h1>Change Password</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="userData.username" required />
        </div>
        <div>
          <label for="password">Current Password:</label>
          <input type="password" id="password" v-model="userData.password" required />
        </div>
        <div>
          <label for="newPassword">New Password:</label>
          <input type="password" id="newPassword" v-model="userData.newPassword" required />
        </div>
        <div>
          <label for="confirmPassword">Confirm New Password:</label>
          <input type="password" id="confirmPassword" v-model="userData.confirmPassword" required />
        </div>
        <button type="submit">Change Password</button>
      </form>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>

      <router-link to="/login" class="back-to-login">Back to Login</router-link>
    </div>
  </div>
</template>

<script>
import authService from "@/public/services/auth.service.js";

export default {
  name: 'ChangePasswordComponent',
  data() {
    return {
      userData: {
        username: '',
        password: '',
        newPassword: '',
        confirmPassword: '',
      },
      errorMessage: null,
    };
  },
  methods: {
    handleSubmit() {
      authService
          .changePassword(this.userData)
          .then((response) => {
            // Successful password change, redirect or perform other actions
            console.log('Password changed:', response.data);
            this.$router.push('/dashboard'); // Replace with your intended route
          })
          .catch((error) => {
            this.errorMessage = error.response.data.message || 'Password change failed';
          });
    },
  },
};
</script>

<style scoped>
.change-password-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f4;
}

.change-password-form {
  background-color: #fff;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 350px; /* Adjust width as needed */
  text-align: center;
}

.change-password-form h1 {
  margin-bottom: 2rem;
  color: #333;
}

.change-password-form label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
}

.change-password-form input {
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.change-password-form button {
  background-color: #4caf50;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.change-password-form button:hover {
  background-color: #45a049;
}

.error {
  color: red;
  margin-top: 1rem;
}

.back-to-login {
  display: block;
  margin-top: 2rem;
  color: #333;
  text-decoration: none;
}

.back-to-login:hover {
  text-decoration: underline;
}

@media (max-width: 450px) {
  .change-password-form {
    width: 90%;
  }
}
</style>
