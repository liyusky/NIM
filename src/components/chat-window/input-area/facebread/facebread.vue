<template>
  <!-- s 表情包 -->
  <section class="area-facebread">
    <SmallFacebread v-show="facebread == 'small'"></SmallFacebread>
    <RoosterFacebread v-show="facebread == 'rooster'"></RoosterFacebread>
    <DogFacebread v-show="facebread == 'dog'"></DogFacebread>
    <RabbitFacebread v-show="facebread == 'rabbit'"></RabbitFacebread>
    <nav class="facebread-nav">
      <div class="nav-item" @click="selectFacebread('small')">
        <img src="">
      </div>
      <div class="nav-item" @click="selectFacebread('rooster')">
        <img src="">
      </div>
      <div class="nav-item" @click="selectFacebread('dog')">
        <img src="">
      </div>
      <div class="nav-item" @click="selectFacebread('rabbit')">
        <img src="">
      </div>
    </nav>
  </section>
  <!-- e 表情包 -->
</template>

<script>
import SmallFacebread from './small/small.vue'
import RoosterFacebread from './rabbit/rabbit.vue'
import DogFacebread from './dog/dog.vue'
import RabbitFacebread from './rooster/rooster.vue'

export default {
  name: 'Facebread',
  data () {
    return {
      facebread: 'samll'
    }
  },
  components: {
    SmallFacebread,
    RoosterFacebread,
    DogFacebread,
    RabbitFacebread
  },
  methods: {
    selectFacebread (facebread) {
      this.facebread = facebread
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./facebread.scss";
</style>
