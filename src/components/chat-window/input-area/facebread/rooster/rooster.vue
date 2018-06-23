<template>
  <!-- s 鸡表情包列表 -->
  <ul class="rooster-list">
    <li class="list-item" v-for="index in count" :key="index">
      <img src="../../../../../../static/img/lt/lt001.png">
    </li>
  </ul>
  <!-- e 鸡表情包列表 -->
</template>

<script>
export default {
  name: 'RoosterFacebread',
  data () {
    return {
      count: 40
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./rooster.scss";
</style>
