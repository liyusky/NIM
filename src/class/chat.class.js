import NIM from '../../NIM-SDK/NIM_Web_NIM_v5.2.1'
import { Connection } from './connection.class'
import { Synchronization } from './synchronization.class'
import { Information } from './information.class'

export default class Chat {
  nim;
  token;
  account;
  configMap = new Map([
    ['dev', ''],
    ['test', ''],
    ['pre', ''],
    ['online', 'bd632f1fc00a5c0a1af35ebf05c7f9e7']
  ]);
  environment = 'environment';
  constructor (account, token) {
    this.account = account
    this.token = token
    this.getNIM()
    return this.nim
  }

  getNIM () {
    let config = {
      appKey: this.configMap.get('online'),
      account: this.account,
      token: this.token,
      // debug: true,
      // 连接
      onconnect: Connection.connect,
      onwillreconnect: Connection.willReconnect,
      ondisconnect: Connection.disconnect,
      onerror: Connection.error,
      // 同步
      onsyncdone: Synchronization.syncDone,
      onblacklist: Synchronization.blacklist,
      onfriends: Synchronization.blacklist,
      onsessions: Synchronization.blacklist,
      // 用户资料
      onmyinfo: Information.myInfo,
      onupdatemyinfo: Information.updateMyInfo,
      onusers: Information.users,
      onupdateuser: Information.updateUser
    }
    this.nim = NIM.getInstance(config)
  }

  static getInstance () {}
}
