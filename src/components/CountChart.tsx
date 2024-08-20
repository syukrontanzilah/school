"use client"
import Image from 'next/image';
import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Total',
    count: 2357,
    fill: 'white',
  },
  {
    name: 'Girls',
    count: 1123,
    fill: '#fae27c',
  },
  {
    name: 'Boys',
    count: 1234,
    fill: '#c3ebfa',
  },
];


const CountChart = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Student</h1>
                <Image src={'/moreDark.png'} alt='more' width={20} height={20}/>
            </div>
            {/* Chart */}
            <div className='relative w-full h-[75%]'>
            <ResponsiveContainer>
                <RadialBarChart cx="50%" cy="40%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                <RadialBar
                    background
                    dataKey="count"
                />
                {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle"  /> */}
                </RadialBarChart>
            </ResponsiveContainer>   
            <Image src={'/maleFemale.png'} alt='icon-chart-student' width={50} height={50} className='absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2'/>             
            </div>

            {/* bottom chart */}
            <div className='flex justify-center gap-16'>
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-sky rounded-full'/>
                    <h1 className='font-bold'>1.234</h1>
                    <h2 className='text-xs text-gray-300'>Boys (55%)</h2>
                </div>
                <div className=''>
                    <div className='w-5 h-5 bg-yellow rounded-full'/>
                    <h1 className='font-bold'>1.134</h1>
                    <h2 className='text-xs text-gray-300'>Girls (45%)</h2>
                </div>
            </div>
        </div>

    );
}

export default CountChart;
