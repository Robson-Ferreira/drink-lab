export const getParams = (url, others) => {
  let params = ''
  if (others) {
    let value = ''
    if (Array.isArray(others)) {
      value = `/${others[0]}`
      params = this._setParams(others[1], value)
    } else {
      params = this._setParams(others, value)
    }
  }
  return `${url}${params}`
}