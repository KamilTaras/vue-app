<template>
    <div>
      <code-display :code="selectedFile.code"></code-display>
      <comment-section></comment-section>
    </div>
  </template>
  
  <script>
  import CodeDisplay from './CodeDisplay.vue';
  import CommentSection from './CommentSection.vue';
  
  export default {
    components: {
      CodeDisplay,
      CommentSection
    },
    props: {
      selectedFile: Object, // Make sure you pass this prop from parent component
    },
  };
  </script>
  