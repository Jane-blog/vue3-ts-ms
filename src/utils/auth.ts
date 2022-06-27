// 用户权限 信息存储
import Cookies from 'js-cookie'

const TokenKey = 'vue3-ts-ms-token'

export function getToken() {
  return Cookies.get(TokenKey)
}

// cookieExpires cookie保存的天数
export function setToken(token: string, cookieExpires: any) {
  Cookies.set(TokenKey, token, { expires: cookieExpires || 1 })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
