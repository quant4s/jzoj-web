<template>
    <el-card header="近期比赛123">
        <div class="row">
            <div class="col-6" v-for="contest in contests" :key="contest.id">
                <el-card >
                    {{contest.title}}
                    {{contest.startTime}}-{{contest.endTime}}
                </el-card>
            </div>
        </div>
    </el-card>
</template>

<script>
    import api from "../../axios/api"

    export default {
        name: "LastContestList",
        data: function () {
            return {
                contests: []
            }
        },
        mounted: function() {
            this.init()
        },
        methods: {
            init: function () {
                this.getLastContests()
            },
            getLastContests: function () {
                api.getContestList().then(res => {
                    let data = res.data.data
                    this.loading = false
                    this.contests = data
                    // this.total = data.total
                }).catch(() => {
                    this.loading = false
                })
            }
        }
    }
</script>

<style scoped>
    .el-card {
        margin-bottom: 20px;
    }
</style>