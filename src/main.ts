import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import pinia from '@/store/index'
import 'normalize.css'
import '@/assets/style/base.less'
const app = createApp(App)
app.use(pinia)
app.use(router)
app.directive('v-copy', (el: HTMLElement) => {
  console.log(el)
})
app.mount('#app')
