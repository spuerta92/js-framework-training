<template>
  <div class="app-container">
      <h1>{{message}}</h1>
      <div v-if="showModal">
            <Modal v-bind:header = "header" v-bind:text="text" theme = "sale" @close="toggleModal"/>
      </div><br />
      <button @click="toggleModal">Open Modal </button>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  data: () => ({
    message: 'Welcome to Your Vue.js App',
    header: 'Sign up for the giveaway!',
    text: 'Get your ninja swag',
    showModal: false
  }),
  components: {
    Modal
  },
  methods: {
    toggleModal() {
      this.showModal =!this.showModal
    }
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
  color: black;
}
</style>
