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
        <div class="header-record" @click="showRecordEvent">
          <img src="../../../../static/img/recode.png">
          <p class="record-title">云记录</p>
        </div>
      </div>
      <div v-show="headerShow" class="content-header-hide">
        <div class="hide-button" @click="closeRecordEvent">返回</div>
        <p>云记录</p>
      </div>
      <section class="content-panel">
        <div v-show="!headerShow" class="panel-record">
          <p class="record-time">- - - - 10:06 - - - -</p>
          <div class="record-mine">
            <img src="../../../../static/img/default-icon.png">
            <p class="mine-message">hello</p>
          </div>
          <p class="record-time">- - - - 11:06 - - - -</p>
          <div class="record-opposite">
            <img src="../../../../static/img/default-icon.png">
            <p class="opposite-message">hello</p>
          </div>
        </div>
        <div v-show="headerShow" class="panel-history">
          <div class="history-more-records">
            <span>没有更早的聊天记录了</span>
          </div>
          <p class="history-time">- - - - 10:06 - - - -</p>
          <div class="history-mine">
            <img src="../../../../static/img/default-icon.png">
            <p class="mine-message">hello</p>
          </div>
          <div class="history-opposite">
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
        <div class="send-telephone" @click="videoSelectEvent">

        </div>
        <div class="send-video" @click="videoSelectEvent">

        </div>
        <div class="send-message">
          <textarea class="message-text" name="message" id="message" rows="1" maxlength="500" @blur="blurEvent" @click="clickEvent"></textarea>
          <ul v-show="markedShow" class="message-marked-list">
            <li class="item">你好，在吗！</li>
            <li class="item">晚安！</li>
            <li class="item">再见！</li>
            <li class="item">吃饭了吗！</li>
            <li class="item">拜拜！</li>
            <li class="item">拜拜！</li>
            <li class="item">拜拜！</li>
          </ul>
        </div>
        <div class="send-button">
          <span>发送</span>
        </div>
        <selectTechnology v-show="videoSelectShow" @closeSelectEvent="closeSelect" :videoSelectShow="videoSelectShow"></selectTechnology>
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
  import selectTechnology from '@/components/common/select-technology/select-technology.vue'
  export default {
    data() {
      return {
        headerShow: false,
        videoSelectShow: false,
        markedShow:false
      }
    },
    methods: {
      showRecordEvent() {
        this.headerShow = true;
      },
      closeRecordEvent() {
        this.headerShow = false;
      },
      videoSelectEvent() {
        this.videoSelectShow = true;
      },
      closeSelect(){
        this.videoSelectShow=false;
      },
      blurEvent(){
        this.markedShow=false;
      },
      clickEvent(){
        this.markedShow= !this.markedShow;
      },
    },
    components: {
      selectTechnology
    }
  }

</script>

<style scoped lang="scss">
  @import '../../scss/chat-room/chat-room.scss';

</style>
