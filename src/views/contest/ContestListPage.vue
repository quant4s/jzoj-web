<template>
    <div class="container-fluid">
        <div class="row">
            <Header caption="比赛列表"></Header>
            <div class="col-12">
                <el-card border-variant="primary">
                    <ContestList></ContestList>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
    import ContestList from "../../components/contest/ContestList";
    import Header from "../../components/Header";
    export default {
        name: "ContestListPage",
        components: {Header, ContestList}
    }
</script>

<style scoped>

</style>