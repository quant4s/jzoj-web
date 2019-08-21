<template>
    <div>
        <el-form>
            <el-form-item label="比赛名称" label-width="100px">
                <el-input v-model="contest.title"></el-input>
            </el-form-item>
            <el-form-item label="比赛描述" label-width="100px">
                <mavon-editor v-model="contest.subtitle"
                              defaultOpen="edit"
                ></mavon-editor>
            </el-form-item>
            <el-form-item label="比赛公告" label-width="100px">
                <mavon-editor v-model="contest.information"
                              defaultOpen="edit"
                ></mavon-editor>
            </el-form-item>
            <el-form-item label="试题列表" label-width="100px">
                <el-select
                        v-model="contest.problems"
                        :multiple="true"
                        :filterable="true"
                        :remote="true"
                        placeholder="请输入关键词"
                        :remote-method="findProblem"
                        :loading="loading">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="比赛管理员" label-width="100px">
                <el-select
                        v-model="contest.admins"
                        :multiple="true"
                        :filterable="true"
                        :remote="true"
                        multiple-limit="3"
                        placeholder="请输入关键词"
                        :remote-method="findUser"
                        :loading="loading">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label='排行参数（格式：{ "题目 ID": 分值倍数 }）' label-position="top">
                <el-input v-model="contest.ranklist.ranking_params"/>
            </el-form-item>
            <el-form-item label="赛制" label-width="100px">
                <el-radio-group v-model="contest.type" size="small">
                    <el-radio-button label="noi"></el-radio-button>
                    <el-radio-button label="ioi" ></el-radio-button>
                    <el-radio-button label="acm"></el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="起止时间" label-width="100px">
                <el-col :span="11">
                    <el-date-picker type="datetime" placeholder="选择日期" v-model="contest.start_time" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-date-picker type="datetime" placeholder="选择日期" v-model="contest.end_time" style="width: 100%;"></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="公开" label-width="100px">
                <el-col :span="10">
                <el-switch
                        v-model="contest.is_public"
                        active-color="#13ce66"
                        inactive-color="#ff4949">
                </el-switch>
                </el-col>
                <el-col :span="4">隐藏统计信息</el-col>
                <el-col :span="10">
                    <el-switch
                            v-model="contest.hide_statistics"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                    </el-switch>
                </el-col>
            </el-form-item>
            <el-form-item label="密码保护" label-width="100px">
                <el-col :span="5">
                    <el-switch
                            v-model="contest.protected"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                    </el-switch>
                </el-col>
                <el-col :span="19">
                    <el-input  v-model="contest.password"/>
                </el-col>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "ContestEdit",
        props: {
          contest: Object
        },
        data: function() {
            return {

            }
        },
        methods: {
            findProblem: function(key) {
                
            },
            findUser: function (key) {
                
            }
        }
    }
</script>

<style scoped>

</style>