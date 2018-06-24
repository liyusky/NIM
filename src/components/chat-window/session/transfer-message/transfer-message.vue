<template>
  <!-- s 转账消息 -->
  <section class="transfer-message">
    <div class="message-detail">
      <div class="detail-icon">
        <img src="../../../../../static/img/transfer.png">
      </div>
      <p class="detail-price">{{session.price}}元</p>
    </div>
    <div class="message-origin">借条大师-转账</div>
  </section>
  <!-- e 转账消息 -->
</template>

<script>
export default {
  name: 'TransferMessage',
  props: ['session'],
  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
@import "./transfer-message.scss";
</style>
