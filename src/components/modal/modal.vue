<template>
  <!-- s 模态框 -->
  <section class="model">
    <AddFriendsPanel></AddFriendsPanel>
    <BankListPanel></BankListPanel>
    <CustomerInfoPanel></CustomerInfoPanel>
    <MagnifyingGlassPanel></MagnifyingGlassPanel>
    <PortraitUploadPanel></PortraitUploadPanel>
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
