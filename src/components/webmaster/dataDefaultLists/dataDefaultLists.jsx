import React, { useEffect, useRef, useState } from 'react'
import Hangul                                 from 'hangul-js'

import styles              from './dataDefaultLists.module.css'
import AdminDefaultDataRow from './dataDefaultRow'
import AdminDefaultPaging  from './defaultPaging'

const AdminDataDefaultLists = ({ title }) => {

    const pagingInfo = {
        nowPage: 4,
        totalData: 186,
        pageBlock: 10,
        block: 5,
    }

    const nameSetup = {
        key: '번호',
        name: '이름',
        age: '나이',
        address: '주소',
    }

    const apiData = [
        {
            key: '1',
            name: '김철수',
            age: 32,
            address: '서울 종로구',
        },
        {
            key: '2',
            name: '홍길동',
            age: 42,
            address: '대전 서구',
        },
        {
            key: '3',
            name: '김영희',
            age: 20,
            address: '서울 중구',
        },
        {
            key: '4',
            name: '최고집',
            age: 32,
            address: '대전 서구',
        },
    ]

    let columns = []
    const tmpColumns = []
    apiData.forEach(data => {
        tmpColumns.push(...Object.keys(data))
    })
    columns = [...new Set(tmpColumns)]


    const [listData, setListData] = useState([])
    const searchRef = useRef(null)
    useEffect(() => {
        searchRef.current.focus()
        setListData([...apiData])
    }, [])

    /**
     * 현재 목록 중 검색
     * @Todo API 연동시 query 재 전송으로 변경필요
     */
    const dataSearching = (e) => {
        const inputVal = e.target.value
        if(!inputVal) {
            setListData([...apiData])
            return false
        }
        const filterData = apiData.filter(data=>{
            const {name,address,age} = data
            const searcher = new Hangul.Searcher(inputVal)
            return (searcher.search(address.toLowerCase()) !== -1) || (searcher.search(age.toString()) !== -1) || (searcher.search(name.toLowerCase()) !== -1)
        })
        setListData([...filterData])
    }

    const handleDataFetch = (pageInfo) => {
        console.log('전달받은 pageInfo', pageInfo)
    }

    return (
        <section className={styles.wrap}>

            <h2>{title}</h2>

            <article className={styles.header}>
                <input placeholder={'이름 or 나이 or 주소 검색'} ref={searchRef} onChange={dataSearching}/>
                <button>등록</button>
            </article>

            <article>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            {
                                columns.map((column, index) =>
                                    <th key={`th_${index}`}>{nameSetup[column]}</th>
                                )
                            }
                        </tr>
                    </thead>

                    <tbody>
                        {
                            listData.map((data, index) =>
                                <AdminDefaultDataRow key={`data_${index}`} data={data} columns={columns}/>
                            )
                        }
                    </tbody>
                </table>

                <AdminDefaultPaging pagingInfo={pagingInfo} returnInfo={handleDataFetch}/>

            </article>

        </section>
    )
}

export default AdminDataDefaultLists
