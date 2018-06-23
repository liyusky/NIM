<template>
  <!-- s 欠条消息 -->
  <section class="iou-message">
    <div class="message-detail">
      <div class="detail-icon">
        <img src="../../../../../static/img/credit.png">
      </div>
      <p class="detail-price">{{session.price}}元</p>
    </div>
    <div class="message-origin">借条大师-欠条</div>
  </section>
  <!-- e 欠条消息 -->
</template>

<script>
export default {
  name: 'IOUMessage',
  props: ['session'],
  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
@import "./iou-message.scss";
</style>
