<template>
  <div class="app-container">
    <Header />
    <Navbar />
    <!-- <Home /> -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Home,
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

.certification-container, .repositories-container, .views-container, .cover-letter-container {
  margin: 2em;
  padding: 1em;
}

.certification-links, .certificate-links, .github-repos, .gitlab-repos, .view-links {
  display: flex;
  flex-direction: column;
  width: 45%
}

.hcertification-link, .certificate-link, .github-link, .gitlab-link, .view-link {
  text-decoration: none;
  background-color: rgb(39, 210, 39);
  border-radius: 8px;
  color: black;
  padding: 0.50em;
  margin: 0.5em;
  text-align: center;
  font-weight: bold;
}

.hcertification-link:hover, .certificate-link:hover, .github-link:hover, .gitlab-link:hover, .view-link:hover {
  background-color: coral;
}

p.heading, p.section-name {
  font-size: 1.5rem;
  font-weight: bolder;
}

div.header {
    text-align: center;
}

.header-name {
    font-size: 2em;
    font-weight: bold;
}
</style>
