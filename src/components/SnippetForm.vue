<template>
  <div class="snippet-form">
    <h2>Share Your Snippet</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="snippetTitle">Snippet Title</label>
        <input type="text" id="snippetTitle" v-model="snippet.title" required>
      </div>

      <div class="form-group">
        <label for="snippetCode">Snippet Code</label>
        <textarea id="snippetCode" v-model="snippet.code" required></textarea>
      </div>

      <div class="form-group">
        <label for="snippetLanguages">Languages and Technologies</label>
        <input type="text" id="snippetLanguages" v-model="snippet.languages">
      </div>

      <div class="form-group">
        <label for="snippetPrivate">Private Snippet</label>
        <input type="checkbox" id="snippetPrivate" v-model="snippet.isPrivate">
      </div>

      <button type="submit">Post It</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      snippet: {
        title: '',
        code: '',
        languages: '',
        isPrivate: false,
      },
    };
  },
  methods: {
    submitForm() {
      // Handle the form submission logic here
      // For example, sending the snippet data to a backend service
      console.log('Form submitted', this.snippet);
      // After submitting the form, clear the form fields
      this.snippet = {
        title: '',
        code: '',
        languages: '',
        isPrivate: false,
      };
    },
  },
};
</script>

<style scoped>
.snippet-form {
  max-width: 600px;
  margin: auto;
  padding: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: .5rem;
}

.form-group input[type="text"],
.form-group textarea {
  width: 100%;
  padding: .5rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid #ccc;
}

.form-group textarea {
  height: 150px;
}

button {
  padding: .5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: .25rem;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
