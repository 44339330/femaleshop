import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
createApp(App).use(store).use(router).mount('#app')
// if (process.env.NODE_ENV == 'development') {
//   Vue.config.devtools = true;
// } else {
//   Vue.config.devtools = false;
// }
// Vue.config.productionTip = false