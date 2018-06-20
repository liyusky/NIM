<template>
  <section class="contact">
    <nav class="contact-nav">
      <div class="nav-item" @click="selectList('session')">
        <i></i>
        <div class="item-arrow" v-show="listShow == 'session'">
          <div class="badge-bottom">
            <b class="badge-top">
              <i class="top-arrow-first"></i>
              <i class="top-arrow-second"></i>
            </b>
          </div>
        </div>
      </div>
      <div class="nav-item"  @click="selectList('friend')">
        <i></i>
        <div class="item-arrow" v-show="listShow == 'friend'">
          <div class="badge-bottom">
            <b class="badge-top">
              <i class="top-arrow-first"></i>
              <i class="top-arrow-second"></i>
            </b>
          </div>
        </div>
      </div>
    </nav>
    <SessionList v-show="listShow == 'session'"></SessionList>
    <FriendList v-show="listShow == 'friend'"></FriendList>
  </section>
</template>

<script>
import Contact from './contact.js'
export default Contact
</script>

<style lang="sass" scoped>
@import './contact.scss'
</style>
