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
            submission: Object
        }
    }
</script>

<style scoped>

</style>