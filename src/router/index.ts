import { createRouter, createWebHistory } from 'vue-router'
import Products from '../views/Products.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Contact from '../views/ContactUs.vue'
import Home from '../App.vue'

const routes = [
  { path: '/products', component: Products },
  { path: '/product/:id', component: ProductDetail },
  { path: '/contact', component: Contact },
  {path: '/App', component: Home}
]

export default createRouter({
  history: createWebHistory(),
  routes
})