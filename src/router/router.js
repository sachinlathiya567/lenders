import * as VueRouter from "vue-router"
import routes from "./routes";



const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
    linkExactActiveClass: "active",
})

// router middleware
router.beforeEach((to, from) => {

    // redirect to 404 if page is not found
    if (to.matched.length === 0) {
        return {
            path: '/404'
        }
    }

    let authUser = localStorage.getItem("auth")
    authUser = JSON.parse(authUser)
    let isLoggedIn = localStorage.getItem("isLoggedIn")
    isLoggedIn = JSON.parse(isLoggedIn)
    // instead of having to check every route record with
    // to.matched.some(record => record.meta.requiresAuth)
    if (to.meta.requiresAuth && !isLoggedIn && !authUser) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        return {
            path: '/login',
            // save the location we were at to come back later
            query: { redirect: to.fullPath },
        }
    }
})


export default router