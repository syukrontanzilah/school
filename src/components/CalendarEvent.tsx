"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet 1",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." 
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet 2",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." 
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet 3",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." 
  },

]

const CalendarEvent = () => {
    const [value, onChange] = useState<Value>(new Date());
    const [locale, setLocale] = useState('id-ID');
    
    useEffect(() => {
      setLocale(navigator.language || 'id-ID');
    }, []);

  return (
    <div className='bg-white p-4 rounded-md'>
    <Calendar onChange={onChange} value={value} locale={locale}/>
    
    {/* event list */}
    <div className='flex items-center justify-between'>
      <h1 className='text-xl font-semibold my-4'>Events</h1>
      <Image src='/moreDark.png' alt='more' width={20} height={20}/>
    </div>
    <div className='flex flex-col gap-4'>
      {
        events.map((event, index)=> {
          return(
            <div key={index} className='p-3 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-sky even:border-t-purple'>
              <div className='flex  justify-between flex-1 '>
                <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                <span className='text-gray-300 text-[10px]'>{event.time}</span>
              </div>
              <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default CalendarEvent