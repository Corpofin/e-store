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
                    <p>{{ new Date(order.date) }}</p>
                </div>
                <div class="section">
                    <p class="title">Fulfillment</p>
                    <el-select v-model="order.delivery_status" placeholder="Select">
                        <el-option v-for="item in fulfillmentOptions" :label="item.label" :value="item.value">
                          </el-option>
                    </el-select>
                </div>



            </el-col>
            <el-col :span="12">
                <div class="section">
                    <p class="title">Order Status</p>
                    <el-select v-model="order.state" placeholder="Select">
                        <el-option v-for="item in orderOptions" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="section">
                    <p class="title">Payment</p>
                    <el-select v-model="order.payment_status" placeholder="Select">
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
                <h3>Customer Details</h3>
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
                <div class="section">
                    <p class="title">Telephone</p>
                    <p>{{this.customer.telephone}}</p>
                </div>
            </div>

        </el-card>


    </el-col>

    <el-col :span='14'>
        <el-card class="customer-card">
            <div slot="header" class="clearfix">
                <h3>Items</h3>
            </div>

            <div class="">
                <el-table :data="items">
                    <el-table-column type="index" width="50"></el-table-column>
                    <el-table-column prop="name" label="Name"></el-table-column>
                    <el-table-column prop="quantity" label="Quantity" width="100"></el-table-column>
                    <el-table-column prop="total" label="Total" width="100">
                        <template scope='scope'>
                            ${{scope.row.price}}
                        </template>
                    </el-table-column>
                </el-table>

                <div class="total">
                    Order Total
                    <p>${{ this.order.total }}</p>
                </div>
            </div>
        </el-card>
    </el-col>
</el-row>

</template>

<script>

import axios from 'axios';

export default {
    methods: {
        update() {

          axios.post('http://localhost:3000/orders/' + this.$route.params.orderID, {
            	"state": this.order.state,
            	"delivery_status": this.order.delivery_status,
            	"payment_status": this.order.payment_status
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          })

        },

    },
    data() {
        return {
            order: {},
            customer: {},
            items: [],
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
    mounted() {
        var self = this;
        axios.get('http://localhost:3000/orders/' + this.$route.params.orderID)
            .then((response) => {

                this.order = response.data;
                this.customer = this.order.customer_detail

                let items = this.order.items;

                for (let item of items) {
                    axios.get('http://localhost:3000/products/' + item.product_id)
                        .then((response) => {
                            let product = response.data;
                            item.name = product.name;
                            item.price = product.price;
                            this.items.push(item);
                        })
                        .catch(function(error) {
                            console.log(error);

                            self.$message({
                                type: 'error',
                                message: 'This product has been removed'
                            });
                        });
                }

            })
            .catch(function(error) {
                console.log(error);

                self.$message({
                    type: 'error',
                    message: error
                });
            });


    },

}

</script>
