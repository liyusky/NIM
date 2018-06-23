<template>
  <!-- s 图片消息 -->
  <section class="image-message">
    <div class="message-waiter" v-if="session.account == account">
      <div class="waiter-say">
        <img src="../../../../../static/img/10383519.jpg">
      </div>
      <div class="waiter-portrait">
        <img src="../../../../../static/img/default-icon.png">
      </div>
    </div>
    <div class="message-customer" v-else>
      <div class="customer-portrait">
        <img src="../../../../../static/img/jietiao.jpg">
      </div>
      <div class="customer-say">
        <img src="../../../../../static/img/jietiao.jpg">
      </div>
    </div>
  </section>
  <!-- e 图片消息 -->
</template>

<script>
export default {
  name: 'ImageMessage',
  props: ['session'],
  data () {
    return {
      account: localStorage.getItem('account')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./image-message.scss";
</style>
