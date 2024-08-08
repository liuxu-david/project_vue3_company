const TOKEN_TIMEOUT_VALUE = 60 * 2 * 60 * 1000 // 2 hour

export const setTokenTimeStamp = ()=> {
    localStorage.setItem('tokenTimeStamp',Date.now())
}

const getTokenTimeStamp = () => {
  return localStorage.getItem('tokenTimeStamp')  
}

export const checkTokenTimeOut = () => {
    const currentTimeStamp = Date.now();
    return currentTimeStamp - getTokenTimeStamp() > TOKEN_TIMEOUT_VALUE
}