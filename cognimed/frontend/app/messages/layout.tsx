"use client"
import ChatHead from "@/components/chatHead"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"

// scroll add krna hai
export default function ChatSectionmessages({
  children,
}: {
  children: React.ReactNode
}) {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([])
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [search, setSearch] = useState("")
  const [modal, setModal] = useState(false)
  const buttonRef = useRef(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/messages');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        console.log(jsonData)
        setData(jsonData);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (search) {
      
      const fetchUsers = async () => {
        try {
          setSearchLoading(true)
          setModal(true)
          const response = await fetch(`http://localhost:3001/search/${search}`);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const jsonData = await response.json();
          console.log(jsonData)
          console.log(search.length)
          setUserData(jsonData);
          console.log(userData);
        } finally {
          setSearchLoading(false)
        }
        if (search.length >= 1) {

        }
      };

      fetchUsers();
    }
  }, [search])

  const [isOpen, setIsOpen] = useState(true)
  return (
    <section className="relative flex w-full h-screen  ">
      {/* scroll add krna hai */}
      <div className={`    bg-zinc-900 flex transition-all duration-300 ${isOpen ? "w-1/2 " : "w-0"}   flex-col border-r-[1px] border-gray-600`}>
        {/* search bar */}
        <div className='w-50vw gap-3 p-4 flex border-b-2 border-black shadow-black'>

<label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search Topic</label>
<div className={`relative w-full transition all  duration-300 ${isOpen ? "" : "hidden"}`}>
  <div className={` transition all duration-300  ${isOpen ? "" : "w-0"} absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none`}>
    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
    </svg>
  </div>
  <input type="search" id="search" value={search} onChange={(e)=>{setSearch(e.target.value)}} className="rounded-3xl h-2 w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Name" required />
</div>


<button className='bg-white p-3 rounded-sm' onClick={()=> {alert("hello")}} ref={buttonRef}><svg className="w-2 h-2" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">

  <g id="SVGRepo_bgCarrier" stroke-width="0" />

  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096" />

  <g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#41b3ec" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" /> </g>

</svg></button>
          {/* search bar ends here */}
        </div>




        {(search) &&

          <div id="default-modal" tabIndex={-1} aria-hidden="true" className={`${modal ? "" : "hidden"} no-scrollbar overflow-y-scroll fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
            <div className="relative p-4 w-full max-w-xl max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {isLoading && (<><p>Loading...</p></>)}
                {userData.map((item: any, index: any) => (
                  <>
                    <Link id={item._id} href={`/messages/${item._id.toString()}`} onClick={() => setModal(false)} ><ChatHead name={item.username} lastMsg="last message" id="1234" /></Link>
                    <div className='border-b border-gray-500 w-full'></div>
                  </>
                ))}
              </div>
            </div>
          </div>
        }


        {/* <div className={`flex flex-col overflow-scroll no-scrollbar h-screen text-2xl `} >

                    </div> */}





        {(data) ? (
          <div className={`flex flex-col overflow-scroll no-scrollbar h-screen text-2xl `} >

            {data.map((item: any, index: any) => (
              <>
                <Link id={item._id} href={`/messages/${item._id.toString()}`}><ChatHead name={item.participants[0].one} lastMsg="last message" id="1234" /></Link>
                <div className='border-b border-gray-500 w-full'></div>
              </>
            ))}
          </div>

        ) : (
          <p>Loading...</p>
        )}



      </div>
      {/* chevron */}
      <div className=" relative flex flex-col justify-center items-center"  >
        <div className="h-[45%] w-[1px] border-r-1 border-violet" ></div>
        <button className={`fixed z-20 ${isOpen ? "rotate-[180deg]" : ""} transition-all duration-300 `} onClick={() => { setIsOpen((curr) => !curr) }} >
          <div className="bg-gray-800 p-2 rounded-full" >

            <svg className="w-3 h-3 rounded-full text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
            </svg>

          </div>
        </button>

        <div className="h-[45%] w-[1px] border-r-1 border-violet" ></div>
      </div>
      {children}
    </section>
  )
}