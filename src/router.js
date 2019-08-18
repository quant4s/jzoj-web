import Vue from 'vue'

//0. 使用路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import store from "./store";
import storage from "./utils/storage";

import ContestListPage from "./views/contest/ContestListPage";
import ContestPage from "./views/contest/ContestPage";
import Home from "./views/home/Home";
import ProblemPage from "./views/problem/ProblemPage";
import ProblemListPage from "./views/problem/ProblemListPage";
import SubmissionListPage from "./views/submissions/SubmissionListPage";
import SubmissionPage from "./views/submissions/SubmissionPage";
import RankListPage from "./views/ranks/RankListPage";

import {Constant} from "./components/Constant";
import DiscussionListPage from "./views/discussion/DiscussionListPage";



const routes = [
    {name: 'home', path: '/', component: Home},
    {path: '/problems', component: ProblemListPage, meta: {isLogin: false} },
    {name: 'problem-details', path: '/problem/:id', meta: {title: 'Problem Details'}, component: ProblemPage},
    { path: '/contests', component: ContestListPage },
    {name: 'contest-details', path: '/contest/:id', meta: {title: 'Contest Details'}, component: ContestPage},
    { path: '/submissions', component: SubmissionListPage },
    { path: '/submission/:id', component: SubmissionPage },
    { path: '/ranks', component: RankListPage },
    { path: '/discussions', component: DiscussionListPage},
]


//3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

    let user = sessionStorage.getItem("user")
    store.commit('setUser', user)

// router.beforeEach((to, from, next) => {
//     // Vue.prototype.$Loading.start()
//  //   if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (!storage.get(Constant.STORAGE_KEY.AUTHED)) {
//             next({
//                 name: 'home'
//             })
//         }
//         // else {
//         //     next()
//         // }
//     // } else {
//     //     next()
//     // }
// })
//4.导出路由
export default router;