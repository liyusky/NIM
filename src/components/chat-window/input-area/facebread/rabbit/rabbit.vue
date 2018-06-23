<template>
  <!-- s 兔表情包列表 -->
  <ul class="rabbit-list">
    <li class="list-item" v-for="index in count" :key="index">
      <img src="../../../../../../static/img/ajmd/ajmd001.png">
    </li>
  </ul>
  <!-- e 兔表情包列表 -->
</template>

<script>
export default {
  name: 'RabbitFacebread',
  data () {
    return {
      count: 20
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./rabbit.scss";
</style>
