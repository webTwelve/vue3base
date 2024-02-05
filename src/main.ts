import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import pinia from '@/stores/index'
import 'normalize.css'
import '@/assets/style/base.less'
import '@/assets/icon/iconfont.css'
import '@/assets/icon/iconfont.js'
const app = createApp(App)
app.use(pinia)
app.use(router)

app.mount('#app')
