export const getLocalStorage = (key) => {
    return window.localStorage.getItem(`${process.env.REACT_APP_SITE_NAME}_${key}`)
}

export const setLocalStorage = (key, value) => {
    window.localStorage.setItem(`${process.env.REACT_APP_SITE_NAME}_${key}`, value)
}

export const removeLocalStorage = (key) => {
    window.localStorage.removeItem(`${process.env.REACT_APP_SITE_NAME}_${key}`)
}

export const clearLocalStorage = () => {
    window.localStorage.clear()
}
