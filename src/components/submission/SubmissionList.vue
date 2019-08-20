<template>

    <div class="container-fluid">
        <div class="row">
            <div class="name col-2">提交人/时间</div>
            <div class="did col-2">状态/得分</div>
            <div class="title col-4">题目</div>
            <div class="other col-4">耗时/内存/语言/大小</div>
        </div>

        <!--行数据-->
        <div class="row" v-for="submission in submissions" :key="submission.id">
            <div class="name col-2">{{submission.user.nickname}}<br>{{submission.submit_time}}</div>
            <div class="did col-2">
                <div>
                    <div :class="constant.JudgeState[submission.status].type">{{submission.status}}</div>
                    <router-link :to="'/submission/' + submission.id">
                        {{submission.score}}
                    </router-link>
                </div>
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
    .error{
        background-color: rgb(231, 76, 60);
        color: rgb(255, 255, 255);
    }

    .warning {
        background-color: rgb(250, 219, 20);
        color: rgb(255, 255, 255);
    }

    .success{
        background-color: rgb(82, 196, 26);
        color: rgb(255, 255, 255);
    }

    .info{
        background-color: rgb(250, 219, 20);
        color: rgb(255, 255, 255);
    }
</style>