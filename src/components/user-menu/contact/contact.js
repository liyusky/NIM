import FriendList from './friend-list/friend-list.vue'
import SessionList from './session-list/session-list.vue'
export default {
  name: 'Contact',
  components: {
    SessionList,
    FriendList
  },
  data () {
    return {
      listShow: 'session',
      arrow: 'arrow-session'
    }
  },
  methods: {
    /**
     * @description 选择显示列表
     * @param {string} listType 列表类型
     */
    selectList (listType) {
      this.listShow = listType
    }
  }
}
