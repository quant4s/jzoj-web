<template>
    <div>
        <b-navbar>
            <b-navbar-nav right v-if="!isAuthenticated">
                <b-nav-item  @click="showLoginModal" style="color: #fff">登录</b-nav-item>
                <b-nav-item   @click="showRegisterModal" >注册</b-nav-item>
            </b-navbar-nav>
            <b-dropdown id="dropdown-right" right :text="user.nickname" variant="primary" class="m-2" v-else>
                <b-dropdown-item href="#">个人信息</b-dropdown-item>
                <b-dropdown-item href="#">后台管理</b-dropdown-item>
                <b-dropdown-item href="#">注销</b-dropdown-item>
            </b-dropdown>
        </b-navbar>
        <b-modal ref="modal-login" hide-footer
                 title="登录">
            <login @login="onLogin"/>
        </b-modal>
        <b-modal ref="modal-register" hide-footer
                 title="注册">
            <register  @register="onRegister"/>

        </b-modal>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import Login from "./Login";
    import Register from "./Register";
    export default {
        name: "UserNav",
        components: {Register, Login},
        methods: {
            showLoginModal: function() {
                this.$refs['modal-login'].show()
            },
            showRegisterModal: function() {
                this.$refs['modal-register'].show()
            },
            onLogin: function() {
                if(arguments[0] === 'success')
                    this.$refs['modal-login'].hide()
            },
            onRegister() {
                if(arguments[0] === 'success')
                    this.$refs['modal-register'].hide()
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
</style>