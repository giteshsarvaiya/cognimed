"use client"
import React,  { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Chats from '@/components/chats'
const Message = () => {
  const params = useParams();
  const stringParams = params.id.toString();


  return (
    <div className='flex w-full'> 
    <Chats params={stringParams} />
    </div>
  )
}

export default Message