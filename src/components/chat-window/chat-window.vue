<template>
  <!-- s 聊天区域 -->
  <section class="chat-window" id="chat-window">
    <MenuBar></MenuBar>
    <Session></Session>
    <InputArea></InputArea>
  </section>
  <!-- e 聊天区域 -->
</template>

<script>
import MenuBar from './menu-bar/menu-bar.vue'
import Session from './session/session.vue'
import InputArea from './input-area/input-area.vue'
export default {
  name: 'ChatWindow',
  components: {
    MenuBar,
    Session,
    InputArea
  }
}
</script>

<style lang="sass" scoped>
@import "./chat-window.scss";
</style>
