import {Component} from 'react'
import { Tag } from 'antd';
import { getRandomColor } from '../../utils'
import { Link } from 'react-router-dom'
import store from '../../store'

import './index.css'

class Panel extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    console.log('panel', store)
  }

  render () {
    return (
      <div>
        <div className="title text-center">前后端接口测试</div>
          <ul className="mt40 flex jc-sb wrap">
            <li className="mr40"><Link to="/cookie"><Tag className="ft24 my-tag text-center pointer" color={getRandomColor()}>cookie</Tag></Link></li>
            <li className="mr40"><Link to="/uploadFile"><Tag className="ft24 my-tag text-center pointer" color={getRandomColor()}>文件上传</Tag></Link></li>
            <li className="mr40"><Link to="/socket"><Tag className="ft24 my-tag text-center pointer" color={getRandomColor()}>web socket</Tag></Link></li>
            <li className="mr40"><Link to="/gzip"><Tag className="ft24 my-tag text-center pointer" color={getRandomColor()}>开启gzip</Tag></Link></li>
          </ul>
      </div>
    )
  }
}

export default Panel