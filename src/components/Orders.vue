<style lang="css">
  a {
    color: #3b79c1;
  }
  .el-table--border td {
    border-right: none;
  }

</style>

<template>

<data-tables :data='tableData' :has-action-col='false' :pagination-def='getPaginationDef()' @row-click='rowClick'>

    <el-table-column prop="order_id" label="Order ID" fixed="left" width="auto">
        <template scope="scope">
           <router-link :to="{ name: 'order', params: { orderID: scope.row.order_id }}">#{{ scope.row.order_id }}</router-link>
        </template>
    </el-table-column>
    <!-- order date -->
    <el-table-column prop="date" label="Date" sortable="custom">
      <template scope="scope">
          {{ new Date(scope.row.date)}}
      </template>
    </el-table-column>
    <!-- fulfillmentStaus -->
    <el-table-column prop="delivery_status" label="Fulfillment Staus">
        <template scope="scope">
            <el-tag :type="scope.row.delivery_status == 'fulfilled' ? 'success' : 'danger'">{{scope.row.delivery_status}}</el-tag>
        </template>
    </el-table-column>
    <!-- payment status -->
    <el-table-column prop="payment_status" label="Payment Staus">
        <template scope="scope">
            <el-tag :type="scope.row.payment_status == 'paid' ? 'danger' : 'success'">{{scope.row.payment_status}}</el-tag>
        </template>
    </el-table-column>
    <!-- price total -->
    <el-table-column prop="total" label="Total">
      <template scope="scope">
          {{scope.row.total}}$
      </template>
    </el-table-column>
    <!-- customer id -->
    <el-table-column prop="user_id" label="User ID"></el-table-column>
    <!-- temporary order detail -->


</data-tables>

</template>

<script>

import axios from 'axios'

export default {
    name: 'Orders',

    methods: {

        handleClickEdit(id) {
                this.$router.get({ name: 'OrderDetail', params: { orderID: id }})
            },
        rowClick(row) {
                this.$message('row clicked')
                console.log('row clicked', row)
            },
            getPaginationDef() {
                return {
                    layout: 'total, prev, pager, next, jumper, sizes',
                    pageSize: 10,
                    pageSizes: [10, 20, 50],
                    //  currentPage: 2
                }
            }
    },
    data() {
        return {
            tableData: [],
            multipleSelection: [],
            input: ''
        }
    },
    mounted() {
        axios.get('http://localhost:3000/orders')
            .then((response) => {
                this.tableData = response.data;
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}

</script>
