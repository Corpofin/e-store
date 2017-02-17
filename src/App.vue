
<template>
  <div>


    <el-row class="tac" :gutter="20">
      <el-col :span="4">
        <h5>With icons</h5>
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>Navigator One</template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item one</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2"><i class="el-icon-menu"></i>Navigator Two</el-menu-item>
          <el-menu-item index="3"><i class="el-icon-setting"></i>Navigator Three</el-menu-item>
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
  font-family: Helvetica, sans-serif;
}
</style>
