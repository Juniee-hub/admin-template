import React from 'react'

const AdminDefaultDataRow = ({data,columns}) => {

    return (
        <tr>
            {
                columns.map((column,index)=>
                    <td key={`row_${index}`}>{data[column]}</td>
                )
            }
        </tr>
    )
}

export default AdminDefaultDataRow
