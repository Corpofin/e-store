<template>
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
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column fixed prop="date" label="Date" width="150"></el-table-column>
        <el-table-column prop="name" label="Name" width="120"></el-table-column>
        <el-table-column prop="state" label="State" width="120"></el-table-column>
        <el-table-column prop="city" label="City" width="120"></el-table-column>
        <el-table-column prop="address" label="Address" width="300"></el-table-column>
        <el-table-column prop="zip" label="Zip" width="120"></el-table-column>
        
        <el-table-column fixed="right" label="Operations" width="120">
          <template scope="scope">
            <el-button @click="handleClick" type="text" size="small">Detail</el-button>
            <el-button type="text" size="small">Edit</el-button>
          </template>
        </el-table-column>

      </el-table>
    </el-col>
  </el-row>
  
</template>

<script>
  export default {
    methods: {
      handleClick() {
        console.log('click');
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }]
      }
    }
  }
</script>


<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
