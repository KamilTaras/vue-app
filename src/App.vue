<template>
  <div id="app">
    <top-navbar></top-navbar> <!-- Use kebab-case for HTML tags -->
    <snippet-form></snippet-form>
    <!-- Your other components will follow here -->
  </div>
</template>

<script>
import TopNavbar from './components/TopNavbar.vue';
import SnippetForm from './components/SnippetForm.vue';

export default {
  name: 'App',
  components: {
    TopNavbar, // Use PascalCase for JavaScript component registration
    SnippetForm
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
