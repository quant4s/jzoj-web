<template>
    <el-card class="box-card">
<!--        <div slot="header" class="clearfix">-->
<!--            <span>卡片名称</span>-->
<!--        </div>-->
        题目提供者 <router-link :to="'/user/' + problem.user_id">{{problem.user.nickname}}</router-link>
        <br/>
        难度：<router-link :to="'/difficulty/' + problem.difficulty">{{problem.difficulty}}</router-link>
        <br/>
        查看题解
        <router-link to="/submissions">提交记录</router-link>
    </el-card>
</template>

<script>
    import Constant from "../Constant"
    export default {
        name: "ProblemInfo",
        props: {
            problem: Object
        }
    }
</script>

<style scoped>
    .box-card {
        margin-bottom: 20px;
    }
</style>