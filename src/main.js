import Vue from 'vue'
import Nim from './Nim.vue'
import Backstage from './components/backstage/backstage.vue'
import Modal from './components/modal/modal.vue'
import Chat from './class/chat.class'
import './main.scss'
import store from './store/index'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Chat('15921769360', '015c3d9608b4e414b8bfed58fc397fac')

const VueMap = new Map([
  ['nim', Nim],
  ['backstage', Backstage],
  ['modal', Modal]
])

VueMap.forEach((module, name) => {
  /* eslint-disable no-new */
  new Vue({
    el: '#' + name,
    store,
    render: f => f(module)
  })
})
