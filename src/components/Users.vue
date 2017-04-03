<style>

.actions .el-button--primary {
    color: #fff;
    background-color: #ff4949;
    border-color: #ff4949;
}

</style>

<template>

<data-tables :data='tableData'  :has-action-col='false' :pagination-def='getPaginationDef()' :actions-def='getActionsDef()' @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="50"></el-table-column>
    <el-table-column prop="name" label="Name" sortable="custom"></el-table-column>
    <el-table-column prop="email" label="Email" sortable="custom"></el-table-column>
    <el-table-column prop="registerd_since" label="Registerd Since" sortable="custom"></el-table-column>
    <el-table-column label="" fixed="right" width="120">
        <template scope="scope">
            <el-button @click="handleClickEdit" size="small"><a href="/sdfsd"><i class="el-icon-edit"></i></a></el-button>
            <el-button @click="handleClickDelete(scope.row.user_id)" type="danger" size="small"><i class="el-icon-delete"></i></el-button>
        </template>
        </el-table-column>
</data-tables>

</template>

<script>
import axios from 'axios'

export default {
    name: 'Orders',
    data() {
        return {
            tableData: [],
            multipleSelection: []
        }
    },
    mounted() {
        axios.get('http://localhost:3000/users')
            .then((response) => {

              console.log(response.data);
                this.tableData = response.data;
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    methods: {
            handleClickEdit() {

            },
            handleClickDelete(id) {
              var self = this
              axios.delete('http://localhost:3000/users/' + id)
                  .then((response) => {
                      let data = self.tableData;
                      data = data.filter((el) => {
                          return el.user_id != id
                      })
                      self.tableData = data;


                      self.$message({
                          type: 'success',
                          message: 'Delete completed'
                      });
                  })
                  .catch(function(error) {
                      console.log(error);
                  });


            },
            handleSelectionChange(val) {
                this.multipleSelection = val;

                console.log(val.name);
            },
            getActionsDef() {
                let self = this
                return {
                    width: 5,
                    def: [{
                        type: 'danger',
                        name: 'delete',
                        handler() {

                            console.log("delete hihi");
                            self.$confirm('This will permanently delete the users. Continue?', 'Warning', {
                                confirmButtonText: 'OK',
                                cancelButtonText: 'Cancel',
                                type: 'warning'
                            }).then(() => {

                                let data = self.tableData;
                                for (var item of self.multipleSelection) {
                                    data = data.filter((el) => {
                                        return el.userID != item.userID
                                    })
                                }
                                self.tableData = data;

                                self.$message({
                                    type: 'success',
                                    message: 'Delete completed'
                                });
                            }).catch(() => {
                                self.$message({
                                    type: 'info',
                                    message: 'Delete canceled'
                                });
                            });

                        },
                        icon: 'delete'
                    }]
                }
            },



            // getRowActionsDef() {
            //     let self = this
            //     return [{
            //         type: 'primary',
            //         handler(row) {
            //             self.$message('Edit clicked')
            //             console.log('Edit in row clicked', row)
            //         },
            //         name: 'Edit'
            //     }, {
            //         type: 'danger',
            //         handler(row) {
            //             self.$message('Delete in row clicked')
            //             console.log('Delete in row clicked', row)
            //         },
            //         name: 'Delete'
            //     }]
            // },

            getPaginationDef() {
                return {
                    layout: 'total, prev, pager, next, jumper, sizes',
                    pageSize: 10,
                    pageSizes: [10, 20, 50],
                }
            }

    }
}

</script>
