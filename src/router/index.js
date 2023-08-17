import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import axios from 'axios'
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
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      component: handleLogout
    }
  ]
})

let isAuthenticated = () => {
  return localStorage.getItem('token')
}

router.beforeEach(async (to) => {
  if (to.name !== 'login' && !isAuthenticated()) {
    return { name: 'login' }
  }
})

async function handleLogout() {
  if (!isAuthenticated()) {
    return { name: 'login' }
  }

  try {
    await axios.post(
      `${useAmobaStore().url}/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    )
    localStorage.removeItem('token')
    this.$router.push("/login")
  } catch (error) {
    console.error(error)
  }
}

export default router
