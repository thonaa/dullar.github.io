<template>
  <a href="./" title="Dullar"><img class="logo" alt="dullar logo" src="./assets/logo_animated_onebyone.svg"></a>
  <img src="./assets/dullar.png" class="hide">
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
  font-weight: 300;
}
body {
  padding: 0;
  margin: 0;
}
.hide {
  display: none;
}
.logo {
  margin: 0;
  padding:  0;
  width: 30%;
}
@media screen and (min-width: 320px) and (max-width: 750px){
  .logo{
      width: 90%;
  }
}
</style>
