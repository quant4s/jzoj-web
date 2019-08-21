<template>
    <div class="container">
        <div class="row">
            <div class="col-2 username">用户名</div>
            <div class="col-8 sign">签名</div>
            <div class="col-1 pass-number">通过数</div>
            <div class="col-1 score">得分</div>
        </div>
        <div class="row" v-for="rank in ranklist" :key="rank.id">
            <div class="col-2 username" ><router-link :to="'user/' + rank.id">{{rank.username}}</router-link></div>
            <div class="col-8 sign">{{rank.information}}</div>
            <div class="col-1 pass-number">{{rank.ac_num}}</div>
            <div class="col-1 score">{{rank.rating}}</div>
        </div>

    </div>
</template>

<script>
    import api from "../../axios/api";
    export default {
        name: "RankList",
        props: {
            ranklist: Array
        },
        methods: {
            clickUser: function (id) {
                // TODO 路由
            }
        }
    }
</script>

<style scoped>

</style>