"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'

const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {
          const navbar = document.getElementById('navbar');
          if (navbar) {
            if (window.scrollY > 50) {
              navbar.classList.add('bg-white', 'bg-opacity-80', 'backdrop-blur-lg', 'shadow-md');
            } else {
              navbar.classList.remove('bg-white', 'bg-opacity-80', 'backdrop-blur-lg', 'shadow-md');
            }
          }
        };

        window.addEventListener('scroll', handleScroll);
        // Cleanup event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <div id='navbar' className='flex items-center justify-between p-4 backdrop-blur-lg fixed top-0 right-0 w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] z-10'>
        {/* search bar */}
        <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
            <Image src={'/search.png'} alt='search' width={14} height={14}/>
            <input className='w-[200px] p-2 bg-transparent outline-none' placeholder='Search...'/>
        </div>

        {/* icon and user */}
        <div className='flex items-center gap-6 justify-end w-full'>
            <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
                <Image src={'/message.png'} alt='' width={20} height={20}/>
            </div>
            <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
                <Image src={'/announcement.png'} alt='' width={20} height={20}/>
                <div className='bg-red-500 text-white rounded-full absolute -top-2 -right-3 w-5 h-5 flex items-center justify-center text-xs'>12</div>
            </div>
            {/* user name */}
            <div className='flex gap-2 items-center'>
                <div className='flex flex-col'>
                    <span className='text-xs leading-3 font-medium'>Ahmad seggaf</span>
                    <span className='text-[10px] text-gray-500 text-right'>Admin</span>
                </div>
                <div>
                    <Image src={'/avatar.png'} alt='user' width={36} height={36} className='rounded-full cursor-pointer'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar