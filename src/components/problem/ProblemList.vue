<template>
    <div class="container">
        <b-row>
            <b-col md="10" class="my-1">
                <b-pagination
                        v-model="currentPage"
                        :total-rows="totalRows"
                        :per-page="perPage"
                        limit="10"
                        class="my-0"
                ></b-pagination>
            </b-col>
        </b-row>

        <!-- Main table element -->
        <div class="list container">
            <div class="header-wrapper row">
                <div class="status">状态</div>
                <div class="did">编号</div>
                <div class="title">题目</div>
                <div class="tag">
                    <b-button variant="primary" @click="switchTag" v-if="showTag">标签</b-button>
                    <b-button variant="success" @click="switchTag" v-else>难度</b-button>
                </div>
                <div class="rate">人数/通过率</div>

            </div>
            <!--行数据-->
            <div class="row problem" v-for="problem in problems" :key="problem.id">
                <div class="status">{{problem.id}}</div>
                <div class="did">{{problem.display_id}}</div>
                <div class="title"><router-link :to="'/problem/'+problem.display_id">{{problem.title}}</router-link></div>
                <div class="tag" v-if="showTag">
                    <tag v-for="tag in problem.tags" :tag="tag" />

                </div>
                <div class="tag" v-else>

                </div>
                <div class="rate">{{problem.submit_num}}/{{problem.ac_num}}</div>
            </div>
        </div>

        <b-row>
            <b-col md="10" class="my-1">
                <b-pagination
                        v-model="currentPage"
                        :total-rows="totalRows"
                        :per-page="perPage"
                        class="my-0"
                ></b-pagination>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import api from '../../axios/api'
    import Tag from "../tag/Tag";

    export default {
        name: "ProblemList",
        components: {Tag},
        data: function() {
            return {
                problems: [],
                showTag: true,
                totalRows: 100,
                currentPage: 1,
                perPage: 5,
                pageOptions: [5, 10, 15],
                sortBy: null,
                sortDesc: false,
                sortDirection: 'asc',
            }
        },
        mounted: function() {
            this.init()
        },
        methods: {
            init: function() {
              this.getProblems()
            },
            getProblems: function () {
                api.getProblemList().then(res => {
                    console.log(res.data)
                    // console.log(res)
                    let data = res.data.data
                    this.loadingTable = false
                    this.problems = data
                }).catch(() => {
                    this.loadingTable = false
                })
            },
            switchTag: function () {
                this.showTag = !this.showTag
            }
        }
    }
</script>

<style scoped>
    .status {
        width: 5%;
    }
    .did { width: 8%}
    .title {
        width: 34%;
    }
    .tag{ width: 43%;}
    .rate {width: 10%; }
    .problem {
        padding-bottom: 10px;
        padding-top: 10px;
    }
</style>