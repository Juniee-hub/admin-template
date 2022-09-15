import React, { useEffect } from 'react'

import { adminAuthStore }  from '../store/auth'
import { useNavigate }     from 'react-router-dom'
import { setLocalStorage } from '../service/customFunction'

const AdminLogin = () => {

    const isLogin = adminAuthStore((state) => state.isLogin)

    const navigate = useNavigate()
    useEffect(() => {
        if (isLogin === true) {
            setLocalStorage('adminIsLogin',true)
            navigate('..')
        }
    })

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
