<template>
  <ul class="list-session">
    <li class="session-item">
      <div class="item-portraiture">
        <img src="">
        <p>消息中心</p>
      </div>
    </li>
    <li class="session-item">
      <div class="item-portraiture">
        <img src="">
        <p>添加好友</p>
      </div>
    </li>
    <li class="session-item" v-for="session in sessions" :key="session.phone">
      <div class="item-portraiture">
        <img :src="session.portraiture">
        <p>{{session.name}}({{session.phone}})[{{session.status}}]</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SessionList',
  data () {
    return {
      sessions: [
        {
          portraiture: '',
          name: '',
          phone: '',
          status: ''
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import './session-list.scss'
</style>
