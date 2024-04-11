import { createRouter, createWebHistory } from 'vue-router';
import SnippetForm from '../components/SnippetForm.vue';
import SnippetDisplayComponent from '../components/SnippetDisplayComponent.vue'; // updated import
import CommentSection from '../components/CommentSection.vue'; // updated import

const routes = [
    {
        path: '/',
        name: 'Home',
        component: SnippetForm
      },
      {
        path: '/snippet/:id', // assuming you use a unique id to identify snippets
        name: 'Snippet',
        components: {
          default: SnippetDisplayComponent,
          comments: CommentSection
        }
      },
  // ... other routes as needed
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
