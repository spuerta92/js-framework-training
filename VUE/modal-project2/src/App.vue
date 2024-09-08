<template>
  <div class="app-container">
      <h1>{{message}}</h1>
      <Modal />
  </div>
</template>

<script>
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  data: () => ({
    message: 'Welcome to Your Vue.js App'
  }),
  components: {
    Modal
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color: red;
}
</style>
