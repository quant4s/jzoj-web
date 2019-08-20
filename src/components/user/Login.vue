<template>
    <el-form ref="form" :model="user" label-width="80px">
        <el-form-item label="用户名:">
            <el-input placeholder="请输入用户名" v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item label="密码:">
            <el-input placeholder="请输入密码" v-model="user.password" show-password></el-input>
        </el-form-item>
        <el-button type="primary" block @click="login">登录</el-button>
        <el-button type="primary" block @click="login">登录</el-button>
    </el-form>
</template>

<script>
    import api from "../../axios/api"
    import { mapActions } from 'vuex'

    export default {
        name: "Login",
        data: function() {
          return {
              user: {
                  username: String,
                  password: String
              }
          }
        },
        methods: {
            ...mapActions(['setUser']),
            login: function () {
                this.loading = true
                this.$emit('login', 'fail')
                let formData = {
                    'username': this.user.username,
                    'password': this.user.password
                }
                api.login(formData).then(res=>{
                    this.loading = false
                    this.setUser(res.data.data)
                    // store.dispatch({
                    //     type: 'setUser',
                    //     user: res.data.data
                    // })
                    console.log(res.data.data)
                    this.$emit('login', 'success')
                }).catch(()=>{
                    this.loading = false
                    this.$emit('login', 'fail')
                })
            },

        }
    }
</script>

<style scoped>

</style>