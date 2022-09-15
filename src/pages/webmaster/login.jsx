import React, { useEffect } from 'react'
import { useRouter }       from 'next/router'

import { adminAuthStore }  from '../../store/adminAuth'
import { setLocalStorage } from '../../service/customFunction'

const AdminLogin = () => {

    const isLogin = adminAuthStore((state) => state.isLogin)
    const router = useRouter()
    useEffect(() => {
        if (isLogin === true) {
            setLocalStorage('adminIsLogin', true)
            router.push(`/${process.env.NEXT_PUBLIC_ADMIN_NAME}`)
        }
    },[isLogin])

    return (
        <>
            <h1>
                관리자 로그인 페이지
            </h1>
            <button
                onClick={adminAuthStore((state) => state.changeLogin)}
            >
                {isLogin ? '로그아웃' : '로그인'}
            </button>
        </>
    )
}

export default AdminLogin
