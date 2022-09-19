import React, { useEffect, useState } from 'react'

import styles           from './rightPanel.module.css'
import AdminNoticePanel from './noticePanel'
import AdminChatPanel   from './chatPanel'

const AdminRightPanel = () => {

    const [isPanelOpen, setIsPanelOpen] = useState(false)

    const openPanel = (panel) => {
        console.log('openPanel', panel)
        setIsPanelOpen(true)
    }

    const closePanel = () => {
        setIsPanelOpen(false)
    }

    const layoutClick = (e) => {
        setIsPanelOpen(false)
    }

    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') setIsPanelOpen(false)
        })
        return () => {
            window.removeEventListener('keydown', () => {})
        }
    }, [])

    return (
        <>
            <section className={styles.wrap}>
                <button onClick={() => {openPanel('notice')}}>알림</button>
                <button onClick={() => {openPanel('chat')}}>채팅</button>
            </section>

            {isPanelOpen &&
                <>
                    <AdminNoticePanel closePanel={closePanel}/>
                    <AdminChatPanel closePanel={closePanel}/>
                    <div onClick={layoutClick} className={styles.layer}/>
                </>
            }
        </>
    )
}

export default AdminRightPanel
