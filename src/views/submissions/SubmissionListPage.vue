<template>
    <div class="container-fluid">
        <div class="row">
            <Header caption="评测列表" />
            <div class="col-12">
                <b-card border-variant="primary">
                    <submission-list :submissions="submissions"></submission-list>
                </b-card>
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
                submissions: []
            }
        },
        mounted: function() {
            this.init()
        },
        methods: {
            init: function() {
                this.getSubmissions()
            },
            getSubmissions: function () {
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