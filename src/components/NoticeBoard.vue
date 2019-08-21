<template>
    <el-card header="公告板">
        <div v-for="notice in notices" :key="notice.id" class="text item">
            {{notice.id }}
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "NoticeBoard",
        data: function () {
            return {
                notices: Array
            }
        },
        mounted: function() {
          this.init()
        },
        methods: {
            init: function () {
                this.getNoticeList()
            },
            getNoticeList: function() {
                // 得到4个notice
            }
        }

    }
</script>

<style scoped>
    .el-card {
        margin-bottom: 20px;
    }
</style>