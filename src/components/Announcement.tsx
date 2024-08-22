import React from 'react'

const Announcement = () => {
  return (
    <div className='bg-white p-4 rounded-md'>
        <div className='flex items-center justify-between'>
            <h1 className='text-xl font-semibold'>Announcements</h1>
            <span className='text-sm text-gray-400'>View All</span>
        </div>

        <div className='flex flex-col gap-4 mt-4'>
        <div className='bg-skyLight rounded-md p-4'>
            <div className='flex items-center justify-between'>
                <h2 className='font-medium'>Lorem ipsum dolor, sit amet.</h2>
                <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>2025-12-20</span>
            </div>
            <p className='text-sm text-gray-400 mt-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, debitis aperiam error corrupti maiores odit officiis aspernatur neque.</p>
        </div>
        <div className='bg-purpleLight rounded-md p-4'>
            <div className='flex items-center justify-between'>
                <h2 className='font-medium'>Lorem ipsum dolor, sit amet.</h2>
                <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>2025-12-20</span>
            </div>
            <p className='text-sm text-gray-400 mt-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, debitis aperiam error corrupti maiores odit officiis aspernatur neque.</p>
        </div>
        <div className='bg-yellowLight rounded-md p-4'>
            <div className='flex items-center justify-between'>
                <h2 className='font-medium'>Lorem ipsum dolor, sit amet.</h2>
                <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>2025-12-20</span>
            </div>
            <p className='text-sm text-gray-400 mt-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, debitis aperiam error corrupti maiores odit officiis aspernatur neque.</p>
        </div>
        </div>
        
    </div>
  )
}

export default Announcement