import { createApp } from 'vue'
import  * as VueRouter from "vue-router"
import App from './App.vue'

// router
import routes from "./router/routes";

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')
