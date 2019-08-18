<template>
    <div class="container-fluid">
        <div class="row" v-for="tc in submission.result" :key="tc">
            <div class="col-2">测试点:</div>
            <div class="col-2" >状态: {{tc.status}}</div>
            <div class="col-4">用时: {{tc.time}}</div>
            <div class="col-4">内存: {{tc.memory}}</div>
            <div class="col-12">详细信息</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TestcaseInfo",
        props: {
            submission: {}
        },
        methods: {

        },
    }
</script>

<style scoped>

</style>