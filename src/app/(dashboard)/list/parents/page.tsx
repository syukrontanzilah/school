import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { parentsData, role, teachersData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Parent = {
  id: number;
  name: string;
  email?: string;
  phone: string;
  classes: string[];
  address: string;
  students: string[]
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Students Name",
    accessor: "studentsName",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const ParentListPage = () => {

  const renderRow = (item: Parent) => {
    return(
      <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 hover:bg-purpleLight text-sm'>
        <td className='flex items-center gap-4 py-4'>
          <div className='flex flex-col'>
            <h3 className='font-semibold'>{item.name}</h3>
            <p className='text-xs text-gray-500'>{item?.email}</p>
          </div>
        </td>
        <td className='hidden md:table-cell'>{item.students.join(", ")}</td>
        <td className='hidden md:table-cell'>{item.phone}</td>
        <td className='hidden md:table-cell'>{item.address}</td>
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
        <h1 className='text-lg font-semibold hidden md:block'>All Parents</h1>
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
        <Table columns = {columns} renderRow={renderRow} data={parentsData}/>
      </div>

      {/* PAGINATION */}
      <div>
        <Pagination/>
      </div>

      </div>
    </div>
  )
}

export default ParentListPage