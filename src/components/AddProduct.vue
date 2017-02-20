<template>
  <div class="add-product">
    <el-row>
      <el-col :span="16">
        <el-card class="box-card">

          <label>Name*</label>
          <el-input placeholder="Name" size="large"></el-input>

          <el-row :gutter="30">
            <el-col :span="12">
              <label>Category</label>
              <el-input placeholder="Category" size="large"></el-input>
            </el-col>
            <el-col :span="12">
              <label>Brand</label>
              <el-input placeholder="Brand" size="large"></el-input>
            </el-col>
          </el-row>

          <el-row :gutter="30">
            <el-col :span="12">
              <label>Price*</label>
              <el-input placeholder="Price" size="large">
                <template slot="append">USD</template>
              </el-input>
            </el-col>
            <el-col :span="12">
              <label>Quanlity</label>
              <el-input-number v-model="num1" @change="handleChange" size="large" :min="1" :max="10" ></el-input-number>
            </el-col>
          </el-row>

            <el-row :gutter="30">
              <el-col :span="18">
                <label>Description</label>
                <el-input  type="textarea"  :autosize="{ minRows: 4, maxRows: 20}" placeholder="Description"></el-input>
              </el-col>
            </el-row>

            <el-row :gutter="30">
              <el-col :span="18">
                <label>Image Link</label>
                <el-input placeholder="Image URL" size="large"></el-input>
              </el-col>
              <el-col :span="6">
                <i class="el-icon-picture"></i>
              </el-col>

            </el-row>

            <el-row :gutter="30">
              <el-col :span="2" :offset="20">
                <el-button type="primary" icon="save" size="large">Save</el-button>
              </el-col>
            </el-row>

        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
      return {
        num1: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value)
      }
    }
}
</script>

<style lang="css">

/*input.el-input__inner  {
  margin-bottom: 20px;
  margin-top: 10px;
  height: 40px;
}
.el-input-group__append {
  height: 40px !important;
}*/

label {
  display: block;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
}

.el-input-number {
  display: block;
}

i {
  position: absolute;
  padding-top: 50px;
  font-size: 40px;
}

button.el-button {
  margin-top: 20px;
}





</style>
