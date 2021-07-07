import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import ('../views/Authentication/Login.vue')
  },

  {
    path: '/signUp',
    component: () => import ('../views/Authentication/SignUp.vue')
  },
  {
    path: '/profile',
    component: () => import ('../views/Profile/profileIndex.vue')
  },
  {
    path: '/updateProfile',
    component: () => import ('../views/Profile/Edit/UpdateProfile.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
