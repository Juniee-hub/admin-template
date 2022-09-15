import React, { useEffect } from 'react'

import { adminAuthStore }     from '../store/auth'
import { useNavigate }        from 'react-router-dom'
import { removeLocalStorage } from '../service/customFunction'

const AdminMain = () => {

    const isLogin = adminAuthStore((state) => state.isLogin)
    const navigate = useNavigate()

    useEffect(() => {
        if (isLogin === false) {
            removeLocalStorage('adminIsLogin')
            navigate('login')
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
