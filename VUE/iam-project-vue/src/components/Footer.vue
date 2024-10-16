<template>
    <div class="footer-container">
        <p>Powered by Vue.js</p>
        <p>Sebastian Puerta Hincapie © 2024</p><br />
    </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {}
  },
  methods: {},
  computed: {}
}
</script>

<style scoped>
.footer-container {
    background-image: linear-gradient(to right, black, green);
    padding: 1em;
    height: 100px;
    width: 100%;
    grid-row: 3;
    text-align: left;
    margin-top: 1em;
    color: white;
}
</style>