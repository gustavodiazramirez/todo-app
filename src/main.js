// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css'; // Importa el estilo de Bootstrap

const app = createApp(App);

// Establece el color de fondo en el body
document.body.style.backgroundColor = 'black'; // Puedes ajustar el color según tus preferencias

app.use(router).mount('#app');
