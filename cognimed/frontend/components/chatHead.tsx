"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'


const ChatHead = ({name, lastMsg, id}: {name:string, lastMsg:string, id:any}) => {
    const [isActive, setIsActive] = useState("")
    const params = useParams();
    useEffect(()=>{
        if(params.id==id){
            setIsActive("bg-zinc-800")
            console.log("hello")
        } else {
            setIsActive("")
        }
    }, [params])

  return (
    <div className={` ${isActive} w-full hover:bg-zinc-800 flex flex-col justify-between p-4 gap-2 items-start `}>
        <p className='text-2xl text-white'>{name}</p>
        <p className="text-sm text-gray-500">{lastMsg}</p>
        
    </div>
  )
}

export default ChatHead