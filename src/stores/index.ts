import { createPinia } from 'pinia'
const pinia = createPinia()
import piniaPluginPersist from 'pinia-plugin-persist'
pinia.use(piniaPluginPersist)
export default pinia
