import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../layout/index'
import fenlei from "../layout/fenlei"
import login from "../layout/login"
import reg from "../layout/reg"
import paihang from "../layout/paihang"
import quanshu from "../layout/quanshu"
import shujia from "../layout/shujia"
Vue.use(VueRouter)

  const routes = [{
    path:"/",
    redirect:"index",
  },
  {
    path: '/fenlei',
    name: 'fenlei',
    component:fenlei
  },
  {
    path:"/index",
    name:"index",
    component:index
  },
  {
    path:"/login",
    name:"login",
    component:login
  },
  {
    path:"/reg",
    name:"reg",
    component:reg
  },
  {
    path:"/paihang",
    name:"paihang",
    component:paihang
  },
  {
    path:"/quanshu",
    name:"quanshu",
    component:quanshu
  },
  {
    path:"/shujia",
    name:"shujia",
    component:shujia
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
