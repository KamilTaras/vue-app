<template>
    <div>
      <div v-for="(comment, index) in comments" :key="index">
        <p>{{ comment.text }} - {{ comment.author }}</p>
      </div>
      <input type="text" v-model="newComment" />
      <button @click="postComment">Post Comment</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        comments: [],
        newComment: ''
      };
    },
    methods: {
      postComment() {
        this.comments.push({ text: this.newComment, author: 'Author Name' });
        this.newComment = ''; // Reset the input field
      },
    },
  };
  </script>
  