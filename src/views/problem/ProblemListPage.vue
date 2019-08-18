<template>
    <div class="container-fluid" >
        <div class="row">
            <Header caption="题目列表"></Header>
            <div class="col-9">
                <b-card border-variant="primary">
                    <problem-list></problem-list>
                </b-card>
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
                tags:[]
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
                    console.log(data)
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