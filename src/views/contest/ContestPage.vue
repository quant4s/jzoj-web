<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <Header :caption="contest.title"></Header>
            </div>
            <div class="col-8">
                <el-card>
                    <el-tabs tab-position="left">
                        <el-tab-pane label="题目列表"><contest-problem-list :contest="contest" /></el-tab-pane>
                        <el-tab-pane label="排行榜"></el-tab-pane>
                        <el-tab-pane label="提交记录"></el-tab-pane>
                        <el-tab-pane label="编辑比赛"><contest-edit :contest="contest" /></el-tab-pane>
                    </el-tabs>
                </el-card>
            </div>
            <div class="col-4">
                <contest-info :contest="contest"/>
            </div>
        </div>
    </div>
</template>

<script>
    import api from '../../axios/api'
    import ContestView from "../../components/contest/ContestView";
    import ContestEdit from "../../components/contest/ContestEdit";
    import Header from "../../components/Header";
    import ContestProblemList from "../../components/contest/ContestProblemList";
    import ContestInfo from "../../components/contest/ContestInfo";
    export default {
        name: "ContestPage",
        components: {ContestInfo, ContestProblemList, Header, ContestEdit, ContestView},
        data: function () {
            return {
                contest: {}
            }
        },
        mounted: function() {
            this.init()
        },
        methods: {
            init: function () {
                this.id = this.$route.params['id']
                this.getContest(this.id)
            },
            getContest: function(id) {
                api.getContest(id).then(res => {
                    let data = res.data.data
                    this.loading = false
                    this.contest = data
                }).catch(() => {
                    this.loading = false
                })
            }
        }
    }
</script>

<style scoped>

</style>