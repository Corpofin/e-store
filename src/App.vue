
<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4">
        <h2>Admin</h2>
        <el-menu default-active="1" class="el-menu-vertical-demo" theme="dark" @open="handleOpen" @close="handleClose">
          <el-submenu index="1">
            <template slot="title">INVENTORY</template>
            <el-menu-item index="1-1">Products</el-menu-item>
            <el-menu-item index="1-2">Categories</el-menu-item>
            <el-menu-item index="1-3">Brands</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">ORDERS</el-menu-item>
          <el-menu-item index="3">CUSTOMERS</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">

          <products></products>

      </el-col>
    </el-row>
  </div>


</template>

<script>
  import Products from './components/Products.vue'

  export default {
    components: {
      Products
    },
    methods: {
      handleClick() {
        console.log('click');
      },
      handleOpen() {
        console.log('open');
      },
      handleClose() {
        console.log('close');
      }
    },
    data() {
      return {
        msg: 'hello'
      }
    }

  }
</script>


<style>
body {
  font-family: Roboto, sans-serif;
}

</style>
