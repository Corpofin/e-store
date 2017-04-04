<style scoped>

h3 {

    width: 150px;
    margin: 20px auto;
}

</style>

<template>

<el-row>

    <el-col :span="10">

          <h3>Update product  {{$route.params.productID}}</h3>

        <el-form ref="form" :rules="rules" :model="form" label-width="120px">
            <el-form-item label="Name" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <!-- <el-form-item> -->
            <!-- <el-col :span="12"> -->
            <el-form-item label="Category" prop="category">
              <el-select v-model="form.category"
                filterable
                allow-create
                placeholder="Choose a category">
                <el-option
                  v-for="item in categories" :label="item" :value="item">
                </el-option>
              </el-select>
            </el-form-item>
            <!-- </el-col> -->
            <!-- <el-col :span="12"> -->
            <el-form-item label="Brand" prop="brand">
              <el-select
                v-model="form.brand"
                filterable
                allow-create
                placeholder="Choose a brand">
                <el-option
                  v-for="item in brands"
                  :label="item"
                  :value="item">
                </el-option>
              </el-select>
            </el-form-item>
            <!-- </el-col> -->
            <!-- </el-form-item> -->

            <el-form-item label="Price" prop="price">
                <el-input type="price" v-model.number="form.price">
                    <template slot="append">USD</template>
                </el-input>
            </el-form-item>

            <el-form-item label="Quantity" prop="quantity">
                <el-input-number v-model.number="form.quantity" size="large" :min="0"></el-input-number>
            </el-form-item>


            <el-form-item label="Description">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>

            <el-form-item label="Image URL">
                <el-input v-model="form.imageURL"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit('form')">Update</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>

        </el-form>
    </el-col>
</el-row>

</template>

<script>

import axios from 'axios'



export default {
    name: 'UpdateProduct',
    data() {
        return {
            form: {
                name: '',
                category: '',
                brand: '',
                price: '',
                quantity: '',
                desc: '',
                imageURL: ''
            },
            categories: ['Computers', 'Cell Phones', 'TV', 'Audio', 'Cameras'],
            brands: ['Apple', 'Samsung', 'LG', 'Sony', 'Asus', 'Dell', 'Canon', 'Lenovo', 'HP'],
            rules: {
                name: [{
                    required: true,
                    message: 'Please input product name',
                    trigger: 'blur'
                }],
                category: [{
                    required: true,
                    message: 'Please input product category',
                    trigger: 'blur'
                }],
                brand: [{
                    required: true,
                    message: 'Please input product brand',
                    trigger: 'blur'
                }],
                price: [{
                    required: true,
                    message: 'Please input product price'
                }, {
                    type: 'number',
                    message: 'price must be a number'
                }],
                quantity: [{
                    required: true,
                    message: 'Please input product quantity'
                }, {
                    type: 'number',
                    message: 'quanlity must be a number'
                }]
            }
        }
    },

    mounted() {
        var self = this;
        axios.get('http://localhost:3000/products/' + this.$route.params.productID)
            .then((response) => {
                this.form = response.data;
                // console.log(response);
            })
            .catch(function(error) {
                console.log(error);

                self.$message({
                    type: 'error',
                    message: 'This product has been removed'
                });
            });
    },
    methods: {

        onSubmit(formName) {
          this.$refs[formName].validate((valid) => {
              if (valid) {
                  var form = this.form;
                  var self = this;

                  delete form._id;
                  form = JSON.stringify(form)

                  axios.put('http://localhost:3000/products/' + this.$route.params.productID, JSON.parse(form))
                      .then(function(response) {

                          console.log(response);
                          self.$message({
                              type: 'success',
                              message: 'Update product completed'
                          });
                      })
                      .catch(function(error) {
                          console.log(error);
                      });


              } else {
                  console.log('error submit!!');
                  return false;
              }
          });

        },
        handleChange() {

          },
    }
}

</script>
