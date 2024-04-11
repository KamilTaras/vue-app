import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // make sure the path is correct to your router index file

const app = createApp(App);
app.use(router);
app.mount('#app');
