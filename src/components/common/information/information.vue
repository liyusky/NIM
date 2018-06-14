<template>
  <div class="information">
    <div class="information-content">
      <header class="information-header">
        <div class="header-portrait">
          <img src="../../../../static/img/default-icon.png">
        </div>
        <div class="header-content">
          <p class="header-name">曹俊5</p>
          <p class="header-account">账号:17730127131</p>
        </div>
        <div class="header-close" @click="closeInformation">
          <img src="../../../../static/img/closebtn.png">
        </div>
      </header>
      <section class="section" v-show="hide">
        <p class="section-detail">基本信息</p>
        <div class="detail-list">
          <div class="list-item">
            <span class="item-title">生日</span>
            <span class="item-content">--</span>
          </div>
          <div class="list-item">
            <span class="item-title">手机</span>
            <span class="item-content">--</span>
          </div>
          <div class="list-item">
            <span class="item-title">邮箱</span>
            <span class="item-content">--</span>
          </div>
          <div class="list-item">
            <span class="item-title">签名</span>
            <span class="item-content">--</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        hide: false
      }
    },
    methods: {
      closeInformation() {
        this.$emit('closeInformation');
      }
    }
  }

</script>
<style scoped lang="scss">
  @import '../../scss/information/information.scss';

</style>
