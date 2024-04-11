<template>
    <div>
      <ul>
        <li v-for="file in files" :key="file.name" @click="selectFile(file)">
          {{ file.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        files: [
          { name: 'main.cpp', code: '...' },
          { name: 'awful_code.js', code: '...' },
          // ... more files
        ],
        selectedFile: null
      };
    },
    methods: {
      selectFile(file) {
        this.selectedFile = file;
        // Emit an event to the parent component or use a state management pattern
      },
    },
  };
  </script>
  