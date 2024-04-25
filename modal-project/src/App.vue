<template>
  <div>
    <h1> {{title}}</h1>
    <!-- <input type="text" ref="name">
    <button @click="handleClick">click me</button> -->
    <div v-if="showModal">
      <Modal message="Welcome to my application!" :text="text" type="alert" @closemodal="toggleModal">
        <p>Get the best deals here</p>
        <template v-slot:links>
          <ul>
            <li><a href="#">sign up</a></li>
            <li><a href="#">log in</a></li>
          </ul>
        </template>
      </Modal>
    </div>
    <button @click="toggleModal">open modal</button>
    <teleport to='#textblock'>
      <h3> teleport text </h3>
    </teleport>
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
ul {
  list-style-type: none;
}
</style>
