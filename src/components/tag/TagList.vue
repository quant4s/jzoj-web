<template>
    <b-card  header="算法标签" style="margin-bottom: 20px">
        <div class="container-fluid">
            <div class="row">
                <div v-for="tag in tags" class="col-4" :style="'margin-bottom: 20px; background-color: '+tag.color ">
                    <router-link style="color: #ffffff" :to="'/tag/' + tag.id"> {{tag.name}}</router-link>
                </div>
            </div>
        </div>
    </b-card>
</template>

<script>
    export default {
        name: "TagList",
        props: {
            tags: []
        }
    }
</script>

<style scoped>

</style>