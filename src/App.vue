<template>
  <div id="app" class="">
    <div class="left-side-bar">
      <LeftSideBar></LeftSideBar>
    </div>
    <div class="main_area container-fluid" style="padding-left: 79px; ">
      <div class="row">
        <router-view></router-view>
<!--        <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">-->
<!--          <div-->
<!--                  style="{-->
<!--        height: 100%;-->
<!--        width: 100%;-->
<!--        background-color: #f2f5f6;-->
<!--        box-shadow: 0 0 6px rgba(0,0,0, .12);-->
<!--        text-align: center;-->
<!--        line-height: 40px;-->
<!--        color: #1989fa;-->
<!--      }"-->
<!--          >-->
<!--            UPtest-->
<!--          </div>-->
<!--        </el-backtop>-->
      </div>
      <div class="row">
        <Footer msg="hello" />
      </div>
    </div>
  </div>

</template>

<script>
import LeftSideBar from "./components/LeftSideBar";
import Footer from "./components/Footer";

export default {
  name: 'app',
  components: {
    Footer,
    LeftSideBar,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(239, 239, 239);
}

.left-side-bar {
  left: 0px;
  top: 0px;
  height: 100%;
  line-height: 48px;
  /*width: 4em;*/
  position: fixed;
  background-color: rgb(52, 73, 94);
}

</style>
