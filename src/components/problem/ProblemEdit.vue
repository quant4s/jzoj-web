<template>
    <div style="margin-bottom: 20px">
        <el-form  :model="problem" label-width="80px">
            <el-form-item label="编号:">
                <el-input placeholder="请输入题目编号,可以不填写" v-model="problem.id"></el-input>
            </el-form-item>
            <el-form-item label="题目名称:">
                <el-input placeholder="请输入题目名称" v-model="problem.title"></el-input>
            </el-form-item>
        </el-form>
        <mavon-editor v-model="problem.description"/>

    </div>
</template>

<script>
    export default {
        name: "ProblemEdit",
        props: {
            problem: {}
        }
    }
</script>

<style scoped>

</style>