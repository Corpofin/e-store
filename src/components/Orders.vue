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

    <el-table-column prop="orderID" label="Order ID" sortable="custom">
        <template scope="scope">
            <router-link :to="{ name: 'order', params: { orderID: scope.row.orderID }}">#{{ scope.row.orderID }}</router-link>
        </template>
    </el-table-column>
    <el-table-column prop="date" label="Date" sortable="custom"></el-table-column>
    <el-table-column prop="fulfillmentStaus" label="Fulfillment Staus">
        <template scope="scope">
            <el-tag :type="scope.row.fulfillmentStaus == 'fulfilled' ? 'success' : 'danger'">{{scope.row.fulfillmentStaus}}</el-tag>
        </template>
    </el-table-column>
    <el-table-column prop="paymentStatus" label="Payment Staus">
        <template scope="scope">
            <el-tag :type="scope.row.paymentStatus == 'paid' ? 'danger' : 'success'">{{scope.row.paymentStatus}}</el-tag>
        </template>
    </el-table-column>
    <el-table-column prop="total" label="Total">
      <template scope="scope">
          {{scope.row.total}}$
      </template>
    </el-table-column>
    <el-table-column prop="customerID" label="Customer ID">

    </el-table-column>

</data-tables>

</template>

<script>

export default {
    name: 'Orders',
    data() {
        return {
            tableData: [{
                    orderID: '123213',
                    date: '2016-05-03',
                    fulfillmentStaus: 'fulfilled',
                    paymentStatus: 'unpaid',
                    total: '540',
                    customerID: '45645'
                }, {
                    orderID: '67567',
                    date: '2016-10-10',
                    fulfillmentStaus: 'unfulfilled',
                    paymentStatus: 'unpaid',
                    total: '540',
                    customerID: '45645'
                }, {
                    orderID: '123213',
                    date: '2016-05-03',
                    fulfillmentStaus: 'fulfilled',
                    paymentStatus: 'paid',
                    total: '540',
                    customerID: '45645'
                }, {
                    orderID: '67567',
                    date: '2016-10-10',
                    fulfillmentStaus: 'unfulfilled',
                    paymentStatus: 'unpaid',
                    total: '540',
                    customerID: '45645'
                }, {
                    orderID: '123213',
                    date: '2016-05-03',
                    fulfillmentStaus: 'fulfilled',
                    paymentStatus: 'unpaid',
                    total: '540',
                    customerID: '45645'
                }, {
                    orderID: '123213',
                    date: '2016-05-03',
                    fulfillmentStaus: 'fulfilled',
                    paymentStatus: 'unpaid',
                    total: '540',
                    customerID: '45645'
                }, {
                    orderID: '67567',
                    date: '2016-10-10',
                    fulfillmentStaus: 'unfulfilled',
                    paymentStatus: 'unpaid',
                    total: '540',
                    customerID: '45645'
                }, {
                    orderID: '123213',
                    date: '2016-05-03',
                    fulfillmentStaus: 'fulfilled',
                    paymentStatus: 'unpaid',
                    total: '540',
                    customerID: '45645'
                }, {
                    orderID: '123213',
                    date: '2016-05-03',
                    fulfillmentStaus: 'fulfilled',
                    paymentStatus: 'unpaid',
                    total: '540',
                    customerID: '45645'
                }, {
                    orderID: '123213',
                    date: '2016-05-03',
                    fulfillmentStaus: 'fulfilled',
                    paymentStatus: 'unpaid',
                    total: '540',
                    customerID: '45645'
                }, {
                    orderID: '123213',
                    date: '2016-05-03',
                    fulfillmentStaus: 'fulfilled',
                    paymentStatus: 'unpaid',
                    total: '540',
                    customerID: '45645'
                },

            ]
        }
    },
    methods: {
        // getRowActionsDef() {
        //   let self = this
        //   return [{
        //     type: 'primary',
        //     handler(row) {
        //       self.$message('Edit clicked')
        //       console.log('Edit in row clicked', row)
        //     },
        //     name: 'Edit'
        //   }, {
        //     type: 'primary',
        //     handler(row) {
        //       self.$message('RUA in row clicked')
        //       console.log('RUA in row clicked', row)
        //     },
        //     name: 'RUA'
        //   }]
        // },
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

    }
}

</script>
