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
            <img :src="scope.row.imgURL" alt="">

        </template>
    </el-table-column>

    <el-table-column prop="name" label="Name" width="350"></el-table-column>
    <el-table-column prop="category" label="Category" width="120"></el-table-column>
    <el-table-column prop="brand" label="Brand" width="150"></el-table-column>
    <el-table-column prop="stockStatus" label="Stock Status" width="120"></el-table-column>
    <el-table-column prop="price" label="Price" width="80"></el-table-column>

    <el-table-column label="" fixed="right" width="120">
        <template scope="scope">
            <el-button @click="handleClickEdit" size="small"><i class="el-icon-edit"></i></el-button>
            <el-button @click="handleClickDelete" type="danger" size="small"><i class="el-icon-delete"></i></el-button>
        </template>
    </el-table-column>

</data-tables>

</template>

<script>

import axios from 'axios'

export default {
    name: 'Products',
    methods: {
        handleSearchClick(ev) {
                let data = this.tableData;
                let keyword = this.input;
                data = data.filter((item) => {
                    console.log(item.name);
                    console.log(item.name.search(keyword.toLowerCase()));
                    return item.name.toLowerCase().indexOf(keyword.toLowerCase()) >= 0;
                })


                // console.log(keyword)
                this.tableData = data;
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;

                // console.log(val.name);
            },
            handleClickEdit() {
                console.log('click');
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
            handleClickDelete() {
                this.$confirm('This will permanently delete the product. Continue?', 'Warning', {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: 'Delete completed'
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
