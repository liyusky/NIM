<template>
  <!-- s 欠条详情面板 -->
  <section class="iou-panel">
    <div class="panel-title">
      <p class="title-name">
        <i></i>
        <span>欠条详情</span>
      </p>
      <i></i>
    </div>
    <div class="panel-status">
      <i></i>
      <p>{{session.status}}</p>
      <p>¥{{session.price}}</p>
    </div>
    <div class="panel-detail">
      <p>本金：{{session.price}}元</p>
      <p>年利率：{{session.rate}}%</p>
      <p>其他费用：{{session.otherPrice}}元</p>
      <p>借款时间：{{session.startDate}}</p>
      <p>还款时间：{{session.endDate}}</p>
    </div>
    <div class="panel-footer">
      <button class="footer-detail">详情</button>
    </div>
  </section>
  <!-- e 欠条详情面板 -->
</template>

<script>
export default {
  name: 'IOUPanel',
  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
@import "./iou-panel.scss";
</style>
