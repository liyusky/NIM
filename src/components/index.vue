<template>
  <div class="index-box">
    <div class="bg-image">
      <img src="/static/img/bg_page.png" alt="">
    </div>
    <div class="container">
      <div class="content">

        <header class="header">
          <div class="title">
            <img class="use-head-img" src="/static/img/default-icon.png" alt="">
            <span class="usename" id="usename">曹俊5</span>
            <img class="title-update" src="/static/img/pen.png" alt="">
          </div>
          <div class="search-box">
            <span class="search-icon glyphicon glyphicon-search"></span>
            <input class="search-input" id="search-input" type="text" placeholder="搜索">
          </div>
        </header>

        <div class="main">

          <div class="main-panel">
            <div class="tab-item"  @click="messageTab">
              <img :src="msgImg" alt="">
              <div class="panel-badge" :class="{active:!imgOnoff}">
                <div class="badge-bottom">
                  <b class="top"><i class="top-arrow1"></i><i class="top-arrow2"></i></b>
                </div>
              </div>
            </div>
            <div class="tab-item" @click="contactTab">
              <img :src="contactImg" alt="">
              <div class="panel-badge" :class="{active:imgOnoff}">
                <div class="badge-bottom">
                  <b class="top"><i class="top-arrow1"></i><i class="top-arrow2"></i></b>
                </div>
              </div>
            </div>
          </div>

          <div class="panel-message" :class="{active:!imgOnoff}">
            <!-- 最近联系人 -->
            <div class="message-item message-center">
              <img src="/static/img/notice.png" alt="">
              <span>消息中心</span>
            </div>
            <div class="message-item message-add">
              <img src="/static/img/addFriend.png" alt="">
              <span>添加好友</span>
            </div>
            <!-- 接收消息 -->
            <div class="accept-message">
              <span class="no-message">暂无最近联系人哦</span>
            </div>
          </div>

          <!-- 联系人 -->
          <div class="panel-contact" :class="{active:imgOnoff}">
            <div class="blacklist">
              <img src="/static/img/black.png" alt="">
              <span class="contact-txt">黑名单</span>
            </div>
            <div class="contact-list">
              <div class="contact-item">
                <img src="/static/img/default-icon.png" alt="">
                <span class="contact-item-name">张三(187758026)</span>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import jquery from "jquery";
import "../../static/lib/js/bootstrap.js";
export default {
  name: "index",
  data() {
    return {
      msgImg: "/static/img/tab01.png",
      contactImg: "/static/img/tab04.png",
      imgOnoff: true
    };
  },
  methods: {
    messageTab() {
      this.imgOnoff = true;
      if (this.imgOnoff) {
        this.msgImg = "/static/img/tab01.png";
        this.contactImg = "/static/img/tab04.png";
      }
    },
    contactTab() {
      this.imgOnoff = false;
      if (!this.imgOnoff) {
        this.contactImg = "/static/img/tab02.png";
        this.msgImg = "/static/img/tab03.png";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../static/lib/css/bootstrap.css";

.index-box {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.bg-image {
  height: 100%;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
  }
}
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.content {
  width: 260px;
  height: 650px;
  border: 1px solid #000;
  border-radius: 5px;
  background: #fff;
  margin-top: 100px;
  margin-left: 100px;
}
.header {
  width: 100%;
  height: 110px;
  background: #e5f4ff;
  .title {
    width: 100%;
    height: 80px;
    line-height: 80px;
    .use-head-img {
      height: 56px;
      width: 56px;
      margin-left: 14px;
      margin-right: 10px;
    }
    .usename {
      line-height: 80px;
      color: #666;
      font-size: 12px;
    }
    .title-update {
      margin-top: -3px;
    }
  }
  .search-box {
    width: 248px;
    height: 24px;
    border: 1px solid #1bb8f9;
    margin-left: 6px;
    margin-right: 6px;
    margin-bottom: 6px;
    box-sizing: border-box;
  }
  .search-icon {
    display: inline-block;
    float: left;
    width: 30px;
    height: 22px;
    text-align: center;
    line-height: 22px;
    color: #666666;
    font-weight: normal;
  }
  .search-input {
    float: left;
    width: 216px;
    outline: none;
    border: none;
    height: 22px;
    text-indent: 1em;
    line-height: 22px;
    font-size: 12px;
  }
}
.main {
  width: 100%;
  .active {
    display: none;
  }
}
.main-panel {
  width: 100%;
  height: 34px;
  border-bottom: 1px solid #ced4d9;
  border-top: 1px solid #ced4d9;
  .tab-item {
    display: inline-block;
    width: 49%;
    height: 100%;
    text-align: center;
    line-height: 34px;
    position: relative;
    img {
      width: 16px;
      height: 16px;
      margin-top: -5px;
    }
    .panel-badge {
      position: absolute;
      bottom: 0;
      left: 50%;
      .badge-bottom {
        position: relative;
        .top {
          width: 14px;
          height: 14px;
          position: absolute;
          left: -7px;
          top: -12px;
          z-index: 2; /*兼容ie8-*/
        }
        .top-arrow1,
        .top-arrow2 {
          width: 0;
          height: 0;
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 5; /*兼容ie8-*/
          border-top: 6px transparent dashed;
          border-left: 6px transparent dashed;
          border-right: 6px transparent dashed;
          // border-bottom:10px white solid;
          overflow: hidden;
        }
        .top-arrow1 {
          border-bottom: 6px #ced4d9 solid;
        }
        .top-arrow2 {
          top: 1px; /*重要*/
          border-bottom: 6px white solid;
        }
      }
    }
  }
}
.panel-message {
  width: 100%;
  .message-item {
    border-bottom: 1px solid #eaeeef;
    overflow: hidden;
    height: 57px;
    padding: 8px 10px;
    box-sizing: border-box;
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
      vertical-align: top;
    }
    span {
      height: 40px;
      line-height: 40px;
      color: #3a4a59;
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-left: 20px;
    }
  }
  .accept-message {
    width: 100%;
    .no-message {
      font-size: 12px;
      color: #3a4a59;
    }
  }
}
.panel-contact {
  width: 100%;
  .blacklist {
    border-bottom: 1px solid #eaeeef;
    overflow: hidden;
    height: 57px;
    padding: 8px 10px;
    box-sizing: border-box;
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
    }
    .contact-txt {
      margin-left: 20px;
    }
  }
  .contact-list {
    width: 100%;
    overflow: auto;
    .contact-item {

      border-bottom: 1px solid #eaeeef;
      overflow: hidden;
      height: 57px;
      padding: 8px 10px;
      box-sizing: border-box;
      cursor: pointer;
      img{
        height: 40px;
        width: 40px;
      }
      .contact-item-name{
        margin-left: 20px;
        font-size: 12px;
        color: #3a4a59;
      }
    }
  }
}
</style>
