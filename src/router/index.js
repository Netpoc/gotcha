import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ManageView from '@/views/ManageView.vue'
import AdminDash from '@/views/Admin_dash.vue'
import OwnerDash from '@/views/owner/Owner_dash.vue'
import AccountView from '@/views/owner/Account_View.vue'

// Tenant Routes
import TenantDash from '@/views/tenant/Tenant_dash.vue'
import TenantCommunity from '@/views/tenant/Tenant_Community.vue'
import TenantProfile from '@/views/tenant/Tenant_Profile.vue'
import TenantPayment from '@/views/tenant/Tenant_Payments.vue'
import Tenant_Chat from '@/views/tenant/Tenant_Chat.vue'

// Owner Routes
import OwnerCommunity from '@/views/owner/Owner_Community'
import OwnerProfile from '@/views/owner/Owner_Profile'
import ManageTenant from '@/views/owner/Manage_Tenant'
import OwnerChat from '@/views/owner/Owner_Chat.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/account_view',
    name: 'account',
    component: AccountView
  },
  {
    path: '/manage',
    name: 'manage',
    component: ManageView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: AdminDash,
    meta: {requiresAuth: true}
  },
  {
    path: '/owner_dashboard',
    name: 'owner',
    component: OwnerDash,
    meta: {requiresAuth: true}
  },
  {
    path: '/owner_community',
    name: 'OwnerCommunity',
    component: OwnerCommunity,
    meta: {requiresAuth: true}
  },
  {
    path: '/owner_profile',
    name: 'OwnerProfile',
    component: OwnerProfile,
    meta: {requiresAuth: true}
  },
  {
    path: '/owner_chat',
    name: 'OwnerChat',
    component: OwnerChat,
    meta: {requiresAuth: true}
  },
  {
    path: '/manage_tenant',
    name: 'ManageTenant',
    component: ManageTenant,
    meta: {requiresAuth: true}
  },
  {
    path: '/tenant_dashboard',
    name: 'tenant',
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
  },
  {
    path: '/tenant_community',
    name: 'tenant_community',
    component: TenantCommunity
  },
  {
    path: '/tenant_chat',
    name: 'tenant_chat',
    component: Tenant_Chat
  },
  {
    path: '/tenant_profile',
    name: 'tenant_profile',
    component: TenantProfile
  },
  {
    path: '/tenant_payment',
    name: 'tenant_payment',
    component: TenantPayment
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
