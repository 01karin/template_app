import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import store from '../store'


// 主页
const mainWork = r => require.ensure([], () => r(require('../pages/main/index.vue')),'mainWork')
const msg = r => require.ensure([], () => r(require('../pages/main/msg.vue')),'msg')
const work = r => require.ensure([], () => r(require('../pages/main/work.vue')),'work')
const contacts = r => require.ensure([], () => r(require('../pages/main/contacts.vue')),'contacts')
const my = r => require.ensure([], () => r(require('../pages/main/my.vue')),'my')
const user = r => require.ensure([], () => r(require('../pages/main/user.vue')),'user')

const login = r => require.ensure([], () => r(require('../pages/login.vue')),'login')

const routerChild = r => require.ensure([], () => r(require('../components/routerChild.vue')),'routerChild')

Vue.use(Router)
const routes = [{
  path:'/',component:App,
  children:[
    { path: "",redirect:"/mainWork" },
    { path: "/mainWork",name:'mainWork',component: mainWork},
    { path: "/login",name:'login',component: login},
    { path: "/user",name:'user',component: user},
    { path: "/msg",name:'msg',component: msg,meta:{auth:true}},
    { path: "/work",name:'work',component: work,meta:{auth:true}},
    { path: "/contacts",name:'contacts',component: contacts,meta:{auth:true}},
    { path: "/my",name:'my',component: my,meta:{auth:true}},
    //我的页面 的子路由
    /*{ path: "/mainMy",component:routerChild,
      children:[
        {path:'/',component:mainWork},
      ]
    }*/
  ]
}]
const router = new Router({
  routes,
  linkActiveClass:"my-active",
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})
//全局路由配置
//路由开始之前的操作
router.beforeEach((to, from, next) => {
  let toName = to.name
  // let fromName = from.name
  let isMember = localStorage.getItem("isMember");
  let type = localStorage.getItem("type");
  let _isMember = false;
  //判断是否为会员
  if (isMember == "true" && type == 1) {
      _isMember = true;
  }
  if (!isMember && toName !== 'login') {
    next({
      name: 'login'
    })
  } else {
    if (isMember && toName === 'login') {
      next({
        path: '/'
      })
    } else {
      next()
    }
  }
})

//路由完成之后的操作
router.afterEach(route => {
})
export default router