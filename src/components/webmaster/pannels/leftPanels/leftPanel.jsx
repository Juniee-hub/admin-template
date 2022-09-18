import React from 'react'

import styles from './leftPanel.module.css'

const AdminLeftPanel = () => {
    return (
        <section className={styles.wrap}>
            <div className={styles.logoBox}>로고 자리</div>

            <div className={styles.menuWrap}>
                <div>Menu1</div>
                <div>Menu2</div>
                <div>Menu3</div>
                <div>Menu4</div>
            </div>

            <div className={styles.setupWrap}>
                <div>Setup Button</div>
            </div>
        </section>
    )
}

export default AdminLeftPanel
