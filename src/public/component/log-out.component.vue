<template>
  <button @click="logout">Logout</button>
</template>

<script>


import authService from "@/public/services/auth.service.js";

export default {
  name: 'LogoutComponent',
  methods: {
    logout() {
      authService.logout();
      this.$router.push('/login'); // Redirect to login
    },
  },
};
</script>
