<template>

    <div class="container-fluid">
        <div class="row" >
            <div class="status col-1">状态</div>
            <div class="name col-2">提交人/时间</div>
            <div class="did col-1">得分</div>
            <div class="title col-4">题目</div>
            <div class="other col-4">耗时/内存/语言/大小</div>
        </div>

        <!--行数据-->
        <div class="row" v-for="submission in submissions" :key="submission.id">
            <div class="status col-1">{{submission.status}}</div>
            <div class="name col-2">{{submission.user.nickname}}<br>{{submission.submit_time}}</div>
            <div class="did col-1">
                <router-link :to="'/submission/' + submission.id">
                    {{submission.score}}
                </router-link>
            </div>
            <div class="title col-4"><router-link :to="'/problem/'+submission.problem_id">{{submission.problem.title}}</router-link></div>
            <div class="other col-4">{{submission.total_time}}ms/{{submission.max_memory}}MB/{{submission.language}}/{{submission.code_length}}Byte</div>
        </div>
    </div>

</template>

<script>
    import Constant from "../Constant";

    export default {
        name: "SubmissionList",
        props: {
            submissions: []
        },
        data: function () {
            return {
                constant: Constant
            }
        },
    }
</script>

<style scoped>

</style>