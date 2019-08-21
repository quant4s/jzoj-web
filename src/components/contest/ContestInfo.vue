<template>
    <el-card >
        <div slot="header" class="clearfix">
            <span>{{contest.subtitle}}</span>
        </div>
        <mavon-editor :value="contest.information"
                      :editable='false'
                      :subfield='false'
                      :toolbarsFlag='false'
                      :boxShadow="false"
                      defaultOpen="preview">
        </mavon-editor>
    </el-card>
</template>

<script>
    export default {
        name: "ContestInfo",
        props: {
            contest: Object
        },
    }
</script>

<style scoped>
    .mavonEditor {
        width: 100%;
        height: 100%;
    }
    .v-note-panel {
        border-width: 0px !important;
    }
</style>