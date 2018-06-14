<template>
  <!-- s home -->
  <div class="home">
    <!-- s bg-image -->
    <div class="bg-image">
      <img src="/static/img/bg_page.png">
    </div>
    <!-- e bg-image -->
    <!-- s home-container -->
    <div class="home-container">
      <div class="home-content">
        <!-- s header -->
        <header class="header">
          <div class="header-title">
            <img class="title-portrait" src="../../static/img/default-icon.png">
            <span class="title-username" id="usename">曹俊5</span>
            <img class="title-update" src="../../static/img/pen.png" @click="openInformation">
          </div>
          <div class="header-search">
            <span class="search-icon"></span>
            <input v-model="searchText" class="search-input" id="search-input" type="text" placeholder="搜索" @input="searchContact">
          </div>
        </header>
        <!-- e header -->
        <!-- s section -->
        <section class="section">
          <!-- s section-tab -->
          <div class="section-tab">
            <div class="tab-item" @click="messageTab">
              <img :src="msgImg">
              <div class="item-badge" :class="{show:!imgOnoff}">
                <div class="badge-bottom">
                  <b class="badge-top">
                    <i class="top-arrow-first"></i>
                    <i class="top-arrow-second"></i>
                  </b>
                </div>
              </div>
            </div>
            <div class="tab-item" @click="contactTab">
              <img :src="contactImg">
              <div class="item-badge" :class="{show:imgOnoff}">
                <div class="badge-bottom">
                  <b class="badge-top">
                    <i class="top-arrow-first"></i>
                    <i class="top-arrow-second"></i>
                  </b>
                </div>
              </div>
            </div>
          </div>
          <!-- e section-tab -->
          <!-- s section-panel -->
          <div class="section-panel">
            <!-- s panel-message -->
            <div class="panel-message" :class="{show:!imgOnoff}">
              <div class="message-item">
                <img src="../../static/img/notice.png">
                <span>消息中心</span>
              </div>
              <div class="message-item">
                <img src="../../static/img/addFriend.png">
                <span>添加好友</span>
              </div>
              <div v-show="messageShow" class="message-accept">
                <div class="accept-item">
                  <img class="item-portrait" src="../../static/img/default-icon.png">
                  <div class="item-detail">
                    <p class="detail-title">
                      <span class="title-username">用户名字</span>
                      <span class="title-time">一天前</span>
                    </p>
                    <p class="detail-news">
                      <span class="news-content">hello</span>
                    </p>
                  </div>
                </div>
              </div>
              <div v-show="!messageShow" class="message-no-contact">暂无最近联系人哦</div>
            </div>
            <!-- e panel-message -->
            <!-- s panel-message -->
            <div class="panel-contact" :class="{show:imgOnoff}">
              <div class="contact-blacklist">
                <img src="../../static/img/black.png">
                <span class="blacklist-text">黑名单</span>
              </div>
              <div class="contact-list">
                <div class="contact-item">
                  <img src="../../static/img/default-icon.png">
                  <span class="contact-item-name">张三(187758026)</span>
                </div>
              </div>
            </div>
            <!-- e message -->
          </div>
          <!-- s section-panel -->
        </section>
        <!-- e section -->
      </div>
    </div>
    <!-- e container -->
    <information v-show="informationShow" @closeInformation="closeInfor"></information>
    <chatroom></chatroom>
  </div>
  <!-- e home -->
</template>
<script>
  import information from '@/components/common/information/information'
  import chatroom from '@/components/common/chat-room/chat-room'
  export default {
    name: 'index',
    data() {
      return {
        msgImg: '../../static/img/tab01.png',
        contactImg: '../../static/img/tab04.png',
        imgOnoff: true,
        informationShow: false,
        shadeShow: false,
        searchText:'',
        messageShow:true
      }
    },
    methods: {
      messageTab() {
        this.imgOnoff = true;
        if (this.imgOnoff) {
          this.msgImg = '../../static/img/tab01.png';
          this.contactImg = '../../static/img/tab04.png';
        }
      },
      contactTab() {
        this.imgOnoff = false;
        if (!this.imgOnoff) {
          this.contactImg = '../../static/img/tab02.png';
          this.msgImg = '../../static/img/tab03.png';
        }
      },
      // 打开关闭修个个人信息面板
      closeInfor() {
        this.shadeShow = false;
        this.informationShow = false;
      },
      openInformation() {
        this.informationShow = true;
        this.shadeShow = true;
      },
      // 搜索联系人
      searchContact(){
        
      },
    },
    components: {
      information,
      chatroom
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import './scss/home/home.scss';
</style>
