<template>
  <!-- s 表情包 -->
  <section class="area-facebread">
    <SmallFacebread v-show="facebread == 'small'"></SmallFacebread>
    <RoosterFacebread v-show="facebread == 'rooster'"></RoosterFacebread>
    <DogFacebread v-show="facebread == 'dog'"></DogFacebread>
    <RabbitFacebread v-show="facebread == 'rabbit'"></RabbitFacebread>
    <nav class="facebread-nav">
      <div class="nav-item" :class="{bgShow:facebread == 'small'}" @click="selectFacebread('small')">
        <img src="../../../../../static/img/emoji_0.png">
      </div>
      <div class="nav-item" :class="{bgShow:facebread == 'rooster'}" @click="selectFacebread('rooster')">
        <img src="../../../../../static/img/ajmd001.png">
      </div>
      <div class="nav-item" :class="{bgShow:facebread == 'dog'}" @click="selectFacebread('dog')">
        <img src="../../../../../static/img/xxy001.png">
      </div>
      <div class="nav-item" :class="{bgShow:facebread == 'rabbit'}" @click="selectFacebread('rabbit')">
        <img src="../../../../../static/img/lt001.png">
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
