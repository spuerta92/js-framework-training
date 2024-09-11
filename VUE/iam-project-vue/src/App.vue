<template>
  <div class="app-container">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
.app-container {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  overflow: auto;
  margin: 0 auto;
  min-width: 400px;
  font-family: 'Times New Roman';
  font-size: 1rem;
}
</style>
