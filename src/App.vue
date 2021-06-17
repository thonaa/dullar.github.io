<template>
  <img class="logo" alt="dullar logo" src="./assets/logo.svg">
  <Solgan/>
</template>

<script>
import Solgan from './components/Solgan.vue'

export default {
  name: 'App',
  components: {
    Solgan
  }
}
</script>

<style>
#app {
  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 24px;
  font-weight: 200;
}
body {
  padding: 0;
  margin: 0;
}
.logo {
  margin: 0;
  padding:  0;
  width: 30%;
}
</style>
