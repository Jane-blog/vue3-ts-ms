import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'
import { ElNotification } from 'element-plus'

// 配置信息
const API_BASE_URL = process.env.VUE_APP_BASE_URL
const TIME_OUT = 10000

class HJRequest {
  private readonly baseURL: string
  private readonly timeout: number
  private readonly withCredentials: boolean
  constructor() {
    console.log('--API_BASE_URL--', API_BASE_URL, typeof API_BASE_URL)
    // 获取当前环境的api地址
    this.baseURL = API_BASE_URL as string
    // 请求超时时间：10秒
    this.timeout = TIME_OUT
    // 表示跨域请求时是否需要使用凭证
    this.withCredentials = true
  }
  // 初始化get请求
  getInsideConfig() {
    const config = {
      baseURL: this.baseURL,
      // 请求头配置
      headers: {
        ContentType: 'application/json'
      }
    }
    return config
  }
  // 请求拦截
  interceptors(instance: AxiosInstance, url: string) {
    console.log('----url', url)
    instance.interceptors.request.use(
      (config) => {
        // 请求头携带token
        return config
      },
      (error: any) => {
        return Promise.reject(error)
      }
    )
    // 响应拦截
    instance.interceptors.response.use(
      (res) => {
        // 返回数据
        const { data } = res
        console.log('返回数据处理', res)
        if (data.code === 0) {
          return data.data
        } else {
          ElNotification({
            title: 'Error',
            type: 'error',
            message: data.message || 'Error'
          })
        }
      },
      (error: any) => {
        console.log('error==>', error)
        ElNotification({
          title: 'Error',
          message: 'This is an error message',
          type: 'error'
        })
        return Promise.reject(error)
      }
    )
  }

  request(options: AxiosRequestConfig) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url as string)
    return instance(options)
  }
}

const http = new HJRequest()
export default http
