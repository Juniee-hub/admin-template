import React from 'react'

import styles from './rightPanel.module.css'

const AdminRightPanel = () => {
    return (
        <section className={styles.wrap}>
            <button>알림</button>
            <button>채팅</button>
        </section>
    )
}

export default AdminRightPanel
