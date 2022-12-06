import "./styles/styles.scss";

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

// Estilos
createApp(App)
.use(store)
.use(router)
.mount('#app')
