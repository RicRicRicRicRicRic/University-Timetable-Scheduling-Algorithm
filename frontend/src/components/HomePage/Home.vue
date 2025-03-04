<!-- Home.vue -->
<script>
export default {
  name: 'Home',
  mounted() {
    document.title = 'Home Page'; // Dynamically set the title
  }
};
</script>

<template>
  <div>
    <h1>Welcome to the Home Page!</h1>
  </div>
  <router-link to="/login">
      <button>Go to Login</button>
  </router-link>
</template>

<style scoped>

</style>
