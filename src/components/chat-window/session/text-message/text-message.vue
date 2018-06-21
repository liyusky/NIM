<template>
  <!-- s 文字消息 -->
  <section class="text-message">
    <div class="message-waiter" v-if="session.account == account">
      <p class="waiter-say"></p>
      <div class="waiter-portrait">
        <img src="">
      </div>
    </div>
    <div class="message-customer" v-else>
      <div class="customer-portrait">
        <img src="">
      </div>
      <p class="customer-say"></p>
    </div>
  </section>
  <!-- e 文字消息 -->
</template>

<script>
export default {
  name: 'TextMessage',
  props: ['session'],
  data () {
    return {
      account: localStorage.getItem('account')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./text-message.scss";
</style>
