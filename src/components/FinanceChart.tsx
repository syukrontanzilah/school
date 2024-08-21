"use client"
import Image from 'next/image'
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Jan',
      income: 4000,
      expense: 2400,
    },
    {
      name: 'Feb',
      income: 5000,
      expense: 2000,
    },
    {
      name: 'Marc',
      income: 6500,
      expense: 2800,
    },
    {
      name: 'Apr',
      income: 7800,
      expense: 2000,
    },
    {
      name: 'May',
      income: 8000,
      expense: 1400,
    },
    {
      name: 'Jun',
      income: 6000,
      expense: 2400,
    },
    {
      name: 'Jul',
      income: 9500,
      expense: 400,
    },
    {
        name: 'Aug',
        income: 11000,
        expense: 2500,
      },
  ];

const FinanceChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
    <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Finance</h1>
        <Image src={'/moreDark.png'} alt='more' width={20} height={20}/>
    </div>

    <ResponsiveContainer width="100%" height="92%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke='#ddd' />
          <XAxis dataKey="name" axisLine={false} tick={{fill:'#d1d5db'}} tickLine={false} tickMargin={10}/>
          <YAxis  axisLine={false} tick={{fill:'#d1d5db'}} tickLine={false} tickMargin={10}/>
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line type="monotone" dataKey="income" stroke="#c3ebfa" strokeWidth={4} />
          <Line type="monotone" dataKey="expense" stroke="#cfceff"  strokeWidth={4} />
        </LineChart>
      </ResponsiveContainer>

</div>
  )
}

export default FinanceChart