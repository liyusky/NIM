
import Vue from 'vue'
import Nim from './Nim.vue'
import Backstage from './components/backstage/backstage.vue'
import Modal from './components/modal/modal.vue'
import './main.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#nim',
  render: f => f(Nim)
})

new Vue({
  el: '#backstage',
  render: f => f(Backstage)
})

new Vue({
  el: '#modal',
  render: f => f(Modal)
})
