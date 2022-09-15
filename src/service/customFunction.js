export const getLocalStorage = (key) => {
    if (typeof window !== 'undefined') {
        return window.localStorage.getItem(`${process.env.NEXT_PUBLIC_SITE_NAME}_${key}`)
    }else{
        return null
    }
}

export const setLocalStorage = (key, value) => {
    window.localStorage.setItem(`${process.env.NEXT_PUBLIC_SITE_NAME}_${key}`, value)
}

export const removeLocalStorage = (key) => {
    window.localStorage.removeItem(`${process.env.NEXT_PUBLIC_SITE_NAME}_${key}`)
}

export const clearLocalStorage = () => {
    window.localStorage.clear()
}
