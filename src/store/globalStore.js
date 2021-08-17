import {makeObservable, observable, action, autorun, computed} from 'mobx'

class GlobalStore {
  isLogin = window.localStorage.getItem('Authorization') ? true : false

  constructor () {
    makeObservable(this, {
      isLogin: observable,
      setLoginStatus: action
    });
  }

  setLoginStatus (flag) {
    this.isLogin = flag
    if (!flag) {
      window.localStorage.removeItem('Authorization')
    }
  }

}

export default new GlobalStore()