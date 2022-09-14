import React    from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <>
        <h1>여긴 메인페이지</h1>
            <ul>
                <Link to={'/webmaster'}>관리자 페이지로</Link>
            </ul>
        </>
    )
}

export default Main
