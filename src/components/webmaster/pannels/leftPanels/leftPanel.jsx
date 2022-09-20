import React                                 from 'react'
import { Menu, Button }                      from 'antd'
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons'
import Link                                  from 'next/link'
import { Reoverlay }                         from 'reoverlay'

import { useModal } from '../../../../hooks/useModal'
import { getItem }      from '../../../../service/customFunction'
import styles              from './leftPanel.module.css'

const AdminLeftPanel = () => {

    const items = [
        getItem('회원', 'sub2', <AppstoreOutlined/>, [
            getItem(<Link href={`${process.env.NEXT_PUBLIC_ADMIN_NAME}/member`}>회원 목록</Link>, '5'),
            getItem('회원 등록', '6'),
            getItem('회원 관리', 'sub3', null, [getItem('탈퇴 회원', '7'), getItem('정지 회원', '8')]),
        ]),
    ]

    const onClick = (e) => {
        console.log('click', e)
    }

    const handlePopup = () => {
        Reoverlay.showModal(useModal, {
            title:'테스트 모달',
            components: '컴포넌트 자리',
            onConfirm: () => {
                alert('zzz')
            }
        })
    }

    return (
        <aside className={styles.wrap}>
            <section className={styles.logoBox}>로고 자리</section>

            <section className={styles.menuWrap}>
                <Menu
                    key={'1'}
                    onClick={onClick}
                    style={{ width: '7rem' }}
                    items={items}
                />

                <Menu
                    key={'2'}
                    onClick={onClick}
                    style={{ width: '7rem' }}
                    items={items}
                />
            </section>

            <section className={styles.setupWrap}>
                <Button type="primary" shape="circle" icon={<SettingOutlined/>} onClick={handlePopup}/>
            </section>
        </aside>
    )
}

export default AdminLeftPanel
