<template>
    <div class="code-display">
      <div v-for="(line, index) in lines" :key="index" class="code-line">
        <pre><code>{{ line }}</code></pre>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      code: String,
    },
    computed: {
      lines() {
        // Split the code by new line to create an array of lines
        return this.code.split('\n');
      },
    },
  };
  </script>
  
  <style scoped>
  .code-display {
    background-color: #f5f5f5;
    padding: 1rem;
    border-radius: 5px;
    margin-top: 1rem;
  }
  
  .code-line {
    white-space: pre-wrap; /* Since <pre> is used, this preserves whitespace and formatting */
  }
  </style>
  