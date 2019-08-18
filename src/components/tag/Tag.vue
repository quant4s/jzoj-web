<template>
    <div class="btn" role="button" :style="' display: inline-block; padding: 5px 10px; background-color: '+tag.color ">
        <router-link style="color: #ffffff" :to="'/tag/' + tag.id"> {{tag.name}}</router-link>
    </div>
</template>

<script>
    export default {
        name: "Tag",
        props: {
            tag: {}
        }
    }
</script>

<style scoped>

</style>