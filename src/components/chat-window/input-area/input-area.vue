<template>
  <section class="input-area">
    <div class="area-operation">
      <div class="operation-extensions">
        <i @click="toggleShow('facebread')"></i>
        <i @click="toggleShow('select-image')"></i>
        <i @click="toggleShow('facebread')"></i>
        <i @click="toggleShow('facebread')"></i>
      </div>
      <div class="operation-edit">
        <input type="text">
      </div>
      <button class="operation-send">发送</button>
    </div>
    <Facebread v-show="extension == 'facebread'"></Facebread>
  </section>
</template>

<script>
export default {
  name: 'InputArea',
  data () {
    return {
      extension: null
    }
  },
  methods: {
    toggleShow (extension) {
      this.extension = this.extension === extension ? null : extension
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
