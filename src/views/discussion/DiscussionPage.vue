<template>
    <div class="container-fluid">
        <div class="row">
            <Header :caption="'讨论-'+article.title"></Header>
            <div class="col-12">
                <el-tabs>
                    <el-tab-pane label="讨论">
                        <discussion :article="article" />
                        <comment-list :article="article"/>
                    </el-tab-pane>
                    <el-tab-pane label="编辑">
                        <discussion-edit :article="article" />
                    </el-tab-pane>
                </el-tabs>

            </div>
        </div>
    </div>
</template>

<script>
    import Discussion from "../../components/discussion/Discussion";
    import DiscussionEdit from "../../components/discussion/DiscussionEdit";
    import CommentList from "../../components/discussion/CommentList";
    import Header from "../../components/Header";

    import api from "../../axios/api";

    export default {
        name: "DiscussionPage",
        components: {CommentList, Header, DiscussionEdit, Discussion},
        data: function () {
            return {
                id: Number,
                article: {}
            }
        },
        mounted: function () {
            this.init()
        },
        methods: {
            init: function () {
                this.id = this.$route.params['id']
                this.getDiscussion(this.id)
            },
            getDiscussion: function (id) {
                api.getDiscussion(id).then(res=>{
                    this.article = res.data.data
                }).catch(()=>{

                })
            }
        }
    }
</script>

<style scoped>

</style>