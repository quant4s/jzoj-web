<template>
    <el-form ref="form" :model="user" label-width="80px">
        <el-form-item label="用户名:">
            <el-input placeholder="请输入用户名" v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item label="密码:">
            <el-input placeholder="请输入密码" v-model="user.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="密码:">
            <el-input placeholder="请再次输入密码" v-model="repassword" show-password></el-input>
        </el-form-item>
        <el-form-item label="Email">
            <el-input placeholder="请输入邮箱" v-model="user.email"></el-input>
        </el-form-item>
        <el-button type="primary" block @click="register">注册</el-button>
    </el-form>

</template>

<script>
    export default {
        name: "Register",
        data: function() {
            return {
                repassword: String,
                user: {
                    username: String,
                    password: String,
                    email: String
                }
            }
        },
        methods: {
            register: function () {
                this.loading = true
                this.$emit('register', 'success')
            }
        }
    }
</script>

<style scoped>

</style>