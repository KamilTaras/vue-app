<template>
    <div v-if="selectedFile">
      <pre><code>{{ selectedFile.code }}</code></pre>
      <!-- Iterate through lines of code, making each line clickable for comments -->
      <!-- Apply syntax highlighting using a third-party library -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      selectedFile: Object,
    },
  };
  </script>
  