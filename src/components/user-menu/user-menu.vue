<template>
  <section class="user-menu">
    <UserInfo></UserInfo>
    <Contact></Contact>
  </section>
</template>

<script>
import UserInfo from './user-info/user-info.vue'
import Contact from './contact/contact.vue'
export default {
  name: 'UserMenu',
  components: {
    UserInfo,
    Contact
  }
}
</script>

<style lang="sass" scoped>
@import './user-menu.scss'
</style>
