import request from '@/utils/request'
// 用户获取验证码
export function need_code(data) {
  return request({
    url: '/need_code',
    method: 'post',
    data
  })
}
// 验证码
export function sendCode(data) {
  return request({
    url: '/send_code',
    method: 'post',
    data
  })
}
export function login(data) {
  return request({
    url: '/auth',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/api/v1/userInfo',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'get'
  })
}
