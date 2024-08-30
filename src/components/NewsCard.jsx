import React, { useState } from 'react';
import { IoBookmarksOutline } from "react-icons/io5";
import { BsChatDotsFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function NewsCard({ title, date, source, description }) {
  const [bookmarkclicked,setbookmarkclicked]=useState(false);

  const handlebookmark=()=>{
    setbookmarkclicked(!bookmarkclicked);
    console.log(bookmarkclicked)
  }

  const handleReactionSubmit = () => {
    
  };

  return (
    <div className="bg-sky-950 flex flex-col justify-between shadow-lg rounded-lg h-2/3 overflow-scroll my-4 mx-auto w-full lg:w-3/4">
      <div className="p-4">
        <div className='flex flex-row justify-between items-start'>
        <h3 className="text-lg lg:text-xl font-bold text-gray-200">{title}</h3>
        <button onClick={handlebookmark}>
        <IoBookmarksOutline className={`${!bookmarkclicked?'text-xl text-white bg-slate-600 ':'text-xl text-black bg-slate-100 '} lg:text-2xl p-1 rounded-sm`}/>
        </button>
       
        </div>
        
        <p className="text-sm text-gray-100">{date} - {source}</p>
        <p className="text-gray-100 lg:text-lg mt-2 border-b">{description}</p>
      </div>
      <div className="p-4 border-gray-200">
        <Link to='/newschat'>
        <button
          className="mt-2 flex flex-row items-start lg:items-center justify-center bg-blue-600 text-white py-2 lg:py-4 rounded-lg w-full hover:bg-blue-500"
          onClick={handleReactionSubmit}
        >
         <BsChatDotsFill className='m-1 lg:mr-2 text-2xl' />
          <p className='text-lg lg:text-2xl'>Discuss with CHITTI about the news</p>
        </button>
        </Link>
      </div>
    </div>
  );
}

export default NewsCard;
