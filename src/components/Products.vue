<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <!-- <el-table-column prop="imgTag" label="" width="100"></el-table-column> -->
    <el-table-column prop="name" label="Name" width="400"></el-table-column>
    <el-table-column prop="category" label="Category" width="120"></el-table-column>
    <el-table-column prop="brand" label="Brand" width="120"></el-table-column>
    <el-table-column prop="stockStatus" label="Stock Status" width="120"></el-table-column>
    <el-table-column prop="price" label="Price" width="120"></el-table-column>

    <el-table-column label="Operations" width="150">
      <template scope="scope">
        <el-button @click="handleClick" size="small">Edit</el-button>
        <el-button type="danger" size="small">Delete</el-button>
      </template>
    </el-table-column>

  </el-table>
</template>

<script>
export default {
  name: 'products',
  methods: {
    handleClick() {
      console.log('click');
    }
  },
  data () {
    return {
      tableData: [{
        name: 'Acer Aspire E 15 E5-575-33BM',
        category: 'Computer',
        brand: 'Acer',
        stockStatus: 'In stock',
        price: "$355",
        // imgTag: "<img src='https://images-na.ssl-images-amazon.com/images/G/01/apparel/rcxgs/tile._CB211431200_.gif'>"
      },
      {
        name: 'HP Notebook 15-ay011nr',
        category: 'Computer',
        brand: 'HP',
        stockStatus: 'Out of stock',
        price: "$549"
      },
      {
        name: 'NETGEAR Nighthawk AC1750',
        category: 'Computer',
        brand: 'NETGEAR',
        stockStatus: 'In stock',
        price: "$109"
      },
      {
        name: 'CYBERPOWERPC Gamer Xtreme VR GXiVR8020A Gaming Desktop',
        category: 'Computer',
        brand: 'CYBERPOWERPC',
        stockStatus: 'In stock',
        price: "$719"
      }

    ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
  color: #42b983;
}
</style>
