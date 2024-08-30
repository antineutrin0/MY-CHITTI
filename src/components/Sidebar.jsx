import React, { useEffect } from 'react'
import { BsChatDots } from "react-icons/bs";
function Sidebar() {
   
  return (
  <div>
  <div className='flex flex-col w-full  h-screen p-4 rounded-xl bg-gray-800 '>
  <div className='flex flex-row justify-between items-center bg-zinc-600 hover:bg-zinc-700 rounded-lg p-2 m-2' >
  <div className='text-white text-2xl font-bold'>
    New Chat
   </div>
  <div className='text-white text-2xl font-bold'>
  < BsChatDots />
  </div>
  </div>
  <div className='bg-zinc-600 hover:bg-zinc-700 text-white text-xl rounded-lg p-2 m-2'>
    chat-1
  </div>
  <div className='bg-zinc-600  hover:bg-zinc-700 text-white text-xl rounded-lg p-2 m-2'>
    chat-2
  </div >
  <div className='bg-zinc-600  hover:bg-zinc-700 text-white text-xl rounded-lg p-2 m-2'>
    chat-3
  </div>
  </div>
  </div>
  )
}

export default Sidebar