import React from 'react'

import styles from './dashboard.module.css'

const AdminDashboard = () => {

    const boxes = [...new Array(33)].map((_, i) => i + 1);


    return (
        <section className={styles.wrap}>
            <h2>여긴 AdminDashboard</h2>
            <div className={styles.boxWrap}>
                {
                    boxes.map((box, index) =>
                        <div key={index}>Box {index+1}</div>
                    )
                }
            </div>
        </section>
    )
}

export default AdminDashboard
