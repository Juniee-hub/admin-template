import React, { useEffect } from 'react'
import { useRouter }        from 'next/router'

import { adminAuthStore }     from '../../store/adminAuth'
import { removeLocalStorage } from '../../service/customFunction'

const AdminMain = () => {

    const isLogin = adminAuthStore((state) => state.isLogin)
    // const navigate = useNavigate()
    const router = useRouter()

    useEffect(() => {
        if (isLogin === false) {
            removeLocalStorage('adminIsLogin')
            // navigate('login')
            router.push('/webmaster/login')
        }
    })

    return (
        <>
            <h1>여긴 관리자 메인페이지</h1>
            <button
                onClick={adminAuthStore((state) => state.changeLogin)}
            >
                {isLogin ? '로그아웃' : '로그인'}
            </button>
        </>
    )
}

export default AdminMain
