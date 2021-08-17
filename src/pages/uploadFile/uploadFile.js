import React, {Component} from 'react'
import {Button} from 'antd'
import {DeleteTwoTone, DownloadOutlined} from "@ant-design/icons"
import { uploadFile, getFileList, deleteFile } from '../../utils/http'

import './uploadFile.css'

class UploadFile extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
      list: []
    }
  }

  componentDidMount () {
    this.getList()
  }

  getList = () => {
    getFileList().then((res) => {
      console.log('getFileList', res)
      this.setState({
        list: res.data.list
      })
    })
  }

  selectFile = () => {
    this.myRef.current.click()
  }
  upload = (e) => {
    console.log(e)
    const file = e.target.files[0]
    // const reader = new FileReader()
    const form = new FormData()
    form.append('file', file)
    uploadFile(form).then(() => {
      this.getList()
    })
  }

  deleteFile =  (filePath) => {
    deleteFile({filePath}).then(() => {
      this.getList()
    })
  }

  downloadFile = (url) => {
    window.open(url)
  }

  render () {
    return (
      <div>
        <div className="mt40 flex jc-c ai-c">
          <Button type="primary" onClick={this.selectFile}>上传文件</Button>
          <input ref={this.myRef} className="display-none" type="file" onChange={this.upload} />    
        </div>
        <div className="list mt40">
          {
            this.state.list.map((i) => {
              return <div className="list-item flex jc-sb">
                <div className="name">{i.name}</div>
                <div className="handles pointer">
                  <DownloadOutlined onClick={() => {this.downloadFile(i.url)}}/>
                  <DeleteTwoTone onClick={() => {this.deleteFile(i.path)}}/>
                </div>
              </div>
            })
          }
        </div>
      </div>
    )
  }
}

export default UploadFile
