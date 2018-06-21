<template>
  <!-- s 客户信息 -->
  <section class="customer-info-panel">
    <div class="panel-header">
      <div class="header-portrait">
        <img :src="information.portrait">
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
        <input type="checkbox" v-model="checked">
      </div>
    </div>
    <button class="panel-remove-friend">删除好友</button>
  </section>
  <!-- e 客户信息 -->
</template>

<script>
export default {
  name: 'CustomerInfoPanel',
  props: ['information'],
  data () {
    return {
      checked: false
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./customer-info-panel.scss";
</style>
