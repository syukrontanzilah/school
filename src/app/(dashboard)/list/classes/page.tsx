import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { classesData, parentsData, role, subjectsData, teachersData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Class = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};

const columns = [
  {
    header: "Class",
    accessor: "name",
  },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const ClassesListPage = () => {

  const renderRow = (item: Class) => {
    return(
      <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 hover:bg-purpleLight text-sm'>
        <td className='md:table-cell py-4'>{item.name}</td>
        <td className='hidden md:table-cell'>{item.capacity}</td>
        <td className='hidden md:table-cell'>{item.grade}</td>
        <td className='hidden md:table-cell'>{item.supervisor}</td>
        <td>
          <div className='flex items-center gap-2'>
            <Link href={`/list/teachers/${item.id}`}>
            <button className='w-7 h-7 flex items-center justify-center rounded-full bg-sky'>
              <Image src={'/view.png'} alt='view' width={16} height={16}/>
            </button>
            </Link>
            {
              role === "admin" && (
                <button className='w-7 h-7 flex items-center justify-center rounded-full bg-purple'>
                <Image src={'/delete.png'} alt='view' width={16} height={16}/>
              </button>
              )
            }
          </div>
        </td>
      </tr>
    )
  }
  return (
    <div className='p-4 pt-24 '>
      <div className='bg-white rounded-md flex-1 p-4 '>
        {/* TOP */}
      <div className='flex items-center justify-between'>
        <h1 className='text-lg font-semibold hidden md:block'>All Classes</h1>
        <div className='flex flex-col md:flex-row items-center gap-4  w-full md:w-auto'>
          <TableSearch/>
          <div className='flex items-center gap-4 self-end md:self-auto'>
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow'><Image src={'/filter.png'} alt='filter' height={14} width={14}/></button>
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow'><Image src={'/sort.png'} alt='filter' height={14} width={14}/></button>
            {
              role === "admin" && (
             <button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow'><Image src={'/plus.png'} alt='filter' height={14} width={14}/></button>               
              )
            }
          </div>
        </div>

      </div>

      {/* LIST */}
      <div>
        <Table columns = {columns} renderRow={renderRow} data={classesData}/>
      </div>

      {/* PAGINATION */}
      <div>
        <Pagination/>
      </div>

      </div>
    </div>
  )
}

export default ClassesListPage