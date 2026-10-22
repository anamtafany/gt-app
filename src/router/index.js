import { createRouter, createWebHistory } from 'vue-router'
import Form from '../components/Form.vue'
import Dashboard from '../components/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/form',
      name: 'form',
      component: Form,
    },
  ],
})

export default router
