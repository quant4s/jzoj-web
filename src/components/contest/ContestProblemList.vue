<template>
    <div>
        <div class="row">
            <div class="col-1">状态</div>
            <div class="col-1">题号</div>
            <div class="col-1">满分</div>
            <div class="col-6">题目</div>
            <div class="col-3">统计</div>
        </div>
        <div class="row" v-for="problem in contest.problems" :key="problem">
            <div class="col-1">{{problem.status}}</div>
            <div class="col-1"v>题号</div>
            <div class="col-1">满分</div>
            <div class="col-6">{{problem.title}}</div>
            <div class="col-3">统计</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContestProblemList",
        props: {
            contest: Object,
            problems: Array
        },
    }
</script>

<style scoped>

</style>