import React         from 'react'
import { getCookie } from 'cookies-next'

import AdminHeader           from '../../../components/webmaster/header/header'
import AdminRightPanel       from '../../../components/webmaster/pannels/rightPanels/rightPanel'
import AdminLeftPanel        from '../../../components/webmaster/pannels/leftPanels/leftPanel'
import useTheme              from '../../../hooks/useTheme'
import AdminDataDefaultLists from '../../../components/webmaster/dataDefaultLists/dataDefaultLists'

const AdminMember = () => {
    useTheme()
    return (
        <>
            <div className={'flex-row'}>
                <AdminLeftPanel/>
                <div className={'flex-column max-height'}>
                    <AdminHeader/>
                    <AdminDataDefaultLists title={'회원 목록'}/>
                </div>
            </div>
            <AdminRightPanel/>
        </>
    )
}

export default AdminMember

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
