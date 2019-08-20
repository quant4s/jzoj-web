<template>
    <el-card  style="margin-bottom: 20px">
        <div slot="header" class="clearfix">
            <span>算法标签</span>
        </div>
                <el-tag v-for="tag in tags" :key="tag.id" size="medium"  @click="clickTag">{{tag.name}}</el-tag>

    </el-card>
</template>

<script>
    export default {
        name: "TagList",
        props: {
            tags: []
        },
        methods: {
            clickTag: function () {

            }
        }
    }
</script>

<style scoped>

</style>