<template>
  <!-- s 信用报告 -->
  <section class="credit-report">
    <header class="report-title">借条大师信息报告</header>
    <ul class="report-list">
      <li class="list-item">
        <div class="item-unit">状态</div>
        <div class="item-unit">笔数</div>
        <div class="item-unit">金额</div>
      </li>
      <li class="list-item">
        <div class="item-unit">当前逾期</div>
        <div class="item-unit">{{overdueCount}}</div>
        <div class="item-unit">{{overdueAmount}}</div>
      </li>
      <li class="list-item">
        <div class="item-unit">借给Ta</div>
        <div class="item-unit">{{borrowCount}}</div>
        <div class="item-unit">{{borrowAmount}}</div>
      </li>
      <li class="list-item">
        <div class="item-unit">待还</div>
        <div class="item-unit">{{loanCount}}</div>
        <div class="item-unit">{{loanAmount}}</div>
      </li>
      <li class="list-item">
        <div class="item-unit">还款</div>
        <div class="item-unit">{{repayCount}}</div>
        <div class="item-unit">{{repayAmount}}</div>
      </li>
      <li class="list-item">
        <div class="item-unit">总还款</div>
        <div class="item-unit">{{allRepayCount}}</div>
        <div class="item-unit">{{allRepayAmount}}</div>
      </li>
    </ul>
    <footer class="report-overdue">最长逾期时间为{{overdueDate}}天</footer>
  </section>
  <!-- e 信用报告 -->
</template>

<script>
export default {
  name: 'CreditReport',
  data () {
    return {
      overdueCount: 0,
      overdueAmount: 0,
      borrowCount: 0,
      borrowAmount: 0,
      loanCount: 0,
      loanAmount: 0,
      repayCount: 0,
      repayAmount: 0,
      allRepayCount: 0,
      allRepayAmount: 0,
      overdueDate: 0
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./credit-report.scss";
</style>
