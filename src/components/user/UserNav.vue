<template>
    <div>
        <el-menu class="el-menu-demo" mode="horizontal" background-color="rgba(255, 255, 255, .5)" text-color="#333">
            <el-menu-item v-if="!isAuthenticated" @click="showLoginModal" index="1">登录</el-menu-item>
            <el-menu-item v-if="!isAuthenticated" @click="showRegisterModal" index="2">注册</el-menu-item>
            <el-dropdown v-else>
                <span class="el-dropdown-link">
                    {{user.username}}-{{user.nickname}}
                    <el-avatar size="small" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>后台管理</el-dropdown-item>
                    <el-dropdown-item>注销</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-menu>
        <el-dialog
                title="登录"
                :visible.sync="loginVisible"
                width="30%"
                center>
            <login @login="onLogin"/>
        </el-dialog>
        <el-dialog
                :visible.sync="registerVisible"
                width="30%"
                center
                title="注册">
            <register  @register="onRegister"/>
        </el-dialog>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import Login from "./Login";
    import Register from "./Register";
    export default {
        name: "UserNav",
        components: {Register, Login},
        data: function() {
          return {
              loginVisible: false,
              registerVisible: false
          }
        },
        methods: {
            showLoginModal: function() {
                this.loginVisible = true
            },
            showRegisterModal: function() {
               this.registerVisible = true
            },
            onLogin: function() {
                if(arguments[0] === 'success')
                    this.loginVisible = false
            },
            onRegister() {
                if(arguments[0] === 'success')
                    this.registerVisible = false
            },
        },
        computed: {
            ...mapGetters([ 'user', 'isAuthenticated', 'isAdminRole']),
        }
    }
</script>

<style scoped>
    .navbar-light .navbar-nav a.nav-link {
        color: #ffffff;
    }
    .el-menu--horizontal > .el-menu-item{
        height: 40px;
        line-height: 40px;
    }
    .el-menu-demo {

    }
</style>