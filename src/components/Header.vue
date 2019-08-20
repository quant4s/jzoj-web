<template>
    <div class="wrapper header-wrapper" style="margin-bottom: 20px">
        <div>
        </div>
        <nav class="bread-crumb">
            桔子/比赛列表
        </nav>
        <div class="user-nav">
            <user-nav />
        </div>
        <h1>{{caption}}</h1>

        <div class="functional-area">

        </div>

        <div class="operation">

        </div>

        <div class=""/>
    </div>
</template>

<script>
    import UserNav from "./user/UserNav";
    export default {
        name: "Header",
        components: {UserNav},
        props: {
            caption: String
        }
    }
</script>

<style scoped>
    .header-wrapper{
        background-color: rgba(0,0,0,0.8);
        background-image: linear-gradient(90deg, rgb(35, 37, 38), rgb(65, 67, 69));
        color: #ffffff;
        text-align: left;
        padding: 15px;
        width: 100%;
    }
    .bread-crumb{
        display: inline-block;
        padding-top: 1.5em;
        margin-left: 15px;
        font-size: .8em;
        color: #aaa;
    }
    .user-nav {
        position: absolute;
        right: 32px;
        top: 0;
        /*float: right;*/
        /*margin-top: -15px;*/
        /*margin-right: 35px;*/
        border-radius: 5px;
        -moz-border-radius:25px;
        /*border-bottom-right-radius: 5px;*/
    }


</style>