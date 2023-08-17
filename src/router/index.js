import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { useAmobaStore } from '../stores/AmobaStore'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/logout',
            name: 'logout',
            component: () => handleLogout(),
        }
    ]
})

let isAuthenticated = () => {
    return localStorage.getItem('token') !== null
}

router.beforeEach(async (to) => {
    if (to.name !== 'login' && !isAuthenticated()) {
        return { name: 'login' }
    }
})

async function handleLogout() {
    await useAmobaStore().logout()
    return LoginView
}

export default router
