<template>
  <!-- s 添加好友 -->
  <section class="add-friends-panel">
    <div class="panel-title">
      <p>添加好友</p>
      <i></i>
    </div>
    <div class="panel-content">
      <p class="content-tip" v-show="showTip"></p>
      <div class="content-input" v-show="showInput">
        <input type="number" v-model="account">
      </div>
      <div class="content-detail" v-show="showDetail">
        <div class="detail-portrait">
          <img :src="customer.portrait">
        </div>
        <div class="detail-info">
          <p>{{customer.name}}</p>
          <p>账号：{{customer.account}}</p>
        </div>
      </div>
    </div>
    <div class="panel-btns">
      <button class="btns-cancel">取消</button>
      <button class="btns-temporary-session" v-show="showDetail">临时会话</button>
      <button class="btns-confirm">确定</button>
    </div>
  </section>
  <!-- e 添加好友 -->
</template>

<script>
export default {
  name: 'AddFriendsPanel',
  data () {
    return {
      showTip: false,
      showInput: true,
      showDetail: false,
      customer: {
        name: '',
        account: '',
        portrait: ''
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./add-friends-panel.scss";
</style>
