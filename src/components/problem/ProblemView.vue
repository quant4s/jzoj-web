<template>
    <div style="margin-bottom: 20px">
        <h1>#{{problem.display_id}}# {{problem.title}}</h1>
        <router-link :to="'/problem/' + problem.display_id + '/edit'">编辑</router-link>
        <div>
            <h3>题目描述</h3>
            <div>{{problem.description}}</div>
            <h3>输入格式</h3>
            <div>{{problem.input_format}}</div>
            <h3>输出格式</h3>
            <div>{{problem.output_format}}</div>
            <h3>输入输出样例</h3>
            <div v-for="ex in problem.examples" :key="ex">
                <div>{{ex.input_example}}</div>
                <div>{{ex.output_example}}</div>
            </div>
            <h3>说明和提示</h3>
            <div>{{problem.hint}}</div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "ProblemView",
        id: String,
        props: {
            problem: Object
        }
    }
</script>

<style scoped>

</style>