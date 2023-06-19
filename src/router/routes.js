import { createRouter, createWebHistory } from "vue-router";

import Home from '../pages/Home.vue'
import Dashboard from '../pages/Dashboard.vue'
import About from '../pages/About.vue'

const routes = [
    {
        path: '/',
        component: Home,
    }, {
        path: '/Dashboard',
        component: Dashboard,
        props: {
            user: {
                username: 'Dricc',
                email: 'diegoramoncc17@gmail.com'
            }
        }
    }, {
        path: '/About',
        component: About,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router