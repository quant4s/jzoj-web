<template>
    <div>
        ``` {{submission.language}}
        {{submission.code}}
        ```
    </div>

</template>

<script>
    export default {
        name: "SourceCode",
        props: {
            submission: {}
        }
    }
</script>

<style scoped>

</style>