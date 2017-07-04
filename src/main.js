import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import Axios from './diy/axios'

Vue.prototype.$http = Axios // 类似于vue-resource的调用方法，之后可以在实例里直接用this.$http.get()等

// 第三方jquery
import '../static/js/zepto.min.js'
// css reset UI框架里面有了,但是mint-ui沒有
import './public/reset.css'
// 字体图标
import './public/fonts/iconfont.css'
import './public/fonts/iconfont.js'


new Vue({
    el: "#app",
    router,
    store,
    render:(h)=>h(App)
})
