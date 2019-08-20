<template>
    <el-card class="box-card" style="margin-bottom: 20px">
        <div slot="header" class="clearfix">
            <span>统计</span>
        </div>
        <div class="stat">
            <div class="field" style="width: 30%">
                <div class="key">提交</div>
                <div class="value">{{problem.submit_num || 0}}</div>
            </div>
            <div class="field" style="width: 30%">
                <div class="key">通过</div>
                <div class="value">{{problem.ac_num || 0}}</div>
            </div>
            <div class="field" style="width: 40%">
                <div class="key">AC率</div>
                <div class="value">{{problem.ac_num/problem.submit_num || 0}}</div>
            </div>
            <div class="field" style="width: 50%">
                <div class="key">内存限制</div>
                <div class="value">{{problem.memory_limit}}MB</div>
            </div>
            <div class="field" style="width: 50%">
                <div class="key">时间限制</div>
                <div class="value">{{problem.time_limit}}ms</div>
            </div>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "ProblemStat",
        props: {
            problem: {}
        }

    }
</script>

<style scoped>
    .box-card {
        margin-bottom: 20px;
    }

    .functional-area {
        display: block;
        height: 60px;
    }

    .stat {
        display: inline-block;
        float: right;
    }
    .stat > .field:first-child {
        border-left: none;
    }
    .field {
        display: inline-block;
        padding: 0px 10px;
        border-left: 1px solid #ffffff;
    }
</style>