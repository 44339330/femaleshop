import {createApp} from 'vue'
// import { VueLoaderPlugin } from 'vue-loader'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './common/utils/bus'
const app = createApp(App)
app.config.globalProperties.bus = Bus
app.use(store).use(router).mount('#app')