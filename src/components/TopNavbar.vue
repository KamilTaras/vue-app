<template>
    <nav class="navbar">
      <div class="navbar-brand">SnippetSavvy</div>
      <div class="navbar-menu">
        <input type="search" placeholder="Search for snippets" />
        <button>Login</button>
        <button>Get started free</button>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'TopNavbar', // Changed to be multi-word as per ESLint rule
    // Any additional script logic or data can go here
  };
  </script>
  
  
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    color: white;
  }
  
  .navbar-brand {
    font-weight: bold;
    font-size: 1.5rem;
  }
  
  .navbar-menu {
    display: flex;
    gap: 1rem;
  }
  
  .navbar-menu input {
    padding: 0.5rem;
  }
  
  .navbar-menu button {
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  
  /* Additional styles can be added to match your design requirements */
  </style>
  