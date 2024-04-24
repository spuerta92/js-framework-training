<template>
  <div>
    <h1> {{title}}</h1>
    <!-- <input type="text" ref="name">
    <button @click="handleClick">click me</button> -->
    <div v-if="showModal">
      <Modal message="Welcome to my application!" :text="text" type="alert" @closemodal="toggleModal"/>
    </div>
    <button @click="toggleModal">open modal</button>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: "My First Vue 3 App :)",
      text: "Some other text",
      showModal: false
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal;
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
</style>
