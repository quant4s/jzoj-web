<template>
    <div>
        {{article.title}}
        <p>{{article.content}}</p>
    </div>
</template>

<script>
    export default {
        name: "Discussion",
        props: {
            article: Object
        }
    }
</script>

<style scoped>

</style>