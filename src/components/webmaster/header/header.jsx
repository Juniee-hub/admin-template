import React, { useState }                                  from 'react'
import { Menu }                                             from 'antd'
import { AppstoreOutlined, PoweroffOutlined, UserOutlined } from '@ant-design/icons'
import { removeCookies }                                    from 'cookies-next'
import { useRouter } from 'next/router'

import { getItem } from '../../../service/customFunction'
import styles      from './header.module.css'

const AdminHeader = () => {

    const [hoverProfile, setHoverProfile] = useState(false)
    const items = [
        getItem('회원', 'sub2', <AppstoreOutlined/>, [
            getItem('회원 목록', '5'),
            getItem('회원 등록', '6'),
            getItem('회원 관리', 'sub3', null, [getItem('탈퇴 회원', '7'), getItem('정지 회원', '8')]),
        ]),
    ]

    const onClick = (e) => {
        console.log('click', e)
    }

    const router = useRouter()
    const logOut = () => {
        removeCookies('adminIsLogin')
        router.push('/webmaster')
    }

    return (
        <header className={styles.wrap}>
            <nav>
                <Menu
                    key={'1'}
                    onClick={onClick}
                    mode={'horizontal'}
                    style={{ width: '7rem' }}
                    items={items}
                />

                <Menu
                    key={'2'}
                    onClick={onClick}
                    mode={'horizontal'}
                    style={{ width: '7rem' }}
                    items={items}
                />
            </nav>
            <article className={styles.info}>
                <div onMouseEnter={() => {setHoverProfile(true)}}>
                    <UserOutlined/>
                    {
                        hoverProfile &&
                        <>
                            <div className={styles.profile}>
                                <strong onClick={logOut}><PoweroffOutlined/> 로그아웃</strong>
                            </div>
                            <div onClick={() => {setHoverProfile(false)}} className={styles.layer}/>
                        </>
                    }
                </div>
            </article>
        </header>
    )
}

export default AdminHeader
