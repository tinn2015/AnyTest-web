import { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  Redirect,
  // useHistory,
  // useLocation
} from "react-router-dom";
import { observer, inject } from 'mobx-react'
// import globalStore from './store/index'
import PrivateRoute from './components/PrivateRoute/'
import Login from './pages/login'
import Panel from './pages/panel'
import Cookie from './pages/cookie/cookie'
import UploadFile from './pages/uploadFile/uploadFile'
import Socket from './pages/socket/socket'
import Gzip from './pages/gzip/gzip'
import { Button } from 'antd'
import { logout } from './utils/http'
import './App.css';

@inject('globalStore')
@observer
class App extends Component {

  componentDidUpdate () {
    console.log('mountex', this.props.globalStore)
  }

  logout = () => {
    logout().then(() => {
      this.props.globalStore.setLoginStatus(false)
      window.location.href = window.location.origin + '/login'
    })
  }
  
  render () {
    const {isLogin} = this.props.globalStore
    console.log(isLogin, 'app')
    return (
      <div className="App wh-full">
        <Router>
          <div className="home">
            {
              isLogin ? <div>已登录<Button onClick={this.logout} type="link" size="small">【退出】</Button></div> : null
            }
            {
              isLogin ? <Redirect to="/panel"/> :
              <Redirect to="/login"/>
            }
          </div>
          <Switch>
              <Route path="/login"><Login /></Route>
              <PrivateRoute path="/panel">
                <Panel/>
              </PrivateRoute>
              <PrivateRoute path="/cookie">
                <Cookie/>
              </PrivateRoute>
              <PrivateRoute path="/uploadFile">
                <UploadFile/>
              </PrivateRoute>
              <PrivateRoute path="/socket">
                <Socket/>
              </PrivateRoute>
              <PrivateRoute path="/gzip">
                <Gzip/>
              </PrivateRoute>
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
