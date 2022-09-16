import React, { useEffect }     from 'react'
import { useRouter }            from 'next/router'
import { getCookie, setCookie } from 'cookies-next'

import AdminLoginBox from '../../components/webmaster/loginBox/loginBox'

const AdminLogin = () => {

    const router = useRouter()

    const goToSubmit = () => {
        setCookie('adminIsLogin', true)
        router.push('/webmaster')
    }

    return (
        <AdminLoginBox goToSubmit={goToSubmit}/>
    )
}

export default AdminLogin

export const getServerSideProps = ({ req, res }) => {
    const adminIsLogin = getCookie('adminIsLogin', { req, res })

    if (adminIsLogin === true) {
        return {
            redirect: {
                permanent: false,
                destination: '/webmaster',
            },
            props: {},
        }
    }
    return { props: {} }
}
