<template>
    <div class="container">
        <el-row>
            <el-col span="12" class="my-1">
                <el-pagination
                        :current-page="currentPage4"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="30"
                        layout="total, prev, pager, next, jumper"
                        :total="400">
                </el-pagination>
            </el-col>
        </el-row>

        <!-- Main table element -->
        <div class="list container">
            <div class="header-wrapper row">
                <div class="status">状态</div>
                <div class="did">编号</div>
                <div class="title">题目</div>
                <div class="tag">
                    <el-button type="primary" @click="switchTag" v-if="showTag">标签</el-button>
                    <el-button type="success" @click="switchTag" v-else>难度</el-button>
                </div>
                <div class="rate">人数/通过率</div>

            </div>
            <!--行数据-->
            <div class="row problem" v-for="problem in problems" :key="problem.id">
                <div class="status">{{problem.id}}</div>
                <div class="did">{{problem.display_id}}</div>
                <div class="title"><router-link :to="'/problem/'+problem.display_id">{{problem.title}}</router-link></div>
                <div class="tag" v-if="showTag">
                    <tag v-for="tag in problem.tags" :key="tag.id" :tag="tag" />
                </div>
                <div class="tag" v-else>

                </div>
                <div class="rate">
                    <el-progress :text-inside="true" :stroke-width="26" :percentage="70">
                        {{problem.submit_num}}/{{problem.ac_num}}
                    </el-progress>
                </div>
            </div>
        </div>

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
                problems: Array,
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