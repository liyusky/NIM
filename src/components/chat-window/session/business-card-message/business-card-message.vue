<template>
  <!-- s 个人名片信息 -->
  <section class="business-card-message">
    <div class="message-detail">
      <div class="detail-portrait">
        <img :src="session.portrait">
      </div>
      <div class="detail-archives">
        <p class="archives-name"></p>
        <p class="archives-id">
          <span>账号：</span>
          <span>{{session.account}}</span>
        </p>
      </div>
    </div>
    <div class="message-origin">借条大师-个人名片</div>
  </section>
  <!-- e 个人名片信息 -->
</template>

<script>
export default {
  name: 'BusinessCardMessage',
  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
@import "./business-card-message.scss";
</style>
