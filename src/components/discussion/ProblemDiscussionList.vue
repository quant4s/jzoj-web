<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-5">标题</div>
            <div class="col-3">所属题目</div>
            <div class="col-1">作者</div>
            <div class="col-1">回复数</div>
            <div class="col-2">最新回复</div>
        </div>
        <div class="row" v-for="discussion in discussions" :key="discussion.id">
            <div class="col-5">
                <router-link :to="'discussion/'+discussion.id">
                    {{discussion.title}}
                </router-link>
            </div>
            <div class="col-3">
                <router-link :to="'problem/'+discussion.problem_id">
                    {{discussion.problem.title}}
                </router-link>
            </div>
            <div class="col-1">{{discussion.user.username}}</div>
            <div class="col-1">{{discussion.comments_num}}</div>
            <div class="col-2">{{discussion.sort_time}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProblemDiscussionList",
        props: {
            discussions: Array
        }
    }
</script>

<style scoped>

</style>