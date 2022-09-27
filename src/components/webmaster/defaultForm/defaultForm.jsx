import React          from 'react'
import { BellFilled } from '@ant-design/icons'
import { Tabs }       from 'antd'
import { useForm }    from 'react-hook-form'
import moment         from 'moment'
import { useRouter }  from 'next/router'

import styles          from './defaultForm.module.css'
import AdminMemberForm from './memberForm'

const AdminDefaultForm = ({ title, mode }) => {
    const { register, handleSubmit, control, formState: { isSubmitting, isDirty, errors }, setValue } = useForm({
        defaultValues: {
            userName: '홍길동',
        }
    })

    const onSubmit = (data) => {
        data.userCreated = moment(data.userCreated).format('YYYY-MM-DD')
        console.log('submitData', data)
    }

    const onTabChange = (key) => {
        console.log('tab Key', key)
    }

    const items = [
        {
            label: 'Tab 1',
            key: 'item-1',
            children: <AdminMemberForm control={control} register={register} setValue={setValue} formState={{
                isSubmitting,
                isDirty,
                errors
            }}/>
        },
        { label: 'Tab 2', key: 'item-2', children: 'Form 2' },
    ]

    const router = useRouter()

    return (
        <section className={styles.wrap}>

            <h2>{title}</h2>

            <article className={styles.description}>
                <div><BellFilled/></div>
                <div>
                    <p>ID 값 유효성 체크 후, Edit or Write 로 변경</p>
                    <p>ID 값 <span className={styles.red}>존재</span> 시, 데이터 API 조회</p>
                </div>
            </article>

            <article className={styles.body}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrap} id={'formId'}>
                    <Tabs
                        defaultActiveKey="item-1"
                        onChange={onTabChange}
                        items={items}
                    >
                    </Tabs>
                    <div className={styles.btnWrap}>
                        <button type={'submit'} form={'formId'}>
                            {
                                mode === 'write' ? '등록' : (mode === 'edit' && '수정')
                            }
                        </button>
                        <button className={styles.sky} onClick={() => {router.push('/webmaster/member')}}>목록으로</button>
                        {
                            mode === 'edit' &&
                            <button className={styles.red}>삭제</button>
                        }

                    </div>
                </form>
            </article>

            <article className={styles.description}>
                form 보충설명
            </article>

        </section>
    )
}

export default AdminDefaultForm
