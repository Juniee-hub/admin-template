import React         from 'react'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'

import AdminLeftPanel   from '../../../components/webmaster/pannels/leftPanels/leftPanel'
import AdminHeader      from '../../../components/webmaster/header/header'
import AdminRightPanel  from '../../../components/webmaster/pannels/rightPanels/rightPanel'
import AdminDefaultForm from '../../../components/webmaster/defaultForm/defaultForm'

const AdminMemberForm = () => {

    // @Todo 서버사이드로 변경하기
    const router = useRouter()
    const { id } = router.query
    const title = isNaN(Number(id)) ? '회원 등록' : '회원 수정'
    const mode = isNaN(Number(id)) ? 'write' : 'edit'

    return (
        <>
            <div className={'flex-row'}>
                <AdminLeftPanel/>
                <div className={'flex-column max-height'}>
                    <AdminHeader/>
                    <AdminDefaultForm title={title} mode={mode}/>
                </div>
            </div>
            <AdminRightPanel/>
        </>
    )
}

export default AdminMemberForm

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

    // //@Todo id 유효성 체크하여, 페이징 redirect 처리..
    // const router = useRouter()
    // const { id } = router.query
    // if(typeof id!=='number'){
    //     return {
    //         redirect: {
    //             permanent: false,
    //             destination: '/webmaster/member',
    //         },
    //         props: {},
    //     }
    // }

    return { props: {} }
}
