<template>
    <div class="container-fluid">
        <div class="row" style="margin-bottom: 20px;">
            <div class="col-8">
                <b-carousel
                    id="carousel-1"
                    :interval="3000"
                    controls
                    indicators
                    background="#ababab"
                    img-width="1024"
                    img-height="480"
                    style="text-shadow: 1px 1px 2px #333; "
                >
                    <!-- Text slides with image -->
                    <b-carousel-slide
                            caption="First slide"
                            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                            img-src="https://picsum.photos/1024/480/?image=52"
                    ></b-carousel-slide>

                    <!-- Slides with custom text -->
                    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                        <h1>Hello world!</h1>
                    </b-carousel-slide>

                    <!-- Slides with image only -->
                    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>
                </b-carousel>
            </div>
            <div class="col-4">
                <fortune />
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <problem-stat style="margin-bottom: 20px"/>
            </div>
        </div>

        <div class="row">
            <div class="col-9">
                <last-contest-list  style="margin-bottom: 20px"/>
            </div>
            <div class="col-3">
                <notice-board style="margin-bottom: 20px"/>
                <Hitokoto />
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
    export default {
        name: "Home",
        components: {
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