<style scoped>

.el-col {
    margin-bottom: 20px;
}

h3 {
    margin: 0;
}

p.title {
    font-weight: bold;
    font-size: 18px;
}

.customer-card p {
    margin: 10px;
}

.customer-card .section {
    height: auto;
    margin-bottom: 30px;
}

div.section {
    height: 100px;
    margin-top: 10px;
}

.update button {
    float: right;
}

.total {
    margin-top: 20px;
    font-weight: bold;
}

.total p {
    float: right;
    margin-right: 40px;
    margin-top: 0;
}

</style>

<template>

<el-row :gutter="30">
    <el-col :span='14'>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h3>Order Details</h3>
            </div>

            <el-col :span="12">
                <div class="section">
                    <p class="title">Date</p>
                    <p>{{ this.order.date }}</p>
                </div>
                <div class="section">
                    <p class="title">Fulfillment</p>
                    <el-select v-model="fulfillmentValue" placeholder="Select">
                        <el-option v-for="item in fulfillmentOptions" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>



            </el-col>
            <el-col :span="12">
                <div class="section">
                    <p class="title">Order Status</p>
                    <el-select v-model="orderValue" placeholder="Select">
                        <el-option v-for="item in orderOptions" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="section">
                    <p class="title">Payment</p>
                    <el-select v-model="paymentValue" placeholder="Select">
                        <el-option v-for="item in paymentOptions" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>


            </el-col>
            <el-col :span="24">
                <div class="update">
                    <el-button type="primary" @click='update'>Update</el-button>
                </div>

            </el-col>

        </el-card>

    </el-col>
    <el-col :span='10'>
        <el-card class="customer-card">
            <div slot="header" class="clearfix">
                <h3>Customer Details</span>
            </div>

            <div class="">
                <div class="section">
                  <p class="title">Name</p>
                  <p>{{this.customer.name}}</p>
                </div>
                <div class="section">
                  <p class="title">Address</p>
                  <p>{{this.customer.address}}</p>
                </div>
                <div class="section">
                  <p class="title">Email</p>
                  <p>{{this.customer.email}}</p>
                </div>
            </div>

        </el-card>


    </el-col>

    <el-col :span='14'>
      <el-card class="customer-card">
          <div slot="header" class="clearfix">
              <h3>Items</span>
          </div>

          <div class="">
            <el-table :data="items">
              <el-table-column type="index" width="50"></el-table-column>
              <el-table-column prop="name" label="Name"></el-table-column>
              <el-table-column prop="quantity" label="Quantity" width="100"></el-table-column>
              <el-table-column prop="total" label="Total" width="100">
                <template scope='scope'>
                  ${{scope.row.total}}
                </template>
              </el-table-column>
            </el-table>

            <div class="total">
              Order Total <p>${{ this.order.total }}</p>
            </div>
          </div>
    </el-col>
</el-row>

</template>

<script>

export default {
    methods: {
        update() {
                console.log(this.orderValue);
                console.log(this.fulfillmentValue);
            },

    },
    data() {
        return {
            order: {
                orderID: '123213',
                date: '2016-05-03',
                status: 'open',
                fulfillmentStaus: 'unfulfilled',
                paymentStatus: 'unpaid',
                total: 1323,
                customerID: '45645'
            },
            customer: {
                name: 'Daniel Wright',
                email: 'daniel83@example.com',
                address: '2822 Hoffman Avenue, Flintstone, Georgia'

            },
            items: [{
                name: 'Smart Tivi LED Samsung 43 inch 4K',
                quantity: 1,
                unit_price: 528,
                total: 525
            }, {
                name: 'Neato Robotics - Botvac D3 App-Controlled Robot Vacuum - Dark gray',
                quantity: 2,
                unit_price: 399,
                total: 798
            }],
            orderOptions: [{
                value: 'open',
                label: 'Open'
            }, {
                value: 'completed',
                label: 'Completed'
            }, {
                value: 'canceled',
                label: 'Canceled'
            }],
            fulfillmentOptions: [{
                value: 'unfulfilled',
                label: 'Unfulfilled'
            }, {
                value: 'fulfilled',
                label: 'Fulfilled'
            }],
            paymentOptions: [{
                value: 'unpaid',
                label: 'Unpaid'
            }, {
                value: 'paid',
                label: 'Paid'
            }],
            orderValue: '',
            fulfillmentValue: '',
            paymentValue: ''
        }
    },
    created: function() {
        this.orderValue = this.order.status;
        this.fulfillmentValue = this.order.fulfillmentStaus;
        this.paymentValue = this.order.paymentStatus;
    }

}

</script>
