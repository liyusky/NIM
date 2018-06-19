<template>
  <div class="select-technology">
    <div class="technology-contnet">
      <div class="content-header">
        <p class="header-title">选择技术方案</p>
        <img src="../../../../static/img/closebtn.png" @click="closeSelectEvent">
      </div>

      <div class="content-select">
        <h2 class="select-title">请选择一种技术方案</h2>
        <div class="select-web">
          <div class="web-title" @click="showSwitchEvent">
            <div class="title-radio" :class="{showradio:!radioShow}">
              <i></i>
            </div>
            <p class="title-text">WebRTC(支持Chrome浏览器)</p>
          </div>
          <p class="web-content">
            WebRTC是一个支持网页浏览器进行实时语音、视频通话的开源技术，优点是不需要安装任何插件，即开即用，支持Mac OS和Windows。缺点是目前适配的浏览器有限。支持Chrome54+版本
          </p>
          <p class="web-annotation">
            注：其他国内使用chrome内核的浏览器由于内核版本，自身支持条件不同，可能接通WebRTC，也可能失败，目前我们没有做验证
          </p>
        </div>
        <div class="select-pc">
          <div class="pc-title" @click="closeSwitchEvent">
            <div class="title-radio" :class="{showradio:radioShow}">
              <i></i>
            </div>
            <p class="title-text">PC Agent(支持Win7/10系统，Chrome、IE11/Edge浏览器)</p>
          </div>
          <p class="pc-content">
            PC Agent是一种插件方案，核心在于需要在本地安装一个音视频插件，优点是支持的浏览器较多，包括Chrome55以上，IE11和Edge最新版本。缺点是只支持Windows系统且需要安装插件。
          </p>
          <div v-show="radioShow" class="pc-switch" @click="switchEvent">
            <div class="switch-radio" :class="{showSwitch:switchShow}">
              <i></i>
            </div>
            <p>WebRTC兼容开关(如果被叫方使用WebRTC，请打开此开关。否则不建议打开此开关，会影响通话质量。)</p>
          </div>
        </div>
      </div>

      <div class="content-sure">
        <div class="sure-button">确定</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['videoSelectShow'],
    data() {
      return {
        radioShow: false,
        switchShow: false
      }
    },
    mounted() {
      this.radioShow = this.videoSelectShow;
      console.log(this.radioShow);
    },
    methods: {
      closeSelectEvent() {
        this.$emit('closeSelectEvent');
      },
      showSwitchEvent() {
        this.radioShow = false;
      },
      closeSwitchEvent() {
        this.radioShow = true;
      },
      switchEvent() {
        this.switchShow = !this.switchShow;
      }
    }
  }

</script>
<style scoped lang="scss">
  @import '../../scss/select-technology/select-technology.scss';

</style>
