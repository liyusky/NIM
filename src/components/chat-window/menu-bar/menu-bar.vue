<template>
  <!-- s 菜单栏 -->
  <section class="menu-bar">
    <div class="bar-default" v-show="barShow == 'default'">
      <div class="default-account">
        <div class="account-portrait">
          <img src="../../../../static/img/default-icon.png">
        </div>
        <p class="account-name">{{accountName}}[{{loginStatus}}]</p>
      </div>
      <button class="default-record" @click="toggleBarShow">
        <img src="../../../../static/img/recode.png">
        <p>云记录</p>
      </button>
    </div>
    <div class="bar-record" v-show="barShow == 'record'">
      <button class="record-back" @click="toggleBarShow">返回</button>
      <p>云记录</p>
    </div>
  </section>
  <!-- e 菜单栏 -->
</template>

<script>
export default {
  name: 'MenuBar',
  data () {
    return {
      barShow: 'default',
      accountName: '',
      loginStatus: ''
    }
  },
  methods: {
    toggleBarShow () {
      this.barShow = this.barShow === 'default' ? 'record' : 'default'
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./menu-bar.scss";
</style>
