import Image from 'next/image'
import React from 'react'

type UserType = {
 role: string;
 total: number;
}

const UserCard = ({role, total}:UserType) => {
  return (
    <div className='rounded-2xl odd:bg-purple even:bg-yellow p-4 flex-1 min-w-[130px]'>
        <div className='flex justify-between items-center'>
            <span className='text-[10px] bg-white rounded-full px-2 py-1 text-green-600'>2024/25</span>
            <Image src={'/more.png'} alt='more' height={20} width={20}/>
        </div>
        <div>
            <h1 className='text-2xl font-semibold my-3'>{total}</h1>
            <h2 className='capitalize text-sm font-medium text-gray-500'>{role}s</h2>
        </div>
    </div>
  )
}

export default UserCard