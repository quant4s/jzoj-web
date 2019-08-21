<template>
    <div class="container-fluid">
    <div class="row">
        <Header caption="排名列表"></Header>
        <div class="col-12">
            <el-card>
                <rank-list :ranklist="ranklist"/>
            </el-card>
        </div>
    </div>
    </div>
</template>

<script>
    import RankList from "../../components/rank/RankList";
    import Header from "../../components/Header";

    import api from "../../axios/api";

    export default {
        name: "RankListPage",
        components: {Header, RankList},
        data: function () {
            return {
                ranklist: Array
            }
        },
        mounted: function() {
            this.init()
        },
        methods: {
            init: function () {
                this.getRanks()
            },
            getRanks: function () {
                api.getRankList().then(res => {
                    let data = res.data.data
                    this.loadingTable = false
                    this.ranklist = data
                }).catch(() => {
                    this.loadingTable = false
                })
            }
        }
    }
</script>

<style scoped>

</style>