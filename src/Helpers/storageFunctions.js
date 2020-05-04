
export const setUserInLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user))  ;
}

export const getUserFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('user'));
}

export const isUserExist = () => {
    return localStorage.getItem('user') === null
}