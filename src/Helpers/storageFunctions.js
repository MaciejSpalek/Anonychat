
export const setTokenInLocalStorage = (tempToken) => {
    localStorage.setItem('token', tempToken)  
}

export const getTokenFromLocalStorage = () => {
    return localStorage.getItem('token')
}

export const isLocalStorageEmpty = () => {
    return localStorage.getItem('token') === null
}