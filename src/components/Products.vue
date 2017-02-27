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

<div class="">
    <el-row :gutter="30">
        <el-col :span="2">
            <el-button type="danger" @click="handleClickMultiDelete">
                <i class="el-icon-delete el-icon-right"></i>
            </el-button>
        </el-col>
        <el-col :span="14">
            <el-input placeholder="Search products" icon="search" v-model="input" :on-icon-click="handleSearchClick"></el-input>
        </el-col>
        <el-col :span="4" :offset="4">
            <el-button type="primary">
                <router-link to="/add-product">Add new product <i class="el-icon-plus el-icon-right"></i></router-link>
            </el-button>

        </el-col>
    </el-row>
    <el-row>
        <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
            <!-- <el-table-column prop="imgTag" label="" width="100"></el-table-column> -->
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

        </el-table>
    </el-row>
</div>

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
            handleClickMultiDelete() {
                console.log("delete hihi");
                this.$confirm('This will permanently delete the product. Continue?', 'Warning', {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {

                    let data = this.tableData;
                    for (var item of this.multipleSelection) {
                        data = data.filter((el) => {
                            return el.id != item.id
                        })
                    }
                    this.tableData = data;

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
            handleClickEdit() {
                console.log('click');
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
