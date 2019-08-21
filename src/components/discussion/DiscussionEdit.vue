<template>
    <el-form label-width="80px">
        <el-form-item label="标题">
            <el-input v-model="article.title" />
        </el-form-item>
        <el-form-item label="内容" >
            <mavon-editor v-model="article.content" />
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "DiscussionEdit",
        props: {
            article: Object
        }
    }
</script>

<style scoped>

</style>