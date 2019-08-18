<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-7">标题</div>
            <div class="col-2">作者</div>
            <div class="col-1">回复数</div>
            <div class="col-2">最新回复</div>
        </div>
        <div class="row" v-for="discussion in discussions" :key="discussion.id">
            <div class="col-7">{{discussion.title}}</div>
            <div class="col-2">{{discussion.user.nickname}}</div>
            <div class="col-1">{{discussion.comments_num}}</div>
            <div class="col-2">{{discussion.sort_time}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DiscussionList",
        props: {
            discussions: []
        }
    }
</script>

<style scoped>

</style>