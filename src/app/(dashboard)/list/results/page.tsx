import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { assignmentsData, classesData, examsData, lessonsData, parentsData, resultsData, role, subjectsData, teachersData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Result = {
  id: number;
  subject: number;
  class: string;
  teacher: string;
  student: string;
  date: string;
  type: string;
  score: number;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Student",
    accessor: "student",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Type",
    accessor: "type",
    className: "hidden md:table-cell",
  },
  {
    header: "Score",
    accessor: "score",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const ResultListPage = () => {

  const renderRow = (item: Result) => {
    return(
      <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 hover:bg-purpleLight text-sm'>
        <td className='md:table-cell py-4'>{item.subject}</td>
        <td className='hidden md:table-cell'>{item.class}</td>
        <td className='hidden md:table-cell'>{item.teacher}</td>
        <td className='hidden md:table-cell'>{item.student}</td>
        <td className='hidden md:table-cell'>{item.date}</td>
        <td className='hidden md:table-cell'>{item.type}</td>
        <td className='hidden md:table-cell'>{item.score}</td>
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
        <h1 className='text-lg font-semibold hidden md:block'>All Results</h1>
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
        <Table columns = {columns} renderRow={renderRow} data={resultsData}/>
      </div>

      {/* PAGINATION */}
      <div>
        <Pagination/>
      </div>

      </div>
    </div>
  )
}

export default ResultListPage