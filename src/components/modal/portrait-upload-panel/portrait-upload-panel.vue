<template>
  <!-- s 头像上传 -->
  <section class="portrait-upload-panel">
    <div class="panel-title">头像更换</div>
    <div class="panel-show-portrait">
      <button class="portrait-select">选择图片</button>
    </div>
    <div class="panel-operations">
      <button class="operations-cancel">取消</button>
      <button class="operations-reselect">重新选择</button>
      <button class="operations-save">保存</button>
    </div>
  </section>
  <!-- e 头像上传 -->
</template>

<script>
export default {
  name: 'PortraitUploadPanel',
  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
@import "./portrait-upload-panel.scss";
</style>
