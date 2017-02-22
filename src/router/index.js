import Vue from 'vue'
import Router from 'vue-router'
import Products from '../components/Products.vue'
import Categories from '../components/Categories.vue'
import AddProduct from '../components/AddProduct.vue'
import Orders from '../components/Orders.vue'
import OrderDetail from '../components/OrderDetail.vue'
import Hello from '../components/Hello.vue'


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
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    },
    {
      path: '/order/:orderID',
      name: 'order',
      component: OrderDetail
    }
  ]
})
