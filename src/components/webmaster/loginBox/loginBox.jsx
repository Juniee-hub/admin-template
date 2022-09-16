import React from 'react'
import { useForm }          from 'react-hook-form'

import styles from './loginBox.module.css'

const AdminLoginBox = ({ goToSubmit }) => {

    const { register, handleSubmit, formState: { isSubmitting, isDirty, errors } } = useForm()

    const onSubmit = (data) => {
        goToSubmit()
    }

    return (
        <section className={styles.wrap}>

            <div className={styles.box}>
                <h1>로그인</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor={'userId'}>아이디</label>
                    <input
                        id={'userId'}
                        placeholder={'ID를 입력해주세요'}
                        aria-invalid={!isDirty ? undefined : errors.userId ? 'true' : 'false'}
                        {...register('userId', {
                            required: '아이디는 필수 입력입니다.',
                            minLength: {
                                value: 4,
                                message: '4자리 이상 아이디를 사용하세요.',
                            },
                        })}
                    />
                    {errors.userId && <small role="alert" className={styles.alert}>{errors.userId.message}</small>}

                    <label htmlFor={'password'}>비밀번호</label>

                    <input type={'password'}
                           id={'password'}
                           placeholder={'비밀번호를 입력하세요'}
                           aria-invalid={!isDirty ? undefined : errors.password ? 'true' : 'false'}
                           {...register('password', {
                               required: '비밀번호는 필수 입력입니다.',
                               minLength: {
                                   value: 8,
                                   message: '8자리 이상 비밀번호를 사용하세요.',
                               },
                           })}
                    />

                    {errors.password && <small role="alert" className={styles.alert}>{errors.password.message}</small>}


                    <button type={'submit'} disabled={isSubmitting}>로그인</button>

                </form>
            </div>

        </section>
    )
}

export default AdminLoginBox
