<template>
    <el-card>
        <p>提交人: {{submission.user.username}}</p>
        <p>题目: {{submission.problem.title}}</p>
        <p>状态: {{submission.status}}</p>
        <p>时间: {{submission.submit_time}}</p>
    </el-card>
</template>

<script>
    export default {
        name: "SubmissionInfo",
        props: {
            submission: Object
        }
    }
</script>

<style scoped>
.el-card {
    margin-bottom: 20px;
}
</style>