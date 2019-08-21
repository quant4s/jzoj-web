<template>
    <div class="container-fluid" >
        <div class="row">
            <Header caption="讨论列表"></Header>

            <div class="col-12">
                <el-card>
                    <el-tabs v-model="activeName" tab-position="left">
                        <el-tab-pane label="全局板块" name="global">
                            <discussion-list :discussions="globalDiscussionList"/>
                        </el-tab-pane>
                        <el-tab-pane label="题目板块" name="problems">
                            <problem-discussion-list :discussions="problemsDiscussionList" />
                        </el-tab-pane>
                        <el-tab-pane label="发帖" name="3">
                            <discussion-edit />
                        </el-tab-pane>
                    </el-tabs>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
    import DiscussionList from "../../components/discussion/DiscussionList";
    import Header from "../../components/Header";
    import ProblemDiscussionList from "../../components/discussion/ProblemDiscussionList";

    import api from "../../axios/api";
    import DiscussionEdit from "../../components/discussion/DiscussionEdit";

    export default {
        name: "DiscussionListPage",
        components: {DiscussionEdit, ProblemDiscussionList, Header, DiscussionList},
        data: function () {
            return {
                activeName: 'global',
                globalDiscussionList: Array,
                problemsDiscussionList: Array
            }
        },
        mounted: function() {
            this.init()
        },
        methods: {
            init: function () {
                this.getGolobalDiscussions()
            },
            getGolobalDiscussions: function () {
                api.getDiscussions('global').then(res=>{
                    let data = res.data.data
                    this.globalDiscussionList = data
                }).catch(()=>{

                })
            },
            getProblemsDisscussions: function () {
                api.getDiscussions('problems').then(res=>{
                    let data = res.data.data
                    this.problemsDiscussionList = data
                }).catch(()=>{

                })
            }
        },
        watch: {
            'activeName': function (val) {
                if(val == 'global')
                    this.getGolobalDiscussions()
                else if(val == 'problems')
                    this.getProblemsDisscussions()
            }
        },
        created: function() {
            if(this.$route.query.tabid) {
                this.activeName = this.$route.query.tabid;
            }else{
                this.activeName = 'global';
            }
        }
    }
</script>

<style scoped>

</style>