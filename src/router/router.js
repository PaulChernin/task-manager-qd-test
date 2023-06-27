import Home from '../pages/Home/Home.vue'
import Tasks from '../pages/Tasks/Tasks.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', component: Home },
    { path: '/tasks', component: Tasks },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router