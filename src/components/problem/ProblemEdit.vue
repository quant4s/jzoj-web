<template>
    <div style="margin-bottom: 20px">
        <b-form-input v-model="problem.id" placeholder="请输入题目编号,可以不填写"></b-form-input>
        <b-form-input v-model="problem.title" placeholder="请输入题目名称"></b-form-input>

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