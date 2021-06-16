<template>
  <img class="logo" alt="dullar logo" src="./assets/3@2x.png">
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
body {
  padding: 0;
  margin: 0;
}
.logo {
  margin: 0;
  padding:  0;

}
</style>
