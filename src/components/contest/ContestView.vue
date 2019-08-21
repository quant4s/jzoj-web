<template>
    <div>
        <mavon-editor :value="contest.subtitle"
                      :editable='false'
                      :subfield='false'
                      :toolbarsFlag='false'
                      defaultOpen="preview">
        </mavon-editor>
    </div>
</template>

<script>
    export default {
        name: "ContestView",
        props: {
            contest: Object
        }
    }
</script>

<style scoped>

</style>