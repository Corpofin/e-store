<style>

.actions .el-button--primary {
    color: #fff;
    background-color: #ff4949;
    border-color: #ff4949;
}

</style>

<template>

<data-tables :data='tableData' :pagination-def='getPaginationDef()' :actions-def='getActionsDef()' :row-action-def='getRowActionsDef()' action-col-width='50' @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="50"></el-table-column>
    <el-table-column prop="name" label="Name" sortable="custom"></el-table-column>
    <el-table-column prop="email" label="Email" sortable="custom"></el-table-column>
    <el-table-column prop="registerd_since" label="Registerd Since" sortable="custom"></el-table-column>

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
            }],
            multipleSelection: []
        }
    },
    methods: {
        handleSelectionChange(val) {
                this.multipleSelection = val;

                console.log(val.name);
            },
            getActionsDef() {
                let self = this
                return {
                    width: 5,
                    def: [{
                        type: 'danger',
                        name: 'delete',
                        handler() {

                            console.log("delete hihi");
                            self.$confirm('This will permanently delete the product. Continue?', 'Warning', {
                                confirmButtonText: 'OK',
                                cancelButtonText: 'Cancel',
                                type: 'warning'
                            }).then(() => {

                                let data = self.tableData;
                                for (var item of self.multipleSelection) {
                                    data = data.filter((el) => {
                                        return el.userID != item.userID
                                    })
                                }
                                self.tableData = data;

                                self.$message({
                                    type: 'success',
                                    message: 'Delete completed'
                                });
                            }).catch(() => {
                                self.$message({
                                    type: 'info',
                                    message: 'Delete canceled'
                                });
                            });

                        },
                        icon: 'delete'
                    }]
                }
            },

            getRowActionsDef() {
                let self = this
                return [{
                    type: 'primary',
                    handler(row) {
                        self.$message('Edit clicked')
                        console.log('Edit in row clicked', row)
                    },
                    name: 'Edit'
                }, {
                    type: 'danger',
                    handler(row) {
                        self.$message('Delete in row clicked')
                        console.log('Delete in row clicked', row)
                    },
                    name: 'Delete'
                }]
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
