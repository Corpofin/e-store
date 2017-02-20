import Vue from 'vue'
import Router from 'vue-router'
import Products from '../components/Products.vue'
import Categories from '../components/Categories.vue'
import AddProduct from '../components/AddProduct.vue'
import Hello from './Hello.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/add-product',
      name: 'AddProduct',
      component: AddProduct
    }
  ]
})
