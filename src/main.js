
import Vue from 'vue'
import Nim from './Nim.vue'
import './main.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#nim',
  render: f => f(Nim)
})
