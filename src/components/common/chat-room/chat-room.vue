<template>
  <div class="chat-room">
    <div class="room-content">
      <div v-show="!headerShow" class="content-header">
        <div class="header-detail">
          <div class="detail-portrait">
            <img src="../../../../static/img/default-icon.png">
          </div>
          <div class="detail-title">
            <span class="title-username">用户名</span>
            <span class="title-login-status">[离线]</span>
          </div>
        </div>
        <div class="header-record">
          <img src="../../../../static/img/recode.png">
          <p class="record-title">云记录</p>
        </div>
      </div>
      <div v-show="headerShow" class="content-header-hide">
        <div class="hide-button">返回</div>
        <p>云记录</p>
      </div>
      <section class="content-panel">
        <div class="panel-record">
          <p class="record-time">- - - - 10:06 - - - -</p>
          <div class="record-mine">
            <img src="../../../../static/img/default-icon.png">
            <p class="mine-message">hello</p>
          </div>
          <div class="record-opposite">
            <img src="../../../../static/img/default-icon.png">
            <p class="opposite-message">hello</p>
          </div>
        </div>
      </section>

      <footer class="content-send">
        <div class="send-expression">
          <div class="expression-package">
          </div>
        </div>
        <div class="send-picture">

        </div>
        <div class="send-telephone">

        </div>
        <div class="send-video">

        </div>
        <div class="send-message">
          <textarea class="message-text" name="message" id="message" rows="1" maxlength="500"></textarea>
        </div>
        <div class="send-button">
          <span>发送</span>
        </div>
      </footer>
    </div>
    <div class="room-reports">
      <div class="reports-header">
        <p>借条大师信息报告</p>
      </div>
      <div class="reports-content">

      </div>
      <div class="reports-footer">
        <p>最长逾期时间为天</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        headerShow: false
      }
    },
    methods: {

    },
  }

</script>

<style scoped lang="scss">
  @import '../../scss/chat-room/chat-room.scss';

</style>
