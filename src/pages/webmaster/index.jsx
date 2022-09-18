import React         from 'react'
import { useRouter } from 'next/router'
import { getCookie } from 'cookies-next'

import { adminAuthStore } from '../../store/adminAuth'
import AdminHeader        from '../../components/webmaster/header/header'
import AdminLeftPanel     from '../../components/webmaster/pannels/leftPanels/leftPanel'
import AdminRightPanel    from '../../components/webmaster/pannels/rightPanels/rightPanel'
import AdminDashboard     from '../../components/webmaster/dashboard/dashboard'
import useTheme           from '../../hooks/useTheme'
import AdminBottomPanel   from '../../components/webmaster/pannels/bottomPanels/bottomPanel'

const AdminMain = () => {

    const { isLogin, changeLogin } = adminAuthStore(state => state)
    const router = useRouter()
    useTheme()

    return (
        <>
            <div className={'flex-row'}>
                <AdminLeftPanel/>
                <div className={'flex-column max-height'}>
                    <AdminHeader/>
                    <AdminDashboard/>
                    <AdminBottomPanel/>
                </div>
            </div>
            <AdminRightPanel/>
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
