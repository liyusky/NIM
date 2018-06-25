<template>
  <!-- s 客户信息 -->
  <section class="customer-info-panel">
    <div class="panel-header">
      <div class="header-portrait">
        <img src="../../../../static/img/default-icon.png">
      </div>
      <div class="header-detail">
        <p>{{portrait.name}}</p>
        <p>账号：{{portrait.account}}</p>
      </div>
    </div>
    <div class="panel-add-blacklist">
      <p>黑名单</p>
      <div class="blacklist-btn-group">
        <i></i>
        <input type="checkbox" :checked="checked">
      </div>
    </div>
    <button class="panel-remove-friend">删除好友</button>
  </section>
  <!-- e 客户信息 -->
</template>

<script>
export default {
  name: 'CustomerInfoPanel',
  // props: ['information'],
  data () {
    return {
      checked: false,
      portrait: {
        name: 'hello',
        account: 1234
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./customer-info-panel.scss";
</style>
