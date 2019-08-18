<template>
    <div class="container-fluid">
    <div class="row">
        <Header caption="排名列表"></Header>
        <div class="col-12">
            <b-card border-variant="primary">
                <rank-list />
            </b-card>
        </div>
    </div>
    </div>
</template>

<script>
    import RankList from "../../components/rank/RankList";
    import Header from "../../components/Header";
    export default {
        name: "RankListPage",
        components: {Header, RankList}
    }
</script>

<style scoped>

</style>