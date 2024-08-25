import Announcement from '@/components/Announcement'
import AttendanceChart from '@/components/AttendanceChart'
import CalendarEvent from '@/components/CalendarEvent'
import CountChart from '@/components/CountChart'
import FinanceChart from '@/components/FinanceChart'
import UserCard from '@/components/UserCard'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row pt-24'>
      {/* LEFT */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
      {/* user card */}
      <div className='flex gap-4 justify-between flex-wrap'>
      <UserCard role='student' total={12332}/>
      <UserCard role='teacher' total={123}/>
      <UserCard role='parent' total={12332}/>
      <UserCard role='staff' total={310}/>
      </div>
      <div className='flex flex-col gap-8'>
        {/* middle chart */}
        <div className='flex gap-4 flex-col lg:flex-row'>
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChart/>
          </div>
          <div className='w-full bg-white lg:w-2/3 h-[450px]'>
            <AttendanceChart/>
          </div>
        </div>
        {/* bottom chart */}
        <div>
          <FinanceChart/>
        </div>

      </div>
      </div>

      {/* RIGHT */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
      <CalendarEvent/>
      <Announcement/>
      </div>
    </div>
  )
}

export default AdminPage