<template>
    <div class="container-fluid">
        <div class="row">
            <Header caption="评测列表" />
            <div class="col-12">
                <el-card>
                    <submission-list :submissions="submissions"></submission-list>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
    import SubmissionList from "../../components/submission/SubmissionList";
    import Header from "../../components/Header";
    import api from "../../axios/api";

    export default {
        name: "SubmissionListPage",
        components: {Header, SubmissionList},
        data: function () {
            return {
                submissions: Array
            }
        },
        mounted: function() {
            this.init()
        },
        methods: {
            init: function() {
                this.getSubmissionList()
            },
            getSubmissionList: function () {
                api.getSubmissionList().then(res => {
                    // console.log(res)
                    let data = res.data.data
                    this.loadingTable = false
                    this.submissions = data
                }).catch(() => {
                    this.loadingTable = false
                })
            },
        }

    }
</script>

<style scoped>

</style>