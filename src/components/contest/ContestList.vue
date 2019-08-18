<template>
    <div class="container-fluid">
        <!-- Main table element -->
        <div class="list">
            <div class="header-wrapper row">
                <div class="status">状态</div>
                <div class="name">比赛名称</div>
                <div class="description">描述</div>
                <div class="start-end-time">起止时间</div>
            </div>
            <!--行数据-->
            <div class="row" v-for="contest in contests" :key="contest.id">
                <div class="status">{{constant.ContestState[0][1]}}</div>
                <div class="name"><router-link :to="'/contest/'+contest.id">{{contest.title}}</router-link></div>
                <div class="description">{{contest.subtitle}}</div>
                <div class="start-end-time">{{contest.start_time | localtime('YYYY-M-D HH:mm') }}-{{contest.end_time | localtime('M-D HH:mm')}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import Constant from "../Constant";
    import api from "../../axios/api";

    export default {
        name: "ContestList",

        data: function() {
            return {
                contests: [],
                constant: Constant
            }
        },
        mounted: function () {
            this.init()
        },
        methods: {
            init: function () {
                this.getContents()
            },
            getContents: function () {
                api.getContestList().then(res => {
                    console.log(res.data)
                    let data = res.data.data
                    this.loadingTable = false
                    this.contests = data
                }).catch(() => {
                    this.loadingTable = false
                })
            },
            getDuration: function (startTime, endTime) {
                return time.duration(startTime, endTime)
            },
        }
    }
</script>

<style scoped>
    .status {width: 8em;}
    .name {width: 20em;}
    .description {width: 30em;}

</style>