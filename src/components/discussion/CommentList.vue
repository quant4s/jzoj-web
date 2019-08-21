<template>
    <el-card>

    </el-card>
</template>

<script>
    import api from "../../axios/api";

    export default {
        name: "CommentList",
        props: {
            article: Object
        },
        data: function () {
          return {
              comments: Array
          }
        },
        watch: {
            'article': function (val) {
                api.getCommentsOfDiscussion(val.id).then(res=>{
                    this.comments = res.data.data
                })
            }
        }
    }
</script>

<style scoped>

</style>