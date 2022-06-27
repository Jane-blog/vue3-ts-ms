const tokens = {
  admin: {
    password: 123456,
    token: 'admin-token'
  },
  editor: {
    password: 123456,
    token: 'editor-token'
  }
}

// get请求从config.url获取参数，post从config.body中获取参数
function paramObj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  )
}

const api = [
  // 登陆接口
  {
    url: '/user/login',
    type: 'get',
    response: (config) => {
      const { username } = paramObj(config.url)
      const token = tokens[username]
      if (token) {
        return {
          code: 0,
          message: '操作成功',
          data: {
            token: token
          }
        }
      }
      return {
        code: 1,
        message: '用户信息错误，请重试~',
        data: {}
      }
    }
  }
]

export default api
