import Vue from 'vue'
import Vuex from 'vuex'
import storage from "../utils/storage";
import Constant from "../components/Constant";

Vue.use(Vuex)


const User = {
    profile: {}
}

const store = new Vuex.Store({
    state: {
        user:  {}//User.profile.user || {},
        //profile:  User.profile
    },
    getters: {
        user: (state) => {
          return state.user
        },
        isAuthenticated: (state) => {
            return !!state.user.id
        },
        isAdminRole: (state) => {
            return state.user.admin_type === Constant.UserType.ADMIN ||
                state.user.admin_type === Constant.UserType.SUPER_ADMIN
        },
    },
    mutations: {
        setUser: function (state, user) {
            state.user = user
            sessionStorage.setItem('user', user)
            storage.set(Constant.STORAGE_KEY.AUTHED, !!user)
        }
    },
    actions: {
        setUser: function ({commit}, user) {
            commit('setUser', user)
        }
    },
    // strict: debug
})

export default store