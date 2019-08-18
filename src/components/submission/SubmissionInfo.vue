<template>
    <div>
        提交人: {{submission.submitter}}
        题目: {{submission.title}}
        状态: {{submission.status}}
        时间: {{submission.submit_time}}
    </div>
</template>

<script>
    export default {
        name: "SubmissionInfo",
        props: {
            submission: Object
        }
    }
</script>

<style scoped>

</style>