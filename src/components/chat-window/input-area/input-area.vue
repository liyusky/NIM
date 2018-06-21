<template>
  <!-- s 输入区域 -->
  <section class="input-area">
    <div class="area-operation">
      <!-- s 左边发表情等 -->
      <div class="operation-extensions">
        <i @click="toggleShow('facebread')"></i>
        <i @click="toggleShow('select-image')"></i>
        <i @click="toggleShow('audio-living')"></i>
        <i @click="toggleShow('video-living')"></i>
      </div>
      <!-- e 左边发表情等 -->
      <div class="operation-edit">
        <input type="text" @focus="openShortcut" @blur="closeShortcut">
        <!-- s 快捷短语 -->
        <div class="operation-shortcut" v-show="shortcutStatus">
          <ul class="shortcut-list">
            <li class="list-item" v-for="(index, shortcuts) in shortcuts" :key="index">{{shortcuts}}</li>
          </ul>
        </div>
        <!-- e 快捷短语 -->
      </div>
      <button class="operation-send">发送</button>
    </div>
    <!-- s 表情包面板 -->
    <Facebread v-show="extension == 'facebread'"></Facebread>
    <!-- e 表情包面板 -->
  </section>
  <!-- e 输入区域 -->
</template>

<script>
import Facebread from './facebread/facebread.vue'
export default {
  name: 'InputArea',
  components: {
    Facebread
  },
  data () {
    return {
      extension: null,
      shortcutStatus: false,
      shortcuts: []
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
    },
    openShortcut () {
      this.shortcutStatus = true
    },
    closeShortcut () {
      this.shortcutStatus = false
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./input-area.scss";
</style>
