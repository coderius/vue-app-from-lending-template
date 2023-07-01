import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store';
// import $ from "jquery";

// window.$ = $

createApp(App)
    .use(store)
    .mount('#app')
