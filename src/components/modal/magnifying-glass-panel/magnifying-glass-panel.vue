<template>
  <!-- s 图片放大镜 -->
  <section class="magnifying-glass-panel">
    <!-- s 左箭头 -->
    <div class="panel-arrow-left">
      <i></i>
    </div>
    <!-- e 左箭头 -->
    <div class="panel-image">
      <img :src="photo">
    </div>
    <!-- s 右箭头 -->
    <div class="panel-arrow-right">
      <i></i>
    </div>
    <!-- e 右箭头 -->
  </section>
  <!-- e 图片放大镜 -->
</template>

<script>
export default {
  name: 'MagnifyingGlassPanel',
  props: ['photo'],
  data () {
    return {
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./magnifying-glass-panel.scss";
</style>
