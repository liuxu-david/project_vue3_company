// 用来操作本地数据的工具函数

export const setItem = (key, value) => {
  if (typeof value === 'object' && value !== null) {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}

export const getItem = (key) => {
  const value = localStorage.getItem(key);
  if (value){
    return JSON.parse(value)
  }
}

export const removeItem = (key) => {
  localStorage.removeItem(key)
}

export const clearAllItem = () => {
  localStorage.clear()
}