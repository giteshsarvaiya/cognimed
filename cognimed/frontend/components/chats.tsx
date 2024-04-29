import React, {useState, useEffect} from 'react'
import { usePathname } from 'next/navigation'
import Message from './message'


// scroll add krna hai aur time stamps kaise dikhana hai ye dekhna hai aur today ivider kaise addkrna hai wo dekhna hai (for chat with persons) research topic me today waala divider nai hai
const Chats = ({params}:{params:string}) => {
  const pathname =  usePathname();
  const pathnameMiddle  = pathname.split('/')[1]
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
   
    const fetchData = async () => {
      if(pathnameMiddle=="messages"){
      try {
        const response = await fetch(`http://localhost:3001/messages/${params}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        console.log(typeof(jsonData))
        setData(jsonData);
      } finally {
        setIsLoading(false);
      }
    }
    if(pathnameMiddle=="research"){
      try {
        const response = await fetch(`http://localhost:3001/research/${params}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        console.log(typeof(jsonData))
        setData(jsonData);
      } finally {
        setIsLoading(false);
      }
    }
    };

    fetchData();
  }, []);

  return (
    <div className='flex w-full overflow-scroll no-scrollbar  h-screen justify-between flex-col bg-gradient-to-b from-gray-950 to-gray-900'>
      <div className='flex sticky z-10 top-0 justify-start items-center text-3xl  p-6 bg-gradient-to-b  from-zinc-900 via-zinc-900/100 to-zinc-900/75  ' >
        
      {data && (
        <ul>
          {data.participants.map((participant, index) => (
            <li key={index}>{participant.one}</li>
          ))}
        </ul>
      )}
        
      </div>
      {/* scroll add krna hai */}
      

        {/* msgs or texts */}

        {data && (
        <div className='flex flex-col justify-end p-4 '>
          {data.messages.map((messages, index) => (
            <div id= {index} className="my-2">
            <Message text={messages.text} sender={messages.sender} timestamp={messages.timestamp} />
            </div>
          ))}
      </div>
      )}
        

      
      {/* input for chats */}
      <div className="flex sticky bottom-0 w-full gap-2 h-16 justify-between items-center p-6 bg-gradient-to-r from-gray-900 to-gray-950">
        <form className="flex items-center justify-between w-full gap-4 ">
          <label htmlFor="input" className="sr-only">Message</label>
          <div className="relative w-full">
            {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z" />
              </svg>
            </div> */}
            <input type="text" id="input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type here something..." required />
            <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
              {/* send button */}
              <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                <g id="SVGRepo_iconCarrier"> <path d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g>

              </svg>
            </button>
          </div>
          {/* mic button */}
          <button type="button" className='w-fit p-4 h-full rounded-full bg-gray-800 ' >
            <svg className="w-4 h-4 text-white dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" />
            </svg>
          </button>
        </form>
      </div>

    </div>
  )
}

export default Chats