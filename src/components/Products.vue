<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <!-- <el-table-column prop="imgTag" label="" width="100"></el-table-column> -->
    <el-table-column type="index" width="50"></el-table-column>
    <el-table-column width="100">
      <template scope="scope">
        <img :src="scope.row.imgURL" alt="">

     </template>
    </el-table-column>

    <el-table-column prop="name" label="Name" width="350"></el-table-column>
    <el-table-column prop="category" label="Category" width="120"></el-table-column>
    <el-table-column prop="brand" label="Brand" width="150"></el-table-column>
    <el-table-column prop="stockStatus" label="Stock Status" width="120"></el-table-column>
    <el-table-column prop="price" label="Price" width="80"></el-table-column>

    <el-table-column label="Operations" fixed="right" width="150">
      <template scope="scope">
        <el-button @click="handleClickEdit" size="small">Edit</el-button>
        <el-button @click="handleClickDelete" type="danger" size="small">Delete</el-button>
      </template>
    </el-table-column>

  </el-table>
</template>

<script>
export default {
  name: 'products',
  methods: {
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
  data () {
    return {
      tableData: [{
        name: 'Acer Aspire E 15 E5-575-33BM',
        category: 'Computers',
        brand: 'Acer',
        stockStatus: 'In stock',
        price: "$355",
        imgURL: "https://images-na.ssl-images-amazon.com/images/I/711XyKNjr6L._SL1331_.jpg"
      },
      {
        name: 'HP Notebook 15-ay011nr',
        category: 'Computers',
        brand: 'HP',
        stockStatus: 'Out of stock',
        price: "$549",
        imgURL: "https://images-na.ssl-images-amazon.com/images/I/714TSsHtZNL._SL1500_.jpg"
      },
      {
        name: 'NETGEAR Nighthawk AC1750',
        category: 'Computers',
        brand: 'NETGEAR',
        stockStatus: 'In stock',
        price: "$109",
        imgURL: "https://images-na.ssl-images-amazon.com/images/I/91-tQAAX4jL._SL1500_.jpg"
      },
      {
        name: 'CYBERPOWERPC Gamer Xtreme VR GXiVR8020A Gaming Desktop',
        category: 'Computers',
        brand: 'CYBERPOWERPC',
        stockStatus: 'In stock',
        price: "$719",
        imgURL: "https://images-na.ssl-images-amazon.com/images/I/81nmXFn%2BbDL._SL1500_.jpg"
      },
      {
        name: 'Apple 42mm Smart Watch',
        category: 'Cell Phones',
        brand: 'Apple',
        stockStatus: 'Out of stock',
        price: "$275",
        imgURL: "https://images-na.ssl-images-amazon.com/images/I/61WzbpVKIdL._SL1500_.jpg"
      },
      {
        name: 'Samsung Galaxy S7 ',
        category: 'Cell Phones',
        brand: 'Samsung',
        stockStatus: 'In stock',
        price: "$599",
        imgURL: "https://images-na.ssl-images-amazon.com/images/I/71xmfDEzOuL._SL1500_.jpg"
      },
      {
        name: 'LG Electronics 65UH8500 65-Inch 4K Smart TV',
        category: 'TV',
        brand: 'Samsung',
        stockStatus: 'In stock',
        price: "$1670",
        imgURL: "https://images-na.ssl-images-amazon.com/images/I/91P76LdcFOL._SL1500_.jpg"
      },
      {
        name: 'Apple iPhone 7 128GB',
        category: 'Cell Phones',
        brand: 'Apple',
        stockStatus: 'In stock',
        price: "$576",
        imgURL: "http://pisces.bbystatic.com/image2/BestBuy_US/images/products/5581/5581593_sd.jpg;maxHeight=1000;maxWidth=1000"
      },
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

img {
  max-width: 50px;
  max-height: 50px;
}
</style>
