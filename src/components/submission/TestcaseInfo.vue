<template>
    <el-collapse v-model="activeName" accordion>
        <el-collapse-item  v-for="(tc, index) in submission.result.judge.subtasks[0].cases" :key="index" :name="index">
            <template slot="title">
                测试点 {{index}} -- 状态: {{tc.status}}
            </template>
            <div class="row">
                <div class="col-12">详细信息
                    <div>{{tc.result.input.name}}-{{tc.result.input.content}}</div>
                    <div>{{tc.result.output.name}}-{{tc.result.output.content}}</div>
                    {{tc.result.userOutput}}
                    <div class="col-4">用时: {{tc.result.time}}ms</div>
                    <div class="col-4">内存: {{tc.result.memory}}MB</div>

                </div>
            </div>
        </el-collapse-item>
    </el-collapse>
</template>

<script>
    export default {
        name: "TestcaseInfo",
        props: {
            submission: Object
        },
        data: function() {
            return {
                activeName: "1"
            }
        },
        methods: {

        },
    }
</script>

<style scoped>

</style>