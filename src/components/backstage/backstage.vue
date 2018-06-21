<template>
  <!-- s 不显示但是必须存在又不能display:none;的组件 -->
  <section class="backstage">
    <input type="file">
  </section>
  <!-- e 不显示但是必须存在的组件 -->
</template>

<script>
export default {
  name: 'Backstage',
  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
@import "./backstage.scss";
</style>
