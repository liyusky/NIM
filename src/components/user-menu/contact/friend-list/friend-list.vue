<template>
  <!-- s 右边好友列表 -->
  <ul class="list-friend">
    <li class="friend-item">
      <div class="item-portraiture">
        <img src="">
        <p>黑名单</p>
      </div>
    </li>
    <li class="friend-item" v-for="friend in friends" :key="friend.phone">
      <div class="item-portraiture">
        <img :src="friend.portraiture">
      </div>
      <p class="item-account">{{friend.name}}({{friend.phone}})[{{friend.status}}]</p>
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
@import './friend-list.scss'
</style>
