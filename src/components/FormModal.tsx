"use client"
import Image from 'next/image';
import React from 'react'

const FormModal = ({
    table,
    type,
    data,
    id,} : {
     table:
     "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
    type: "create" | "update" | "delete";
    data?: any;
    id?: number;
    }) => {

  const size = type === "create" ? "w-8 h-8" : "w-8 h-8"
  const bgColor = type === "create" ? "bg-yellow" : type === "update" ? "bg-sky" : "bg-purple"
  return (
    <div>
        <button className={`${size} flex items-center justify-center rounded-full ${bgColor}`}>
            <Image src={`/${type}.png`} alt='ico' width={16} height={16}/>
        </button>
    </div>
  )
}

export default FormModal