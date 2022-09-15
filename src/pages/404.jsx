import React              from 'react'
import { Button, Result } from 'antd'

const NotFound = () => {
    return (
        <Result
            status="404"
            title="잘못된 페이지"
            subTitle="올바르지 않은 접근입니다."
            extra={<Button type="primary">Back Home</Button>}
        >

        </Result>
    )
}

export default NotFound
