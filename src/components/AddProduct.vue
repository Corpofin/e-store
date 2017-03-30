<style scoped>

h3 {
    /*margin-left: 100px;*/
    /*display: block;*/
    width: 150px;
    margin: 20px auto;
}

</style>

<template>

<el-row>

    <el-col :span="10">

        <h3>Add new product</h3>

        <el-form ref="form" :rules="rules" :model="form" label-width="120px">
            <el-form-item label="Name" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <!-- <el-form-item> -->
            <!-- <el-col :span="12"> -->
            <el-form-item label="Category" prop="category">
                <el-input v-model="form.category"></el-input>
            </el-form-item>
            <!-- </el-col> -->
            <!-- <el-col :span="12"> -->
            <el-form-item label="Brand" prop="brand">
                <el-input v-model="form.brand"></el-input>
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
                <el-button type="primary" @click="onSubmit('form')">Create</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>

        </el-form>
    </el-col>
</el-row>

</template>

<script>

import axios from 'axios'
const ObjectId = (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)) =>
    s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h))


export default {
    name: 'AddProduct',
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
    methods: {

        onSubmit(formName) {

          this.$refs[formName].validate((valid) => {
              if (valid) {
                  console.log(this.form);
                  var form = this.form;
                  form.product_id = ObjectId()

                  axios.post('http://localhost:3000/products', form)
                      .then(function(response) {
                          console.log(response);
                      })
                      .catch(function(error) {
                          console.log(error);
                      });
                  this.$message({
                      type: 'success',
                      message: 'Add product completed'
                  });

                  this.form = {}
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
