
<template>
  <div>

    <el-row :gutter="20">
      <!-- navigation -->
      <el-col :span="4">
        <h2>Admin</h2>
        <el-menu default-active="1" class="el-menu-vertical-demo" theme="dark" @open="handleOpen" @close="handleClose">
          <el-submenu index="1">
            <template slot="title">INVENTORY</template>
            <el-menu-item index="1-1"><router-link to="/products">Products</router-link></el-menu-item>
            <el-menu-item index="1-2"><router-link to="/add-product">Add product</router-link></el-menu-item>
            <el-menu-item index="1-3"><router-link to="/categories">Categories</router-link></el-menu-item>
            <el-menu-item index="1-4">Brands</el-menu-item>
          </el-submenu>
          <el-menu-item index="2"><router-link to="/orders">ORDERS</router-link></el-menu-item>
          <el-menu-item index="3"><router-link to="/users">CUSTOMERS</router-link></el-menu-item>
        </el-menu>
      </el-col>

      <!-- main -->
      <el-col :span="20">

        <router-view></router-view>

      </el-col>
    </el-row>
  </div>


</template>

<script>
  import axios from 'axios'

  export default {
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

.el-submenu .el-menu-item  {
  padding: 0;
}

a {
  display: block;
  /*position: relative;*/
  /*width: 300px;*/

  z-index: 2;
  color: #bfcbd9;
  /*background-color: #333;*/
  text-decoration: none;

}
a.router-link-active {
  color: #20a0ff;
}

</style>
