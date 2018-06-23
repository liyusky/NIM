<template>
  <!-- s 借条详情面板 -->
  <section class="receipt-panel">
    <div class="panel-title">
      <div class="title-name">
        <div class="name-logo">
          <img src="../../../../../static/img/Loan.png">
        </div>
        <span>借条详情</span>
      </div>
      <div class="title-close">
        <img src="../../../../../static/img/closebtn.png">
      </div>
    </div>
    <div class="panel-status">
      <div class="status-img">
        <img src="../../../../../static/img/overdue.png">
      </div>
      <p class="status-select">{{session.status}}</p>
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
  <!-- e 借条详情面板 -->
</template>

<script>
export default {
  name: 'ReceiptPanel',
  data () {
    return {}
  }
}

</script>

<style lang="sass" scoped>
@import "./receipt-panel.scss";

</style>
