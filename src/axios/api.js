import Vue from 'vue'
import axios from 'axios'


Vue.prototype.$http = axios
axios.defaults.baseURL = '/api/v3'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.timeout = 50000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.withCredentials = true

// // 请求拦截器
// axios.interceptors.request.use(function(config) {
//     return config;
// }, function(error) {
//     return Promise.reject(error);
// })
// // 响应拦截器
// axios.interceptors.response.use(function(response) {
//     return response;
// }, function(error) {
//     return Promise.reject(error);
// })


export default {
    // 用户相关
    register: function(data) {
        return ajax('register', 'post', {
            data
        })
    },

    login: function (data) {
        return ajax('login', 'post', {
            data
        })
    },

    logout: function() {
        return ajax('logout', 'get')
    },

    changePassword: function() {

    },


    // tag 相关
    getTagList: function() {
        return ajax('tags', 'get')
    },


    // 题库相关
    getProblemList: function () {
        return ajax('problems', 'get')
    },

    getProblemListByTag: function() {
        return ajax('problems', 'get')
    },

    getProblem: function(problemId) {
        return ajax('problem/'+problemId, 'get')
    },

    getProblemTestCases: function(id) {
        return ajax('problem/' + id+ '/testcases', 'get')
    },

    // 竞赛相关
    getContestList: function () {
        return ajax('contests', 'get')
    },

    getContest: function (contestId) {
        return ajax('contest/' + contestId, 'get')
    },

    // 提交相关
    submitCode: function(data) {
        return ajax('/submission', 'post', {
            data
        })
    },

    getProblemSubmissionList: function(id) {
        return ajax('/problem/'+id+'/submissions')
    },

    getSubmissionList: function () {
        return ajax('submissions', 'get')
    },

    getSubmission: function (submissionId) {
        return ajax('submission/' + submissionId, 'get')
    },

    // 排名
    getRankList: function () {
        return ajax('ranklist', 'get')
    },

    // 讨论
    getProblemDiscussions: function(problem_id) {
        return ajax('/problem/' + problem_id + '/discussions', 'get')
    },

    getDiscussions: function(type) {
        return ajax('/discussions/' + type, 'get')
    },

    getDiscussion: function(id) {
        return ajax('/discussion/' + id, 'get')
    },

    getCommentsOfDiscussion: function(id) {
        return ajax('/discussion/' + id + '/comments', 'get')
    },

    // 其他
    getHitokoto: function () {
        return ajax('https://v1.hitoko.cn', 'get')
    }
        // axios({
        //     'https://v1.hitokoto.cn',
        //     'get',
        //     {},
        //     {}
        // }).then(res => {
        // })
}

function ajax(url, method, options) {
    if (options !== undefined) {
        var {params = {}, data = {}} = options
    } else {
        params = data = {}
    }

    return new Promise((resolve, reject) => {
        axios({
            url,
            method,
            params,
            data,
            xhrFields: {
                withCredentials: true
            }
        }).then(res => {
            // // API正常返回(status=20x), 是否错误通过有无error判断
            // if (res.data.error !== null) {
            // //     Vue.prototype.$error(res.data.data)
            //     reject(res)
            //     // 若后端返回为登录，则为session失效，应退出当前登录用户
            //     // if (res.data.data.startsWith('Please login')) {
            //         // store.dispatch('changeModalStatus', {'mode': 'login', 'visible': true})
            //     // }
            // } else {
                resolve(res)
                // if (method !== 'get') {
                //   Vue.prototype.$success('Succeeded')
                // }
            // }
        }, res => {
            // API请求异常，一般为Server error 或 network error
            reject(res)
            // Vue.prototype.$error(res.data.data)
        })
    })
}