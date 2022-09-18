import React, { useEffect } from 'react'

import styles        from '../common/theme.module.css'
import { getCookie } from 'cookies-next'

const useTheme = () => {

    //@Todo 테마 정보 저장 로직 필요...

    useEffect(() => {
        const adminTheme = getCookie('adminTheme')

        const body = document.querySelector('body')
        const bodyClass = (adminTheme === 'white') ? `${styles.whiteWrap}` : `${styles.darkWrap}`
        document.body.classList.add(bodyClass)
        return () => {
            body.classList.remove(bodyClass)
        }
    })

    return {}
}

export default useTheme
