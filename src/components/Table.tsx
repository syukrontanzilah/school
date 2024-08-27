// "use client"
import React from 'react'

type columnsType = {
    header: string;
    accessor: string;
    className? : string; 
}

type renderRowType = {

}

type dataType = {

}

const Table = ({
    columns,
    renderRow,
    data
}: {
    columns : columnsType[];
    renderRow: (item: any) => React.ReactNode;
    data: any[]
}) => {
  return (
    <table className='w-full mt-4'>
        <thead className=''>
            <tr className='text-left text-gray-500 text-sm '>
                {columns.map((col,i)=> {
                    return(
                        <th key={i} className={col.className}>{col.header}</th>
                    )
                })}
            </tr>
        </thead>
        <tbody className=''>
            {
                data.map((item) => renderRow(item))
            }
        </tbody>
    </table>
  )
}

export default Table