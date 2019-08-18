<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <Header :caption="contest.title"></Header>
            </div>
            <div class="col-8">
                <b-tabs pills card vertical>
                    <b-tab title="比赛说明">
                        <contest-view :contest="contest"></contest-view>
                    </b-tab>
                    <b-tab title="题目列表">
                        <contest-problem-list :contest="contest"></contest-problem-list>
                    </b-tab>
                    <b-tab title="排行榜"><b-card-text>Tab Contents 2</b-card-text></b-tab>
                    <b-tab title="提交记录"><b-card-text>Tab Contents 3</b-card-text></b-tab>
                    <b-tab title="编辑比赛">
                        <contest-edit :contest="contest"></contest-edit>
                    </b-tab>
                </b-tabs>
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
                contest: Object
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
                    this.contest = data.results
                    // this.total = data.total
                }).catch(() => {
                    this.loading = false
                })
            }
        }
    }
</script>

<style scoped>

</style>