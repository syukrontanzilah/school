import Announcement from '@/components/Announcement'
import BigCalendar from '@/components/BigCalendar'
import PerformanceChart from '@/components/PerformanceChart'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StudentDetail = () => {
  return (
    <div className='p-4 pt-24'>
       <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
        {/* LEFT */}
        <div className='w-full xl:w-2/3'>
        {/* top */}
        <div className='flex flex-col lg:flex-row gap-4'>
        {/* user info card */}
        <div className='bg-purple py-6 px-4 rounded-md flex-1 flex gap-4'>
            <div className='flex justify-center'>
                <Image src={'https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200'} alt='user' width={112} height={112} className='bg-violet-400 w-28 h-28 rounded-full object-cover'/>
            </div>
            <div className='flex-1 flex flex-col justify-between gap-4'>
            <h1 className='text-xl font-semibold'>Mell-B fatimah</h1>
            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className='flex items-center justify-between gap-2 flex-wrap text-xs font-medium'>
                <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                <Image src={'/blood.png'} alt='ico' width={14} height={14}/>
                <span>A+</span>                    
                </div>

                <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                <Image src={'/date.png'} alt='ico' width={14} height={14}/>
                <span>22 January 1995</span>                    
                </div>
                <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                <Image src={'/mail.png'} alt='ico' width={14} height={14}/>
                <span>jhondoe@gmail.com</span>                    
                </div>

                <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                <Image src={'/phone.png'} alt='ico' width={14} height={14}/>
                <span>0329232322</span>                    
                </div>
            </div>
            </div>
        </div>
        {/* side small card */}
        <div className='flex-1 flex gap-4 justify-between flex-wrap'>
            {/* Card */}
            <div className='bg-white flex p-4 rounded-md gap-4 w-full md:w-[48%] xl:w-[47%] 2xl:w-[48%]'>
                <Image src={'/singleAttendance.png'} alt='' width={24} height={24} className='w-6 h-6'/>
                <div className=''>
                 <h1 className='text-xl font-semibold'>90%</h1>
                 <span className='text-sm text-gray-400'>Attendance</span>
                </div>
            </div>
                {/* Card */}
            <div className='bg-white flex p-4 rounded-md gap-4 w-full md:w-[48%] xl:w-[47%] 2xl:w-[48%]'>
                <Image src={'/singleBranch.png'} alt='' width={24} height={24} className='w-6 h-6'/>
                <div className=''>
                 <h1 className='text-xl font-semibold'>2</h1>
                 <span className='text-sm text-gray-400'>Brances</span>
                </div>
            </div>
                {/* Card */}
                <div className='bg-white flex p-4 rounded-md gap-4 w-full md:w-[48%] xl:w-[47%] 2xl:w-[48%]'>
                <Image src={'/singleLesson.png'} alt='' width={24} height={24} className='w-6 h-6'/>
                <div className=''>
                 <h1 className='text-xl font-semibold'>6</h1>
                 <span className='text-sm text-gray-400'>Lessongs</span>
                </div>
            </div>
                {/* Card */}
                <div className='bg-white flex p-4 rounded-md gap-4 w-full md:w-[48%] xl:w-[47%] 2xl:w-[48%]'>
                <Image src={'/singleClass.png'} alt='' width={24} height={24} className='w-6 h-6'/>
                <div className=''>
                 <h1 className='text-xl font-semibold'>5</h1>
                 <span className='text-sm text-gray-400'>Classes</span>
                </div>
            </div>
        </div>

        </div>
        {/* bottom */}
        <div className='mt-4 bg-white rounded-md p-4 h-[800px]'>
           <h1 className='font-semibold'>Students Schedule</h1>
           <BigCalendar/>
        </div>

        </div>
        {/* RIGHT */}
        <div className='w-full xl:w-1/3 flex flex-col gap-4'>
        <div className='bg-white p-4 rounded-md'>
            <h1 className='text-xl font-semibold'>Shorcuts</h1>
            <div className='mt-4 flex gap-4 flex-wrap text-xs text-gray-500'>
                <Link href={'/'} className='p-2 rounded-md bg-skyLight'>Students Classes</Link>
                <Link href={'/'} className='p-2 rounded-md bg-sky'>Students Students</Link>
                <Link href={'/'} className='p-2 rounded-md bg-yellow'>Students Lessons</Link>
                <Link href={'/'} className='p-2 rounded-md bg-yellowLight'>Students Exams</Link>
                <Link href={'/'} className='p-2 rounded-md bg-skyLight'>Students Assigments</Link>
            </div>
        </div>
        {/* chart */}
        <PerformanceChart/>
        <Announcement/>
        </div>
       </div>
    </div>
  )
}

export default StudentDetail