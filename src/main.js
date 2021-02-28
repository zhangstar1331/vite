import { createApp } from 'vue'
import App from './App.vue'
import router from './router'//变成了插件的形式
import store from './store'
import './styles/index.scss'
import element3 from 'plugins/element3.js'
createApp(App).use(router).use(store).use(element3).mount('#app')
