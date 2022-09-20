import React, { useEffect }        from 'react'
import { ModalWrapper, Reoverlay } from 'reoverlay'
import 'reoverlay/lib/ModalWrapper.css'

import styles from './useModal.module.css'

export const useModal = ({ title, components, onConfirm }) => {

    const closeModal = () => {
        Reoverlay.hideModal()
    }

    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') Reoverlay.hideAll()
        })
        return () => {
            window.removeEventListener('keydown', () => {})
        }

    }, [])

    return (
        <ModalWrapper
            wrapperClassName={`${styles.wrap}`}
            contentContainerClassName={`${styles.container}`}
            animation={'rotate'}
        >
            <div className={styles.messageBox}>
                <h2>{title}</h2>
                {components}
            </div>
            <div className={styles.buttonWrap}>
                <button onClick={onConfirm}>확인</button>
                <button onClick={closeModal}>닫기</button>
            </div>

        </ModalWrapper>
    )
}
