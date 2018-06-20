<template>
  <!-- s 输入区域 -->
  <section class="input-area">
    <div class="area-operation">
      <div class="operation-extensions">
        <i @click="toggleShow('facebread')"></i>
        <i @click="toggleShow('select-image')"></i>
        <i @click="toggleShow('audio-living')"></i>
        <i @click="toggleShow('video-living')"></i>
      </div>
      <div class="operation-edit">
        <input type="text">
      </div>
      <button class="operation-send">发送</button>
    </div>
    <Facebread v-show="extension == 'facebread'"></Facebread>
    <SelectImage></SelectImage>
  </section>
  <!-- e 输入区域 -->
</template>

<script>
import Facebread from './facebread/facebread.vue'
import SelectImage from './select-image/select-image.vue'
export default {
  name: 'InputArea',
  components: {
    Facebread,
    SelectImage
  },
  data () {
    return {
      extension: null
    }
  },
  methods: {
    toggleShow (extension) {
      this.extension = this.extension === extension ? null : extension
      switch (extension) {
        case 'select-image':
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./input-area.scss";
</style>
