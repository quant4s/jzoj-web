<template>
    <div class="container-fluid">
        <div class="row">
            <Header :caption="id + ' ' +submission.problem.title+'测试详情'"/>
            <div class="col-8">
                <el-tabs>
                    <el-tab-pane label="测试点">
                        <testcase-info :submission="submission"/>
                    </el-tab-pane>
                    <el-tab-pane label="源代码">
                        <source-code :submission="submission"/>
                    </el-tab-pane>
                </el-tabs>
            </div>
            <div class="col-4">
                <el-card>
                    <submission-info :submission="submission" />
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
    import api from '../../axios/api'
    import Header from "../../components/Header";
    import SubmissionInfo from "../../components/submission/SubmissionInfo";
    import TestcaseInfo from "../../components/submission/TestcaseInfo";
    import SourceCode from "../../components/submission/SourceCode";
    export default {
        name: "SubmissionPage",
        components: {SourceCode, TestcaseInfo, SubmissionInfo, Header},
        data: function () {
            return {
                id: Number,
                submission: Object,
            }
        },
        mounted: function() {
            this.init()
        },
        methods: {
            init: function() {
                this.id = this.$route.params['id']
                this.getSubmission(this.id)
            },
            getSubmission: function(id) {
                api.getSubmission(id).then(res => {
                    let data = res.data.data
                    this.loading = false
                    this.submission = data
                }).catch(() => {
                    this.loading = false
                })
            }
        }

    }
</script>

<style scoped>

</style>