<template>
    <ul class="nav flex-column nav-pills nav-stacked">
        <li class="nav-item">
            <router-link to="/" class="nav-link" tag="a">桔子</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/problems" class="nav-link" active-class="active" tag="a">题库</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/contests"  class="nav-link" active-class="active" tag="a">比赛</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/submissions"  class="nav-link" active-class="active" tag="a">评测</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/ranks"  class="nav-link" active-class="active" tag="a">排名</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/discussions"  class="nav-link" active-class="active" tag="a">讨论</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/admin" class="nav-link" active-class="active" tag="a">管理</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "LeftSideBar"
    }
</script>

<style scoped>

</style>