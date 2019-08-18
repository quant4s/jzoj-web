<template>
    <b-container fluid style="margin-bottom: 20px;">
        <b-form style="margin-bottom: 20px;">
            <div role="group">
                <label for="username">用户名:</label>
                <b-form-input
                        id="username"
                        placeholder="请输入输入用户名"
                        type="text"
                        trim
                ></b-form-input>
            </div>
            <div role="group">
                <label for="email">邮箱:</label>
                <b-form-input
                        id="email"
                        placeholder="输入邮箱"
                        type="email"
                        trim
                ></b-form-input>
            </div>
            <div class="row">
                <div role="group" class="col-6">
                    <label for="password">密码:</label>
                    <b-form-input
                            id="password"
                            placeholder="输入密码"
                            type="password"
                            trim
                    ></b-form-input>
                </div>
                <div role="group" class="col-6">
                    <label for="repassword">密码:</label>
                    <b-form-input
                            id="repassword"
                            placeholder="再次输入密码"
                            type="password"
                            trim
                    ></b-form-input>
                </div>
            </div>
        </b-form>
        <b-button variant="primary" block @click="register">注册</b-button>
    </b-container>
</template>

<script>
    export default {
        name: "Register",
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