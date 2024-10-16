<template>
  <div class="header-container"></div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {}
  },
  methods: {},
  computed: {}
}
</script>

<style scoped>
.header-container {
    background-image: linear-gradient(to right, green, white);
    height: 100px;
    width: 100%;
    grid-row: 1;
    text-align: left;
    margin-bottom: 1em;
}
</style>