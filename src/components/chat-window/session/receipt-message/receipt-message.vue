<template>
  <!-- s 借条消息 -->
  <section class="receipt-message">
    <div class="message-detail">
      <div class="detail-icon">
        <img src="../../../../../static/img/receipt.png">
      </div>
      <p class="detail-price">{{session.price}}元</p>
    </div>
    <div class="message-origin">借条大师-借条</div>
  </section>
  <!-- e 借条消息 -->
</template>

<script>
export default {
  name: 'ReceiptMessage',
  props: ['session'],
  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
@import "./receipt-message.scss";
</style>
