// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Nim from './Nim.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#nim',
  render: f => f(Nim)
})
