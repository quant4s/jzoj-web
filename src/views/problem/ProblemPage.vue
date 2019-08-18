<template>
    <div class="container-fluid">
        <div class="row">
            <Header :caption="problem.title" />
            <div class="col-9">
                <b-tabs border="success">
                    <b-tab title="题目">
                        <b-card border-variant="primary">
                            <problem-view :problem="problem"></problem-view>
                        </b-card>
                    </b-tab>
                    <b-tab title="提交代码"></b-tab>
                    <b-tab title="测试数据"  v-if="problem.canShowTestcase"></b-tab>
                    <b-tab title="标程" v-if="problem.canShowStdCode"></b-tab>
                    <b-tab title="讨论">
                        <discussion-list :discussions="discussions"/>
                    </b-tab>
                    <b-tab title="提交记录">
                        <submission-list :submissions="submissions" />
                    </b-tab>
                    <b-tab title="管理题目" v-if="problem.canEdit">
                        <problem-edit :problem="problem"/>
                    </b-tab>
                </b-tabs>
            </div>
            <div class="col-3">
                <problem-info :problem = "problem"/>
                <tag-list :tags="problem.tags"/>
                <problem-stat  :problem="problem"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../../components/Header";
    import api from '../../axios/api'
    import ProblemEdit from "../../components/problem/ProblemEdit";
    import ProblemView from "../../components/problem/ProblemView";
    import TagList from "../../components/tag/TagList";
    import ProblemStat from "../../components/problem/ProblemStat";
    import ProblemInfo from "../../components/problem/ProblemInfo";
    import ProblemDiscussionList from "../../components/discussion/ProblemDiscussionList";
    import SubmissionList from "../../components/submission/SubmissionList";
    import DiscussionList from "../../components/discussion/DiscussionList";

    export default {
        name: "ProblemPage",
        components: {
            DiscussionList,
            SubmissionList,
            ProblemDiscussionList, ProblemInfo, ProblemStat, TagList, ProblemView, ProblemEdit, Header},
        data: function () {
            return {
                id: Number,
                discussions: [],
                submissions: [],
                testcases: [],
                problem: {},
                loading: false,
            }
        },
        mounted: function () {
            this.init()
        },
        methods: {
            init: function () {
                this.id = this.$route.params['id']
                this.getProblem(this.id)
                this.getDiscussions(this.id)
                this.getSubmissions(this.id)
            },
            getProblem: function (id) {
                api.getProblem(id).then(res => {
                    let data = res.data.data
                    this.loading = false
                    this.problem = data
                    // this.total = data.total
                }).catch(() => {
                    this.loading = false
                })
            },
            getDiscussions: function (id) {
                api.getProblemDiscussions(id).then(res =>{
                    console.log(res.data.data)
                    this.discussions = res.data.data
                }).catch(() => {
                    this.loading = false
                })
            },
            getSubmissions: function (id) {
                api.getProblemSubmissionList(id).then(res =>{
                    this.submissions = res.data.data
                }).catch(() =>{

                })
            },
            getTestCases: function (id) {
                api.getProblemTestCases(id).then(res => {
                    this.testcases = res.data.data
                }).catch(() => {

                })
            }
        }
    }
</script>

<style scoped>

</style>