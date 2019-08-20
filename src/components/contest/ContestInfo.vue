<template>
    <el-card>
        竞赛信息:{{contest.subtitle}}
    </el-card>
</template>

<script>
    export default {
        name: "ContestInfo",
        props: {
            contest: Object
        }
    }
</script>

<style scoped>

</style>