<template>
    <div>
        <mavon-editor v-model="contest.subtitle"></mavon-editor>
    </div>
</template>

<script>
    export default {
        name: "ContestEdit",
        props: {
          contest: {}
        },
        data: function() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>