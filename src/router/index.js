import { createRouter, createWebHistory } from 'vue-router'
import Form from '../components/Form.vue'
import Dashboard from '../components/Dashboard.vue'
import GuruTugas from '../components/GuruTugas.vue'
import Pjgt from '@/components/Pjgt.vue'
import Laporan from '@/components/Laporan.vue'
import Surat from '@/components/Surat.vue'
import Rekap from '@/components/Rekap.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      name: 'dashboard',
      component: Dashboard,
    },
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
    {
      path: '/gt',
      name: 'guru-tugas',
      component: GuruTugas,
    },
    {
      path: '/pjgt',
      name: 'pjgt',
      component: Pjgt,
    },
    {
      path: '/laporan',
      name: 'laporan',
      component: Laporan,
    },
    {
      path: '/surat',
      name: 'surat',
      component: Surat,
    },
    {
      path: '/rekap',
      name: 'rekap',
      component: Rekap,
    },
  ],
})

export default router
