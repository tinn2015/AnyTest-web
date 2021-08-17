import { Component } from 'react'
import { observer } from 'mobx-react'
import store from '../../store'


@observer
class Header extends Component {
  render () {
    const { globalStore } = store
    console.log(globalStore, globalStore.isLogin, 'header login')
    return (
      <div style={{color: 'red'}}>登录状态： {globalStore.isLogin ? '已登录' : '未登录'}</div>
    )
  }
}

export default Header