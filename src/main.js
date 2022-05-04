import { createApp } from 'vue'
import * as VueRouter from "vue-router"
import App from './App.vue'

// router
import routes from "./router/routes";

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
    linkExactActiveClass: "active",
})

router.beforeEach((to, from) => {
    
    if (to.matched.length === 0) {
        return {
            path: '/404'
        }
    }
    // instead of having to check every route record with
    // to.matched.some(record => record.meta.requiresAuth)
    if (to.meta.requiresAuth && !auth.isLoggedIn()) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        return {
            path: '/login',
            // save the location we were at to come back later
            query: { redirect: to.fullPath },
        }
    }
})

const app = createApp(App)

app.use(router)

app.mount('#app')
