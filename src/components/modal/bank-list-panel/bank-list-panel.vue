<template>
  <!-- s 黑名单 -->
  <section class="bank-list-panel">
    <div class="panel-title">
      <p>黑名单</p>
      <i></i>
    </div>
    <p class="panel-tip">
      <i></i>
      <span>你不会接收到列表中联系人的任何消息</span>
    </p>
    <ul class="panel-list">
      <li class="list-item" v-for="(customer,index) in blacklist" :key="index">
        <div class="item-account">
          <div class="account-portrait">
            <img :src="customer.portrait">
          </div>
          <p>{{customer.name}}</p>
        </div>
        <button class="item-remove-btn">解除</button>
      </li>
    </ul>
  </section>
  <!-- e 黑名单 -->
</template>

<script>
export default {
  name: 'BankListPanel',
  data () {
    return {
      blacklist: []
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./bank-list-panel.scss";
</style>
