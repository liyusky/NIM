<template>
  <!-- s 信用报告面板 -->
  <section class="credit-panel">
    <div class="panel-title">
      <p class="title-name">
        <i></i>
        <span>信用报告</span>
      </p>
      <i></i>
    </div>
    <div class="panel-customer-info">
      <p>个人基本信息</p>
      <p>姓名：{{session.name}}</p>
      <p>身份证号：{{session.ID}}</p>
      <p>申请编号：{{session.applyId}}</p>
      <p>报告时间：{{session.date}}</p>
    </div>
    <div class="panel-risk">
      <p></p>
      <p></p>
    </div>
  </section>
  <!-- e 信用报告面板 -->
</template>

<script>
export default {
  name: 'CreditPanel',
  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
@import "./credit-panel.scss";
</style>
