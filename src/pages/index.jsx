import React    from 'react'
import Link from 'next/link'

const Index = () => {
    return (
        <>
        <h1>여긴 메인페이지</h1>
            <ul>
                <Link href={`${process.env.NEXT_PUBLIC_ADMIN_NAME}`}>관리자 페이지로</Link>
            </ul>
        </>
    )
}

export default Index
