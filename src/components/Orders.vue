<template>
  <data-tables :data='tableData'
    :has-action-col='false'
    @row-click='rowClick'>
    <el-table-column
      prop="orderID"
      label="Order ID"
      sortable="custom">
    </el-table-column>
    <el-table-column
      prop="status"
      label="Status">
    </el-table-column>
  </data-tables>
</template>

<script>

export default {
  name: 'Orders',
  data () {
    return {
      tableData: [
        {
          orderID: '3423424',
          status: 'dfsdf'
        },
        {
          orderID: '565464',
          status: 'xcvxv'
        },
        {
          orderID: '3423424',
          status: 'dfsdf'
        },
        {
          orderID: '565464',
          status: 'xcvxv'
        },
        {
          orderID: '3423424',
          status: 'dfsdf'
        },
        {
          orderID: '565464',
          status: 'xcvxv'
        },
        {
          orderID: '3423424',
          status: 'dfsdf'
        },
        {
          orderID: '565464',
          status: 'xcvxv'
        },
        {
          orderID: '3423424',
          status: 'dfsdf'
        },
        {
          orderID: '565464',
          status: 'xcvxv'
        },
        {
          orderID: '3423424',
          status: 'dfsdf'
        },
        {
          orderID: '565464',
          status: 'xcvxv'
        },{
          orderID: '3423424',
          status: 'dfsdf'
        },
        {
          orderID: '565464',
          status: 'xcvxv'
        },
        {
          orderID: '3423424',
          status: 'dfsdf'
        },
        {
          orderID: '565464',
          status: 'xcvxv'
        },
        {
          orderID: '3423424',
          status: 'dfsdf'
        },
        {
          orderID: '565464',
          status: 'xcvxv'
        },
        {
          orderID: '3423424',
          status: 'dfsdf'
        },
        {
          orderID: '565464',
          status: 'xcvxv'
        },
        {
          orderID: '3423424',
          status: 'qqqqq'
        },
        {
          orderID: '565464',
          status: 'xcvxv'
        },
      ]
    }
  },
  methods: {
    getRowActionsDef() {
      let self = this
      return [{
        type: 'primary',
        handler(row) {
          self.$message('Edit clicked')
          console.log('Edit in row clicked', row)
        },
        name: 'Edit'
      }, {
        type: 'primary',
        handler(row) {
          self.$message('RUA in row clicked')
          console.log('RUA in row clicked', row)
        },
        name: 'RUA'
      }]
    },
    rowClick(row) {
     this.$message('row clicked')
     console.log('row clicked', row)
   },

  }
}
</script>

<style lang="css">
</style>
