import store from '../store/index'
export class Information {
  static myInfo (user) {
    store.commit('getUser', user)
  }

  static updateMyInfo () {

  }

  static users () {

  }

  static updateUser () {

  }
}
