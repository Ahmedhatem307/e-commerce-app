import { createRouter, createWebHistory } from 'vue-router'
import ProductDetail from '../views/ProductDetail.vue'
import Contact from '../views/ContactUs.vue'
import Home from '../App.vue'
import ProductsPage from '../views/ProductsPage.vue'

const routes = [
  { path: '/products', component: ProductsPage },
  { path: '/product/:id', component: ProductDetail , name: 'ProductDetail'},
  { path: '/contact', component: Contact },
  {path: '/App', component: Home}
]

export default createRouter({
  history: createWebHistory(),
  routes
})