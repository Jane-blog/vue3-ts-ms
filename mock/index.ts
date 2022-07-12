import Mock from 'mockjs'
import { MockParams } from './types'
import api from './api'

// 需要遍历的请求
const mocks = [...api]

// 设置200-2000毫秒延时请求数据
Mock.setup({
  timeout: '200-2000'
})

// 接口拦截
export function mockRequest() {
  let i: MockParams
  for (i of mocks) {
    Mock.mock(new RegExp(i.url), i.type || 'get', i.response)
  }
}
