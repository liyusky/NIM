<template>
  <!-- s 狗表情包列表 -->
  <ul class="dog-list">
    <li class="list-item" v-for="index in count" :key="index">
      <img src="">
    </li>
  </ul>
  <!-- e 狗表情包列表 -->
</template>

<script>
export default {
  name: 'DogFacebread',
  data () {
    return {
      count: 20
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./dog.scss";
</style>
