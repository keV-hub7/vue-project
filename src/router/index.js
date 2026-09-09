import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Homeview.vue'
import AboutView from '../views/Aboutview.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
  ],
})

export default router