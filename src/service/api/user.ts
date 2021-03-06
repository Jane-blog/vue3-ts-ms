import axios from '../request/index'

export function userLogin(data: any) {
  return axios.request({
    url: '/user/login',
    method: 'get',
    params: data
  })
}

export function userLogout() {
  return axios.request({
    url: '/user/logout',
    method: 'get'
  })
}
