<template>
  <!-- s 左边会话列表 -->
  <ul class="list-session">
    <li class="session-item">
      <div class="item-portraiture">
        <img src="">
        <p>添加好友</p>
      </div>
    </li>
    <li class="session-item" v-for="session in sessions" :key="session.phone">
      <div class="item-portraiture">
        <img :src="session.portraiture">
      </div>
      <p class="item-account">{{session.name}}({{session.phone}})[{{session.status}}]</p>
      <!-- s 标记用的点 -->
      <div class="item-point"></div>
      <!-- e 标记用的点 -->
    </li>
  </ul>
  <!-- e 左边会话列表 -->
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
