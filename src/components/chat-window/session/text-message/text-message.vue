<template>
  <!-- s 文字消息 -->
  <section class="text-message">
    <div class="message-waiter" v-if="session.account == account">
      <p class="waiter-say">hello</p>
      <div class="waiter-portrait">
        <img src="../../../../../static/img/default-icon.png">
      </div>
    </div>
    <div class="message-customer" v-else>
      <div class="customer-portrait">
        <img src="../../../../../static/img/jietiao.jpg">
      </div>
      <p class="customer-say">hello</p>
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
