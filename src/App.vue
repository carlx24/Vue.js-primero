<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <MiCompponente></MiCompponente>
</template>

<script>
/*import HelloWorld from './components/HelloWorld.vue'*/
import MiCompponente from './components/MiCompponente.vue';


export default {
  name: 'App',
  components: {
    MiCompponente
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
