import "./styles/styles.scss";

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

// Estilos
createApp(App).use(router).mount('#app')
