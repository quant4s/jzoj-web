<template>
    <div class="container-fluid" >
        <div class="row">
            <Header caption="讨论列表"></Header>

            <div class="col-12">
                <discussion-list />
            </div>
        </div>
    </div>
</template>

<script>
    import DiscussionList from "../../components/discussion/DiscussionList";
    import Header from "../../components/Header";
    export default {
        name: "DiscussionListPage",
        components: {Header, DiscussionList}
    }
</script>

<style scoped>

</style>