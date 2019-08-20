<template>
    <div class="container-fluid">
        <div class="row" style="margin-bottom: 20px;">
            <div class="col-8">
                <el-carousel height="480px">
                    <el-carousel-item :label="caption">
                        <img src="https://picsum.photos/1024/480/?image=52"/>
                    </el-carousel-item>
                    <el-carousel-item :label="caption">
                        <img src="https://picsum.photos/1024/480/?image=58" />
                    </el-carousel-item>
                </el-carousel>

            </div>
            <div class="col-4">
                <fortune />
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <problem-stat/>
            </div>
        </div>

        <div class="row">
            <div class="col-9">
                <last-contest-list />
            </div>
            <div class="col-3">
                <notice-board style="margin-bottom: 20px"/>
                <Hitokoto />
                <friend-links />
            </div>
        </div>
    </div>

</template>

<script>
    import Hitokoto from "../../components/Hitokoto";
    import LastContestList from "../../components/contest/LastContestList";
    import NoticeBoard from "../../components/NoticeBoard";
    import Fortune from "../../components/Fortune";
    import ProblemStat from "../../components/user/ProblemStat";
    import FriendLinks from "../../components/FriendLinks";
    export default {
        name: "Home",
        components: {
            FriendLinks,
            ProblemStat,
            Fortune,
            NoticeBoard,
            LastContestList,
            Hitokoto
        }
    }
</script>

<style scoped>

</style>