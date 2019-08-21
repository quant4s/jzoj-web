<template>
    <div class="container-fluid" >
        <div class="row">
            <Header caption="题目列表"></Header>
            <div class="col-9">
                <el-tabs v-model="activeName"  @tab-click="handleClick">
                    <el-tab-pane label="基础题库" name="first">
                        <problem-list></problem-list>
                    </el-tab-pane>
                    <el-tab-pane label="普及题库" name="second">配置管理</el-tab-pane>
                    <el-tab-pane label="提高题库" name="third">角色管理</el-tab-pane>
                    <el-tab-pane label="模板题库" name="fourth">定时任务补偿</el-tab-pane>
                    <el-tab-pane label="私有题库" name="fifth">定时任务补偿</el-tab-pane>
                    <el-tab-pane label="未分类题库-管理" name="sixth">定时任务补偿</el-tab-pane>
                </el-tabs>
            </div>
            <div class="col-3">
                <tag-list :tags="tags"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../../components/Header";
    import ProblemList from "../../components/problem/ProblemList";
    import TagList from "../../components/tag/TagList";
    import api from "../../axios/api";
    export default {
        name: "ProblemListPage",
        components: {TagList, ProblemList, Header},
        data: function () {
            return {
                tags: Array,
                activeName: 'first'
            }
        },
        mounted: function() {
            this.init()
        },
        methods: {
            init: function () {
                this.getTags()
            },
            getTags: function () {
                api.getTagList().then(res => {
                    let data = res.data.data
                    this.loading = false
                    this.tags = data
                }).catch(() => {
                    this.loading = false
                })
            }
        }
    }
</script>

<style scoped>

</style>