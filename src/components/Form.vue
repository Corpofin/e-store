<template>
  <el-row>
    <el-col :span="14">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <!-- <el-form-item> -->
          <!-- <el-col :span="12"> -->
            <el-form-item label="Category">
              <el-input v-model="form.category"></el-input>
            </el-form-item>
          <!-- </el-col> -->
          <!-- <el-col :span="12"> -->
            <el-form-item label="Brand">
              <el-input v-model="form.brand"></el-input>
            </el-form-item>
          <!-- </el-col> -->
        <!-- </el-form-item> -->

        <el-form-item label="Price">
          <el-input v-model="form.price">
            <template slot="append">USD</template>
          </el-input>
        </el-form-item>

        <el-form-item label="Quantity">
          <el-input-number v-model="form.quantity" @change="handleChange" size="large" :min="1" ></el-input-number>
        </el-form-item>


        <el-form-item label="Description">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>

      </el-form>
    </el-col>
  </el-row>

</template>


<script>
  export default {
    name: 'Form',
    data() {
      return {
        form: {
          name: '',
          category: '',
          brand: '',
          price: '',
          quantity: 0,
          desc: ''
        }
      }
    },
    methods: {
      handleChange() {

      },
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
