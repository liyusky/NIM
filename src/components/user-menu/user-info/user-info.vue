<template>
  <!-- s 头部 -->
  <section class="user-info">
    <div class="info-account">
      <div class="account-portrait">
        <img src="../../../../static/img/default-icon.png">
      </div>
      <span class="account-name">{{user.nick}}</span>
      <i @click="showUserInfo"></i>
    </div>
    <div class="info-search">
      <i></i>
      <input type="text" placeholder="请输入手机号或姓名" v-model="searchCondition">
    </div>
  </section>
  <!-- e 头部 -->
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'UserInfo',
  data () {
    return {
      accountName: '',
      userInfoShow: false,
      searchCondition: ''
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    showUserInfo () {
      this.userInfoShow = !this.userInfoShow
    }
  }
}
</script>

<style lang="scss" scoped>
@import './user-info.scss';
</style>
