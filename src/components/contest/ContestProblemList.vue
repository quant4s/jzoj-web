<template>
    <div>
        <div class="row">
            <div>状态</div>
            <div>题号</div>
            <div>满分</div>
            <div>题目</div>
            <div>统计</div>
        </div>
        <div class="row" v-for="problem in contest.problems" :key="problem">
            <div>{{problem.status}}</div>
            <div>题号</div>
            <div>满分</div>
            <div>{{problem.title}}</div>
            <div>统计</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContestProblemList",
        props: {
            contest: Object
        },
    }
</script>

<style scoped>

</style>