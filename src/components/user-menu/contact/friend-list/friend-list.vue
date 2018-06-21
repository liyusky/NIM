<template>
  <!-- s 右边好友列表 -->
  <ul class="list-friend">
    <li class="friend-item">
      <div class="item-portraiture">
        <img src="../../../../../static/img/black.png">
        <p>黑名单</p>
      </div>
    </li>
    <li class="friend-item" v-for="(friend,index) in friends" :key="index">
      <div class="item-portraiture">
        <img :src="friend.portraiture">
        <p class="item-account">{{friend.name}}({{friend.phone}})[{{friend.status}}]</p>
      </div>
      <!-- s 标记用的点 -->
      <div class="item-point"></div>
      <!-- e 标记用的点 -->
    </li>
  </ul>
  <!-- e 右边好友列表 -->
</template>

<script>
export default {
  name: 'FriendList',
  data () {
    return {
      friends: [
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
@import './friend-list.scss'
</style>
