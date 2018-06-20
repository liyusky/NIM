<template>
  <ul class="list-friend">
    <li class="friend-item">
      <div class="item-portraiture">
        <img src="">
        <p>黑名单</p>
      </div>
    </li>
    <li class="friend-item" v-for="friend in friends" :key="friend.phone">
      <div class="item-portraiture">
        <img src="{{friend.portraiture}}">
        <p>{{friend.name}}({{friend.phone}})[{{friend.status}}]</p>
      </div>
    </li>
  </ul>
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
        },
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import './friend-list.scss'
</style>
