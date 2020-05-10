// users
export const setStorageItem = (currentItem, newItem) => {
    localStorage.setItem(currentItem, JSON.stringify(newItem))  ;
}

export const getStorageItem = (item) => {
    return JSON.parse(localStorage.getItem(item));
}

