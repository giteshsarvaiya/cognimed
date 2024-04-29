"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import Chats from '@/components/chats'
const Research = () => {
  const params = useParams();
  const stringParams = params.id.toString();
  return (
    <div className='flex w-full'> 
    <Chats params= {stringParams} />
    </div>
  )
}

export default Research