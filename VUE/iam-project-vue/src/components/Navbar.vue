<template>
    <div class="navbar-container">
      <ul class="app-navbar">
        <li class="navbar-link"><router-link to="/">Home</router-link></li>
        <li class="navbar-link"><router-link to="/views">Views</router-link></li>
        <li class="navbar-link"><router-link to="/coverletter">Cover Letter</router-link></li>
        <li class="navbar-link"><router-link to="/certifications">Certifications</router-link></li>
        <li class="navbar-link"><router-link to="/repositories">Repositories</router-link></li>
        <li class="navbar-link"><router-link to="/applications">Applications</router-link></li>
        <li class="navbar-link"><router-link to="/testing">Testing</router-link></li>
      </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
ul.app-navbar {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li.navbar-link {
  float: left;
}

li.navbar-link a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li.navbar-link a:hover {
  background-color: green;
}
</style>