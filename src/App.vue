<template>
  <div id="app">
    <top-navbar></top-navbar>
    <router-view></router-view> <!-- This will display components based on the route -->
  </div>
</template>

<script>
import TopNavbar from './components/TopNavbar.vue';

export default {
  name: 'App',
  components: {
    TopNavbar
  }
};
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
