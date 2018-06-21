<template>
  <!-- s 图片消息 -->
  <section class="image-message">
    <div class="message-waiter" v-if="session.account == account">
      <div class="waiter-say">
        <img src="">
      </div>
      <div class="waiter-portrait">
        <img src="">
      </div>
    </div>
    <div class="message-customer" v-else>
      <div class="customer-portrait">
        <img src="">
      </div>
      <div class="customer-say">
        <img src="">
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
