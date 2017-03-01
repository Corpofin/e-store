<style lang="css">



</style>

<template>

<data-tables :data='tableData' :has-action-col='false' :pagination-def='getPaginationDef()'>
    <el-table-column prop="name" label="Name" sortable="custom"></el-table-column>
    <el-table-column prop="email" label="Email" sortable="custom"></el-table-column>
    <el-table-column prop="registerd_since" label="Registerd Since" sortable="custom"></el-table-column>
    <el-table-column label="" fixed="right" width="120">
        <template scope="scope">
            <el-button size="small"><i class="el-icon-edit"></i></el-button>
            <el-button @click="handleClickDelete" type="danger" size="small"><i class="el-icon-delete"></i></el-button>
        </template>
    </el-table-column>
</data-tables>

</template>

<script>

export default {
    name: 'Orders',
    data() {
        return {
            tableData: [{
                userID: 5111,
                name: 'Christina Pearson',
                email: 'christina-90@example.com',
                registerd_since: '2017-01-19T08:59:17.340Z'
            }, {
                userID: 5112,
                name: 'Paul Griffin',
                email: 'paul-griffin@example.com',
                registerd_since: '2017-01-18T12:56:31.100Z'
            }, {
                userID: 5113,
                name: 'Hannah Griffin',
                email: 'hannah_92@example.com',
                registerd_since: '2017-01-18T12:55:35.985Z'
            }, {
                userID: 5114,
                name: 'Henry Rodriguez',
                email: 'henry-93@example.com',
                registerd_since: '2017-01-18T12:54:35.259Z'
            }, {
                userID: 5115,
                name: 'Joshua Lee',
                email: 'joshua-lee@example.com',
                registerd_since: '2017-01-18T12:53:43.947Z'
            }, {
                userID: 5116,
                name: 'Timothy Warren',
                email: 'timothy93@example.com',
                registerd_since: '2017-01-18T12:55:35.985Z'
            }, {
                userID: 5117,
                name: 'Joseph Simpson',
                email: 'joseph_93@example.com ',
                registerd_since: '2017-01-18T12:54:35.259Z'
            }, {
                userID: 5118,
                name: 'Phan Quỳnh',
                email: 'phanquynh@example.com',
                registerd_since: '2017-01-18T12:53:43.947Z'
            }]
        }
    },
    methods: {
        handleClickEdit() {

        },
        handleClickDelete() {

        },

        getPaginationDef() {
            return {
                layout: 'total, prev, pager, next, jumper, sizes',
                pageSize: 10,
                pageSizes: [10, 20, 50],
            }
        }

    }
}

</script>
