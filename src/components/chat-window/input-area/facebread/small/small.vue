<template>
  <!-- s 小表情包列表 -->
  <ul class="small-list">
    <li class="list-item" v-for="index in count" :key="index">
      <img src="">
    </li>
  </ul>
  <!-- e 小表情包列表 -->
</template>

<script>
export default {
  name: 'SmallFacebread',
  data () {
    return {
      count: 20
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./small.scss";
</style>
