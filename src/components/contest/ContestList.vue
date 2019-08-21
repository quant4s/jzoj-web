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
                <div class="status" :class="constant.ContestState[getStatus(contest)].name">{{constant.ContestState[getStatus(contest)].caption}}</div>
                <div class="name"><router-link :to="'/contest/'+contest.id">{{contest.title}}</router-link></div>
                <div class="description">{{contest.subtitle}}</div>
                <div class="start-end-time">{{contest.start_time  }}-{{contest.end_time }}</div>
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
                contests: Array,
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
                    let data = res.data.data
                    this.loadingTable = false
                    this.contests = data
                }).catch(() => {
                    this.loadingTable = false
                })
            },
            getStatus: function(contest) {
                let now = new Date().getTime()/1000
                let ret = ''
                if(contest.start_time > now) {
                    ret = '1'
                }
                else if(contest.end_time < now)
                    ret = '-1'
                else
                    ret = '0'

                return ret
            },
            getDuration: function (startTime, endTime) {
                // return time.duration(startTime, endTime)
            },
        }
    }
</script>

<style scoped>
    .status {width: 8em;}
    .name {width: 20em;}
    .description {width: 30em;}

    .finish{
        font-family: "Microsoft YaHei";
        font-size: 16px;
        font-weight: bold;
        color: rgb(231, 76, 60);
    }
    .underway{
        font-family: "Microsoft YaHei";
        font-size: 16px;
        font-weight: bold;
        color: rgb(82, 196, 26);
    }
    .waiting{
        font-family: "Microsoft YaHei";
        font-size: 16px;
        font-weight: bold;
        color: blue;
    }
</style>