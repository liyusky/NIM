<template>
  <!-- s 左边会话列表 -->
  <ul class="list-session">
    <li class="session-item">
      <div class="item-portraiture">
        <img src="../../../../../static/img/addFriend.png">
        <p>添加好友</p>
      </div>
    </li>
    <li class="session-item" v-for="(session,index) in sessions" :key="index">
      <div class="item-portraiture">
        <img :src="session.portraiture">
        <p class="item-account">{{session.name}}({{session.phone}})[{{session.status}}]</p>
      </div>
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
          portraiture: '../../../../../static/img/default-icon.png',
          name: '曹俊5',
          phone: '17730127131',
          status: '离线'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import './session-list.scss'
</style>
