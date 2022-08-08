import { createApp } from 'vue';
import 'element-plus/dist/index.css';
import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-persistedstate-plugin';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.use(createPinia().use(createPersistedState()));
app.mount('#app');
