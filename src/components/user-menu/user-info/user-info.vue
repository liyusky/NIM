<template>
  <section class="user-info">
    <div class="info-account">
      <div class="account-portrait">
        <img src="">
      </div>
      <span class="account-name">{{accountName}}</span>
      <i @click="showUserInfo"></i>
    </div>
    <div class="info-search">
      <i></i>
      <input type="text" placeholder="请输入手机号或姓名" v-model="searchCondition">
    </div>
  </section>
</template>

<script>
export default {
  name: 'UserInfo',
  data () {
    return {
      userInfoShow: false,
      searchCondition: ''
    }
  },
  methods: {
    showUserInfo () {
      this.userInfoShow = !this.userInfoShow
    }
  }
}
</script>

<style lang="sass" scoped>
@import './user-info.scss'
</style>
