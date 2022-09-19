import React         from 'react'
import { CloseOutlined } from '@ant-design/icons'

import styles        from './noticePanel.module.css'

const AdminNoticePanel = ({closePanel}) => {

    return (
        <article className={styles.wrap}>
            <div className={styles.header}>
                <h2>알림 창</h2>
                <CloseOutlined onClick={closePanel}/>
            </div>

            <div className={styles.boxWrap}>

                <div className={styles.box}>알림1</div>
                <div className={styles.box}>알림2</div>
                <div className={styles.box}>알림3</div>
            </div>

        </article>
    )
}

export default AdminNoticePanel
