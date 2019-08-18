<template>
    <b-card header="hitokoto" style="margin-bottom: 20px">
        {{sentence}}
    </b-card>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Hitokoto",
        created: function() {
            this.sentence = 'hello, world!'
        },
        data: function() {
            return {
                sentence: 'hello'
            }
        },
        mounted: function(){
            this.init()
        },
        methods: {
            init: function () {
                this.getHitokoto();
            },
            getHitokoto: function () {

            }
        }
    }
</script>

<style scoped>

</style>