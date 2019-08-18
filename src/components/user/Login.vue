<template>
    <b-container fluid>
        <b-form id="formLogin" name="formLogin"  style="margin-bottom: 20px;">
            <div role="group">
                <label for="username">用户名:</label>
                <b-form-input
                        id="username"
                        v-model="username"
                        placeholder="输入用户名"
                        type="text"
                        trim
                ></b-form-input>
            </div>
            <div role="group">
                <label for="password">密码:</label>
                <b-form-input
                        id="password"
                        v-model="password"
                        placeholder="输入密码"
                        type="password"
                        trim
                ></b-form-input>
            </div>
        </b-form>
        <b-button variant="primary" block @click="login">登录</b-button>
    </b-container>
</template>

<script>
    import api from "../../axios/api"
    import { mapActions } from 'vuex'

    export default {
        name: "Login",
        data: function() {
          return {
              username: String,
              password: String
          }
        },
        methods: {
            ...mapActions(['setUser']),
            login: function () {
                this.loading = true
                this.$emit('login', 'fail')
                let formData = {
                    'username': this.username,
                    'password': this.password
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