/**
 * 判断是否为外部资源
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 判断对象object是否为空
 */
export function isEmptyObject(obj) {
  for (var key in obj) {
    return false
  }
  return true
}

export function setCache(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export function getCache(key) {
  const value = window.localStorage.getItem(key)
  if (value) {
    return JSON.parse(value)
  }
}

export function deleteCache(key) {
  window.localStorage.removeItem(key)
}

export function clearCache() {
  window.localStorage.clear()
}