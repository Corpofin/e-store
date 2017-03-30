<style scoped>

h1,
h2 {
    font-weight: normal;
}

.el-row {
    margin-top: 10px;
    margin-bottom: 10px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    /*color: #42b983;*/
}

button a {
    color: #fff;
}

img {
    max-width: 50px;
    max-height: 50px;
}

</style>

<template>

<data-tables :data='tableData' :has-action-col='false' :pagination-def='getPaginationDef()' :actions-def='getActionsDef()' @selection-change="handleSelectionChange">

    <el-table-column type="selection" width="50"></el-table-column>
    <el-table-column width="80">
        <template scope="scope">
            <img :src="scope.row.imageURL" alt="">

        </template>
    </el-table-column>

    <el-table-column prop="name" label="Name" width="350"></el-table-column>
    <el-table-column prop="category" label="Category" width="120"></el-table-column>
    <el-table-column prop="brand" label="Brand" width="150"></el-table-column>
    <el-table-column prop="stockStatus" label="Stock Status" width="120"></el-table-column>
    <el-table-column prop="price" label="Price" width="80"></el-table-column>

    <el-table-column label="" fixed="right" width="120">
        <template scope="scope">
            <el-button @click="handleClickEdit(scope.row.product_id)" size="small"><i class="el-icon-edit"></i></el-button>
            <el-button @click="handleClickDelete(scope.row.product_id)" type="danger" size="small"><i class="el-icon-delete"></i></el-button>
        </template>
    </el-table-column>

</data-tables>

</template>

<script>

import axios from 'axios'

export default {
    name: 'Products',
    methods: {
        handleSelectionChange(val) {
                this.multipleSelection = val;

                // console.log(val.name);
            },
            getActionsDef() {
                let self = this
                return {
                    width: 5,
                    def: [{
                        type: 'danger',
                        name: 'delete',
                        handler() {

                            self.$confirm('This will permanently delete the product. Continue?', 'Warning', {
                                confirmButtonText: 'OK',
                                cancelButtonText: 'Cancel',
                                type: 'warning'
                            }).then(() => {

                                let data = self.tableData;
                                for (var item of self.multipleSelection) {
                                    data = data.filter((el) => {
                                        return el.id != item.id
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
            handleClickEdit(id) {
                this.$router.push({ name: 'UpdateProduct', params: { productID: id }})
            },
            handleClickDelete(id) {

                this.$confirm('This will permanently delete the product. Continue?', 'Warning', {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {
                    let self = this;

                    axios.delete('http://localhost:3000/products/' + id)
                        .then((response) => {
                            let data = self.tableData;
                            data = data.filter((el) => {
                                return el.product_id != id
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

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: 'Delete canceled'
                    });
                });
            },
            getPaginationDef() {
                return {
                    layout: 'total, prev, pager, next, jumper, sizes',
                    pageSize: 10,
                    pageSizes: [10, 20, 50],
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
        axios.get('http://localhost:3000/products')
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
