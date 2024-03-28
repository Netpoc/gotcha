import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ManageView from '@/views/ManageView.vue'
import AdminDash from '@/views/Admin_dash.vue'
import OwnerDash from '@/views/owner/Owner_dash.vue'
import TenantDash from '@/views/tenant/Tenant_dash.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/manage',
    name: 'manage',
    component: ManageView
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: AdminDash,
    meta: {requiresAuth: true}
  },
  {
    path: '/dashboard',
    name: 'Owner',
    component: OwnerDash,
    meta: {requiresAuth: true}
  },
  {
    path: '/dashboard',
    name: 'Tenant',
    component: TenantDash,
    meta: {requiresAuth: true}
  },
  {
    path: '/payment',
    name: 'payment',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PaymentsView.vue')
  },
  {
    path: '/community',
    name: 'community',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CommunityView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
