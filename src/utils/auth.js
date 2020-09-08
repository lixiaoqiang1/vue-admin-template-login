import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
// 获取导航菜单1
export function getRole() {
  let role = Cookies.get('role-mi')
  if (role) {
    role = JSON.parse(role)
  } else {
    role = []
  }
  return role
}

// 储存导航菜单
export function setRole(role) {
  return Cookies.set('role-mi', role)
}

// 删除导航菜单
export function removeRole() {
  return Cookies.remove('role-mi')
}

// 获取存储数据
export function getIdaaa() {
  return Cookies.get('ida')
}

// 创建存储
export function setIdaaa(idaaa) {
  return Cookies.set('ida', idaaa, { expires: 1 })
}
// 删除
export function removeIdaaa() {
  return Cookies.remove('ida')
}