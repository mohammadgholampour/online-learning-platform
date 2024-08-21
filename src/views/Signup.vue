<template>
    <div>
      <h1>Sign Up</h1>
      <form @submit.prevent="signup">
        <input v-model="username" placeholder="Username" />
        <input type="password" v-model="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Signup',
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      signup() {
        // Logic to sign up the user
        this.$router.push('/dashboard');
      },
    },
  };
  </script>
  