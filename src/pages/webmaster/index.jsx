import React         from 'react'
import { useRouter } from 'next/router'
import { getCookie } from 'cookies-next'

import { adminAuthStore } from '../../store/adminAuth'

const AdminMain = () => {

    const { isLogin, changeLogin } = adminAuthStore(state => state)
    const router = useRouter()

    return (
        <>
            <h1>여긴 관리자 메인페이지</h1>
            <button
                onClick={changeLogin}
            >
                {isLogin ? '로그아웃' : '로그인'}
            </button>
        </>
    )
}

export default AdminMain

export const getServerSideProps = ({ req, res }) => {
    const adminIsLogin = getCookie('adminIsLogin', { req, res })
    if (adminIsLogin !== true) {
        return {
            redirect: {
                permanent: false,
                destination: '/webmaster/login',
            },
            props: {},
        }
    }
    return { props: {} }
}
