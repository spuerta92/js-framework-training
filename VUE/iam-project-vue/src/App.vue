<template>
  <div class="app-container">
    <Header />
    <Navbar />
    <Home />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Navbar,
    Home
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
