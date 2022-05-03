import Login from "../pages/login.vue";
import Transactions from "../pages/transactions.vue";
import Dashboard from "../pages/dashboard.vue";
import NewTransaction from "../pages/new-transaction.vue";
import Home from "../Home.vue";


const routes = [
   
    {
        name: "Login",
        path: "/login",
        component: Login
    },

    {
        name: "Home",
        path: "/home/",
        component: Home,
        children: [

            {
                name: "Dashboard",
                path: "dashboard",
                component: Dashboard
            },
            {
                path: "",
                redirect: { name: "Dashboard" }
            },
            {
                name: "Transactions",
                path: "transactions",
                component: Transactions
            },
            {
                name: "NewTransaction",
                path: "new-transaction",
                component: NewTransaction
            },
        ]
    },
]

export default routes