import {createApp} from 'vue';
import Helmet from './components/Helmet/Helmet.js';
import App from './App.vue';
import './index.css';

Helmet();
createApp(App).mount('#app');
