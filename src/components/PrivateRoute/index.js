import { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import globalStore from '../../store/globalStore'

class PrivateRoute extends Component {

  componentDidMount () {
    console.log(this)
  }
  render () {
    const {...rest } = this.props
    const { isLogin } = globalStore
    const Cmp = this.props.children
    console.log(isLogin, globalStore, 'privateRouter')
    return (
      isLogin ? 
        <Route
          {...rest}
          component={Cmp}
        /> :
        <Redirect to={{pathname: '/login'}}></Redirect>
    )
  }
}

export default PrivateRoute