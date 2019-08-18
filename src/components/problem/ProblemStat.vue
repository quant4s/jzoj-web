<template>
    <b-card header="统计" style="margin-bottom: 20px">
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
    </b-card>
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