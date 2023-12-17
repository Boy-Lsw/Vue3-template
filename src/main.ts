import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/style/reset.less'
import router from '@/router/index'

const app = createApp(App)

app.use(router)

app.mount('#app')
