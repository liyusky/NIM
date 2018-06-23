<template>
  <!-- s 信用报告信息 -->
  <section class="credit-message">
    <div class="message-detail">
      <div class="detail-icon">
        <img src="../../../../../static/img/credit.png">
      </div>
      <p class="detail-price">{{session.name}}的信用报告</p>
    </div>
    <div class="message-origin">借条大师-信用报告</div>
  </section>
  <!-- e 信用报告信息 -->
</template>

<script>
export default {
  name: 'CreditMessage',
  props: ['session'],
  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
@import "./credit-message.scss";
</style>
