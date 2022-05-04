import * as VueRouter from "vue-router"
import routes from "./routes";



const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
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

    var authUser = localStorage.getItem("auth")
    authUser = JSON.parse(authUser)
    var isLoggedIn = localStorage.getItem("isLoggedIn")
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
    } else if (to.meta.guest) {
        // if logged in and the login page is visited, go to home page
        if (isLoggedIn && authUser) {
            console.log("dang it");
            return {
                path: '/home',
            }
        } 
    }
})


export default router