// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
//引入数据交互axios 
import axios from 'axios'
//300ms点击延迟事件
import fastclick from 'fastclick'

//引入sass reset 文件
import '../static/sass/bass.scss'
//挂载在Vue原型上
Vue.prototype.http=axios;
//300ms点透事件
fastclick.attach(document.body);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
