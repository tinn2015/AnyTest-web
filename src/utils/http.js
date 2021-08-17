import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  Redirect,
  // useHistory,
  // useLocation
} from "react-router-dom";
import globalStore from '../store/globalStore'


const instance = axios.create({
  baseURL: 'http://localhost:3002/api/',
  timeout: 5000,
  headers: {
    'Authorization': localStorage.getItem('Authorization')
  },
  withCredentials: true
});

const urls = {
  login: '/login',
  logout: '/private/logout',
  uploadFile: '/private/uploadFile',
  getFileList: '/private/getFileList',
  delete: '/private/delete',
  cookie: '/private/cookie',
}

function request (url, params) {
  if (localStorage.getItem('Authorization')) {
    instance.defaults.headers['Authorization'] = localStorage.getItem('Authorization')
  }
  return new Promise((resolve, reject) => {
    instance.post(url, params).then((response) => {
      console.log(response)
      if (response.data.code === 401) {
        globalStore.setLoginStatus(false)
        window.location.href = window.location.origin + '/login'
      }
      if (response.headers['www-authenticate']) {
        localStorage.setItem('Authorization', response.headers['www-authenticate'])
        globalStore.setLoginStatus(true)
      }
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export const login = (params) => {
  return request(urls.login, params)
}

export const logout = (params) => {
  return request(urls.logout, params)
}

export const uploadFile = (params) => {
  return request(urls.uploadFile, params)
}

export const getFileList = (params) => {
  return request(urls.getFileList, params)
}
export const deleteFile = (params) => {
  return request(urls.delete, params)
}
export const getCookie = (params) => {
  return request(urls.cookie, params)
}