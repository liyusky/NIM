<template>
  <section class="nim-panel">
    <UserMenu></UserMenu>
    <ChatWindow></ChatWindow>
  </section>
</template>

<script>
import UserMenu from './components/user-menu/user-menu.vue'
import ChatWindow from './components/chat-window/chat-window.vue'
export default {
  name: 'Nim',
  components: {
    UserMenu,
    ChatWindow
  }
}
</script>

<style lang="sass" scoped>
@import "./Nim.scss";
</style>
