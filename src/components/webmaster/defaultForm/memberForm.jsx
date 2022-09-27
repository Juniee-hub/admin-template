import React, { useState }                                                    from 'react'
import { Controller, useForm }                                                from 'react-hook-form'
import { AutoComplete, Input as AntdInput, Switch as AntdSwitch, DatePicker } from 'antd'
import { PhoneOutlined, UserOutlined }                                        from '@ant-design/icons'
import moment                                                                 from 'moment'

import styles from './defaultForm.module.css'

// @Todo 에디터 컴포넌트 정리 필요
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})

// 사용하고 싶은 옵션, 나열 되었으면 하는 순서대로 나열
const toolbarOptions = [
    ['link', 'image', 'video'],
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
]

// 옵션에 상응하는 포맷, 추가해주지 않으면 text editor에 적용된 스타일을 볼수 없음
const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'align',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'background',
    'color',
    'link',
    'image',
    'video',
    'width',
]

const modules = {
    toolbar: {
        container: toolbarOptions,
    },
}

const AdminMemberForm = ({ control, register, formState: { isSubmitting, isDirty, errors }, setValue }) => {

    // Mail 관련
    const { Option } = AutoComplete
    const [mailResult, setMailResult] = useState([])
    const handleMailSearch = (value) => {
        let res = []

        if (!value || value.indexOf('@') >= 0) {
            res = []
        } else {
            res = ['gmail.com', 'naver.com', 'hanmail.com', 'nate.com', 'daum.net'].map((domain) => `${value}@${domain}`)
        }

        setMailResult(res)
    }

    // Tel 관련
    const handleChange = (tel) => {
        const regex = /[^0-9]/g
        const onlyNumber = tel.replace(regex, '')

        if (onlyNumber.substring(0, 2) === '02') {
            if (onlyNumber.length === 10) {
                const newTel = onlyNumber.replace(/^(\d{0,2})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3').replace(/\-{1,2}$/g, '')
                setValue('userTel', newTel)
            } else if (onlyNumber.length < 10) {
                const newTel = onlyNumber.replace(/^(\d{0,2})(\d{0,3})(\d{0,4})$/g, '$1-$2-$3').replace(/\-{1,2}$/g, '')
                setValue('userTel', newTel)
            } else {
                return false
            }

            return false
        }

        if (onlyNumber.length === 11) {
            const newTel = onlyNumber.replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3').replace(/\-{1,2}$/g, '')
            setValue('userTel', newTel)
        } else if (onlyNumber.length < 11) {
            const newTel = onlyNumber.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})$/g, '$1-$2-$3').replace(/\-{1,2}$/g, '')
            setValue('userTel', newTel)
        } else {
            return false
        }

    }

    return (
        <div className={styles.formWrap}>
            <section>
                <div className={styles.formBox}>
                    <label htmlFor={'userName'}>이름</label>
                    <Controller
                        name="userName"
                        id={'userName'}
                        control={control}
                        render={({ field }) =>
                            <AntdInput name={'userName'}
                                       {...register('userName', {
                                           required: '이름 필수 입력입니다.',
                                           minLength: {
                                               value: 2,
                                               message: '2자리 이상 이름을 사용하세요.',
                                           },
                                       })}

                                       placeholder="이름" prefix={
                                <UserOutlined/>} {...field} />
                        }
                    />
                </div>

                {errors.userName && <small role="alert" className={styles.alert}>{errors.userName.message}</small>}
            </section>


            <section>
                <div className={styles.formBox}>
                    <label htmlFor={'userId'}>아이디</label>
                    <Controller
                        name="userId"
                        id={'userId'}
                        control={control}
                        render={({ field }) =>
                            <AntdInput
                                name={'userId'}
                                {...register('userId', {
                                    required: '아이디는 필수 입력입니다.',
                                    minLength: {
                                        value: 4,
                                        message: '4자리 이상 아이디를 사용하세요.',
                                    },
                                })}

                                placeholder="아이디"
                                {...field} />
                        }
                    />
                </div>
                {errors.userId && <small role="alert" className={styles.alert}>{errors.userId.message}</small>}
            </section>

            <section>
                <div className={styles.formBox}>
                    <label htmlFor={'password'}>비밀번호</label>
                    <Controller
                        name="password"
                        id={'password'}
                        control={control}
                        render={({ field }) =>
                            <AntdInput.Password
                                name={'password'}
                                placeholder="비밀번호"
                                {...register('password', {
                                    required: '비밀번호는 필수 입력입니다.',
                                    minLength: {
                                        value: 8,
                                        message: '8자리 이상 비밀번호를 사용하세요.',
                                    },
                                })}
                                {...field} />
                        }
                    />
                </div>
                {errors.password && <small role="alert" className={styles.alert}>{errors.password.message}</small>}
            </section>


            <section>
                <div className={styles.formBox}>
                    <label htmlFor={'userMail'}>이메일</label>
                    <Controller
                        name="userMail"
                        id={'userMail'}
                        control={control}
                        render={({ field }) =>
                            <AutoComplete
                                {...register('userMail', {
                                    required: '이메일은 필수 입력입니다.',
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: '올바른 이메일 주소를 입력해주세요'
                                    }
                                })}
                                {...field}
                                onSearch={handleMailSearch}
                                placeholder={'이메일 주소를 입력해주세요'}
                                defaultActiveFirstOption={true}
                            >
                                {mailResult.map((email) => (
                                    <Option key={email} value={email}>
                                        {email}
                                    </Option>
                                ))}
                            </AutoComplete>
                        }
                    />
                </div>
                {errors.userMail && <small role="alert" className={styles.alert}>{errors.userMail.message}</small>}
            </section>

            <section>
                <div className={styles.formBox}>
                    <label htmlFor={'userName'}>연락처</label>
                    <Controller
                        name="userTel"
                        id={'userTel'}
                        control={control}
                        render={({ field }) =>
                            <AntdInput
                                name={'userTel'}
                                {...register('userTel', {
                                    required: '연락처는 필수 입력입니다.',
                                    minLength: {
                                        value: 10,
                                        message: '유효한 연락처를 사용하세요.',
                                    },
                                })}
                                placeholder="연락처"
                                prefix={<PhoneOutlined/>}
                                {...field}
                                onChange={(e) => handleChange(e.target.value)}
                            />

                        }
                    />
                </div>
                {errors.userTel && <small role="alert" className={styles.alert}>{errors.userTel.message}</small>}
            </section>

            <section>
                <div className={styles.formBox}>
                    <label htmlFor={'userActive'}>탈퇴여부</label>
                    <Controller
                        name="userActive"
                        id={'userActive'}
                        defaultValue={true}
                        control={control}
                        render={({ field }) =>
                            <AntdSwitch {...field} checked={field.value}/>

                        }
                    />
                </div>
                {errors.userActive && <small role="alert" className={styles.alert}>{errors.userActive.message}</small>}
            </section>


            <section>
                <div className={styles.formBox}>
                    <label htmlFor={'userMemo'}>메모</label>
                    <Controller
                        name="userMemo"
                        id={'userMemo'}
                        control={control}
                        render={({ field }) =>
                            <AntdInput.TextArea
                                {...field}
                                showCount
                                maxLength={100}
                            />
                        }
                    />
                </div>
                {errors.userMemo && <small role="alert" className={styles.alert}>{errors.userMemo.message}</small>}
            </section>

            <section>
                <div className={styles.formBox}>
                    <label htmlFor={'userCreated'}>등록일</label>
                    <Controller
                        name="userCreated"
                        id={'userCreated'}
                        defaultValue={moment(new Date(), 'YYYY-MM-DD')}
                        format={'YYYY/MM/DD'}
                        control={control}
                        render={({ field }) =>
                            <DatePicker
                                {...field}
                            />
                        }
                    />
                </div>
                {errors.userCreated &&
                    <small role="alert" className={styles.alert}>{errors.userCreated.message}</small>}
            </section>

            <section>
                <div className={styles.formBox}>
                    <label htmlFor={'userContents'}>내용</label>
                    <Controller
                        name="userContents"
                        id={'userContents'}
                        control={control}
                        render={({ field }) =>
                            <QuillNoSSRWrapper
                                {...field}
                                modules={modules}
                                formats={formats}
                            />
                        }
                    />

                </div>
                {errors.userContents &&
                    <small role="alert" className={styles.alert}>{errors.userContents.message}</small>}
            </section>




        </div>
    )
}

export default AdminMemberForm
