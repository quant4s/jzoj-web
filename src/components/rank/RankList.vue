<template>
    <div class="container">
        <div class="row">
            <div class="col-2 username">用户名</div>
            <div class="col-8 sign">签名</div>
            <div class="col-1 pass-number">通过数</div>
            <div class="col-1 score">得分</div>
        </div>
        <div class="row" v-for="rank in ranks" :key="rank.user">
            <div class="col-2 username">{{rank.user}}</div>
            <div class="col-8 sign">{{rank.sign}}</div>
            <div class="col-1 pass-number">{{rank.pass}}</div>
            <div class="col-1 score">{{rank.score}}</div>
        </div>

    </div>
</template>

<script>
    import api from "../../axios/api";
    export default {
        name: "RankList",
        data: function () {
            return {
                ranks: []
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
                    this.ranks = data
                }).catch(() => {
                    this.loadingTable = false
                })
            }
        }
    }
</script>

<style scoped>

</style>