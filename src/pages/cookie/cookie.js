import { Component } from 'react'
import {Button, message} from 'antd'
import { getCookie } from '../../utils/http'

class Cookie extends Component {
  getCookie = () => {
    getCookie().then(() => {
      message.success('cookie 下发成功')
    })
  }
  render () {
    return (<div className="mt40">
      <div className="handles flex jc-sb">
        <Button onClick={this.getCookie}>模拟登录</Button>
      </div>
    </div>)
  }
}

export default Cookie