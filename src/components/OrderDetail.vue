<style scoped>

h3 {
  margin: 0;
}

p.title {
    font-weight: bold;
    font-size: 18px;
}

div.section {
    height: 100px;
    margin-top: 20px;
}

.update {
    height: 100%;
}

.update button {
    float: right;
    margin-bottom: 20px;
}

</style>

<template>

<el-row :gutter="30">
    <el-col :span='14'>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h3>Details</h3>
            </div>

            <el-col :span="12">
                <div class="section">
                    <p class="title">Date</p>
                    <p>{{ this.order.date }}</p>
                </div>
                <div class="section">
                    <p class="title">Shipping method</p>
                    <el-select v-model="shippingValue" placeholder="Select">
                        <el-option v-for="item in shippingOptions" :label="item.label" :value="item.value">
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
                    <p class="title">Payment method</p>
                    <el-select v-model="paymentValue" placeholder="Select">
                        <el-option v-for="item in paymentOptions" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>


            </el-col>
            <el-col :span="24">
                <div class="update">
                    <el-button type="primary">Update</el-button>
                </div>

            </el-col>

        </el-card>

    </el-col>
    <el-col :span='10'>
        <el-card class="box-card">
            <h3>Customer Details</h3>
        </el-card>
    </el-col>
</el-row>

</template>

<script>

export default {
    data() {
        return {
            order: {
                orderID: '123213',
                date: '2016-05-03',
                fulfillmentStaus: 'pending',
                paymentStatus: 'unpaid',
                total: '540',
                customerID: '45645'
            },
            orderOptions: [{
                value: 'pending_payment',
                label: 'Pending payment'
            }, {
                value: 'processing',
                label: 'Processing'
            }, {
                value: 'completed',
                label: 'Completed'
            }, {
                value: 'on_hold',
                label: 'On hold'
            }, {
                value: 'canceled',
                label: 'Canceled'
            }],
            shippingOptions: [{
                value: 'Standard',
                label: 'Standard'
            }, {
                value: 'Worldwide Express',
                label: 'Worldwide Express'
            }],
            paymentOptions: [{
                value: 'Visa',
                label: 'Visa'
            }, {
                value: 'MasterCard',
                label: 'MasterCard'
            }, {
                value: 'American Express',
                label: 'American Express'
            }, {
                value: 'Paypal',
                label: 'Paypal'
            }],
            shippingValue: '',
            paymentValue: '',
            orderValue: ''
        }
    }

}

</script>
