<template>
  <!-- s 聊天内容 -->
  <section class="session">
    <ul class="session-list">
      <li class="list-item" v-for="(session, index) in sessions" :key="index">
        <TextMessage v-if="session.type == 'text'" :session="session"></TextMessage>
        <ImageMessage v-else-if="session.type == 'image'" :session="session"></ImageMessage>
        <ReceiptMessage v-else-if="session.type == '借条'" :session="session"></ReceiptMessage>
        <IOUMessage v-else-if="session.type == '欠条'" :session="session"></IOUMessage>
        <CreditMessage v-else-if="session.type == '信用'" :session="session"></CreditMessage>
        <TransferMessage v-else-if="session.type == '转账'" :session="session"></TransferMessage>
        <BusinessCardMessage v-else-if="session.type == '名片'" :session="session"></BusinessCardMessage>
      </li>
    </ul>
    <CreditPanel v-show="showIOUPanel"></CreditPanel>
    <IOUPanel v-show="showIOUPanel"></IOUPanel>
    <ReceiptPanel v-show="showReceiptPanel"></ReceiptPanel>
  </section>
  <!-- e 聊天内容 -->

</template>

<script>
import BusinessCardMessage from './business-card-message/business-card-message.vue'
import CreditMessage from './credit-message/credit-message.vue'
import CreditPanel from './credit-panel/credit-panel.vue'
import ImageMessage from './image-message/image-message.vue'
import IOUMessage from './iou-message/iou-message.vue'
import IOUPanel from './iou-panel/iou-panel.vue'
import ReceiptMessage from './receipt-message/receipt-message.vue'
import ReceiptPanel from './receipt-panel/receipt-panel.vue'
import TextMessage from './text-message/text-message.vue'
import TransferMessage from './transfer-message/transfer-message.vue'
export default {
  name: 'Session',
  components: {
    BusinessCardMessage,
    CreditMessage,
    CreditPanel,
    ImageMessage,
    IOUMessage,
    IOUPanel,
    ReceiptMessage,
    ReceiptPanel,
    TextMessage,
    TransferMessage
  },
  data () {
    return {
      showCreditPanel: false,
      showIOUPanel: false,
      showReceiptPanel: false,
      sessions: [
        {
          type: ''
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./session.scss";
</style>
