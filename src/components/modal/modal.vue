<template>
  <!-- s 模态框 -->
  <section class="modal">
    <AddFriendsPanel v-show="false"></AddFriendsPanel>
    <BankListPanel v-show="false"></BankListPanel>
    <CustomerInfoPanel v-show="false"></CustomerInfoPanel>
    <MagnifyingGlassPanel v-show="false"></MagnifyingGlassPanel>
    <PortraitUploadPanel v-show="false"></PortraitUploadPanel>
  </section>
  <!-- e 模态框 -->
</template>

<script>
import AddFriendsPanel from './add-friends-panel/add-friends-panel.vue'
import BankListPanel from './bank-list-panel/bank-list-panel.vue'
import CustomerInfoPanel from './customer-info-panel/customer-info-panel.vue'
import MagnifyingGlassPanel from './magnifying-glass-panel/magnifying-glass-panel.vue'
import PortraitUploadPanel from './portrait-upload-panel/portrait-upload-panel.vue'
export default {
  name: 'Modal',
  components: {
    AddFriendsPanel,
    BankListPanel,
    CustomerInfoPanel,
    MagnifyingGlassPanel,
    PortraitUploadPanel
  }
}
</script>

<style lang="sass" scoped>
@import "./modal.scss";
</style>
