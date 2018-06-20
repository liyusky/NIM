<template>
  <section class="nim-panel">
    <UserMenu></UserMenu>
    <ChatWindow></ChatWindow>
    <CreditReport></CreditReport>
  </section>
</template>

<script>
import UserMenu from './components/user-menu/user-menu.vue'
import ChatWindow from './components/chat-window/chat-window.vue'
import CreditReport from './components/credit-report/credit-report.vue'
export default {
  name: 'Nim',
  components: {
    UserMenu,
    ChatWindow,
    CreditReport
  }
}
</script>

<style lang="sass" scoped>
@import "./Nim.scss";
</style>
