import React, { useEffect, useState } from 'react'

import styles from './defaultPaging.module.css'

const AdminDefaultPaging = ({ pagingInfo, returnInfo }) => {

    const totalBlock = Math.floor((pagingInfo.totalData) / (pagingInfo.pageBlock)) + 1

    const [currentPage, setCurrentPage] = useState(pagingInfo.nowPage ?? 1)
    const [block, setBlock] = useState(Math.ceil(((currentPage * pagingInfo.pageBlock) / (pagingInfo.block * pagingInfo.pageBlock))))

    const goPage = (page) => {
        const changePage = (page > totalBlock) ? (page - 1) : page
        if (changePage !== currentPage) {
            setCurrentPage(changePage)
        }
    }

    useEffect(() => {
        setBlock(Math.ceil(((currentPage * pagingInfo.pageBlock) / (pagingInfo.block * pagingInfo.pageBlock))))
        if (pagingInfo.nowPage !== currentPage) {
            returnInfo({ nowPage: currentPage })
        }

    }, [currentPage])

    return (
        <div className={styles.wrap}>
            <ul>

                {
                    (block > 1 || currentPage > 1) &&
                    <>
                        <li><span onClick={() => {goPage(1)}}>처음으로</span></li>
                        <li><span onClick={() => {goPage((currentPage - 1 <= 0) ? 1 : currentPage - 1)}}>이전</span></li>
                    </>
                }

                {
                    [...new Array(totalBlock)].map((value, index) => {

                            const lastBlockIndex = block * pagingInfo.block
                            const firstBlockIndex = (block - 1) * pagingInfo.block

                            if (((index + 1) > lastBlockIndex)) return
                            if (((index + 1) <= firstBlockIndex)) return

                            if (currentPage === (index + 1)) return <li key={`li_block_${index + 1}`}>
                                <span key={`span_block_${index + 1}`} className={styles.active}>{index + 1}</span></li>
                            else return <li key={`li_block_${index + 1}`}>
                                <span key={`span_block_${index + 1}`} onClick={() => {goPage(index + 1)}}>{index + 1}</span>
                            </li>
                        }
                    )
                }

                {
                    block * pagingInfo.block <= totalBlock &&
                    <>
                        <li><span onClick={() => {goPage(currentPage + 1)}}>다음</span></li>
                        <li><span onClick={() => {goPage(totalBlock)}}>마지막으로</span></li>
                    </>
                }


            </ul>
        </div>
    )
}

export default AdminDefaultPaging
