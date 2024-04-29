"use client"
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const Message = ({ text, sender, timestamp }: { text: string, sender: string, timestamp: string }) => {


    const pathname = usePathname();
    const [position, setPosition] = useState("")
    const [align, setAlign] = useState("")
    const [time, setTime] = useState("");
    const date = new Date(+timestamp)
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    // yaha pe conditional rendering krna hai, agar sender mai hu to chat left mein dikhega aur agr chat ka sender mai nahi hu tom right side dikhega
    useEffect(() => {
        console.log("heyy")
        if (sender == "me") {
            setPosition("justify-end")
            console.log(position)
            setAlign("flex-row-reverse")
        } else {
            setPosition("");
            setAlign("");
        }
        setTime(formattedDateTime)
    }, [])


    const pathnameMiddle = pathname.split('/')[1]

    return (
        <div className={`flex h-auto ${position} w-full`} >
            <div className={`flex ${align} `}>
                <div className='h-full flex justify-end items-end px-2'>     {((pathnameMiddle == 'research' && sender !== "me") ? <svg className="w-8 h-8 rotate-animation" viewBox="-3.2 -3.2 38.40 38.40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  fill="#a936d3" stroke="#a936d3">

<g id="SVGRepo_bgCarrier" stroke-width="0">

<rect x="-3.2" y="-3.2" width="38.40" height="38.40" rx="19.2" fill="#c7c7c7" />

</g>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <title>plus</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke-width="0.00032" fill="none" fill-rule="evenodd" > <g id="Icon-Set-Filled"  transform="translate(-362.000000, -1037.000000)" fill="#b519b8"> <path d="M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049" id="plus" > </path> </g> </g> </g>

</svg>: (<div className=" my-4 relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                </div>))}
                </div>
                <div className=' bg-slate-900  p-4 text-white rounded-2xl flex justify-center items-center max-w-[60%] ' > <p>{text}</p>  </div>
                <div className='flex  justify-center p-2 h-full items-end text-gray-600 ' > {time} </div>
            </div>
        </div>
    )
}

export default Message