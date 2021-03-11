import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../views/tabbar/home/Home')
const Cart = () => import('../views/tabbar/cart/Cart')
const Category = () => import('../views/tabbar/category/Category')
const Profile = () => import('../views/tabbar/profile/Profile')
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },

]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
