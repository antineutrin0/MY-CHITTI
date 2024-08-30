import React, { useState, useRef } from 'react';
import { RiRobot3Fill } from 'react-icons/ri';
import ChatBox from '../components/ChatBox';
import { RxCrossCircled } from "react-icons/rx";

const Diary = () => {
  const [pages, setPages] = useState([{ title: '', content: '' }]);
  const [currentPage, setCurrentPage] = useState(0);
  const [saved, setSaved] = useState(false);
  const [chatbotclicked,setchatbotclicked]=useState(false);
  const [chatbox,setchatbox]=useState(true);
  const [buttonPosition, setButtonPosition] = useState({ x:20, y:500 });
  const carouselRef = useRef(null);
  const buttonRef = useRef(null);

  const [messages, setMessages] = useState([
    { sender: 'other', text: 'Hey there! How are you doing?' },
    { sender: 'user', text: 'I am good! How about you?' },
    { sender: 'other', text: 'I’m doing great, thanks for asking!' },
  ]);

  const handleSendMessage = (newMessage) => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { sender: 'user', text: newMessage }]);
    }
  };

  const handlechatbot=()=>{
    setchatbotclicked(!chatbotclicked);
    setchatbox(!chatbox);
    setButtonPosition({ x:10 , y: 20 });
  }
  const handlechatbox=()=>{
    setchatbox(!chatbox);
    setchatbotclicked(!chatbotclicked);
    setButtonPosition({ x:20 , y: 500 });
  }

  const handleTitleChange = (e) => {
    const newPages = [...pages];
    newPages[currentPage].title = e.target.value;
    setPages(newPages);
  };

  const handleContentChange = (e) => {
    const newPages = [...pages];
    newPages[currentPage].content = e.target.value;
    setPages(newPages);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const addNewPage = () => {
    setPages([...pages, { title: '', content: '' }]);
    setCurrentPage(pages.length);
  };

  const deleteCurrentPage = () => {
    if (pages.length > 1) {
      const newPages = [...pages];
      newPages.splice(currentPage, 1);
      setPages(newPages);
      setCurrentPage(currentPage === 0 ? 0 : currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
      carouselRef.current.scrollBy({ left: carouselRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      carouselRef.current.scrollBy({ left: -carouselRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  const handlePageClick = (index) => {
    setCurrentPage(index);
    carouselRef.current.scrollTo({ left: index * carouselRef.current.clientWidth, behavior: 'smooth' });
  };

  // Dragging logic for AI button
  const handleMouseDown = (e) => {
    const initialX = e.clientX;
    const initialY = e.clientY;
    const startX = buttonPosition.x;
    const startY = buttonPosition.y;

    const handleMouseMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - initialX;
      const deltaY = moveEvent.clientY - initialY;
      setButtonPosition({ x: startX + deltaX, y: startY + deltaY });
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-2 lg:mt-4 p-4 bg-gray-700 text-gray-200 rounded-lg shadow-lg relative">
      {/* Title Section */}
      <div>
        <h1 className="text-2xl bg-slate-800 p-2 lg:p-4 rounded-lg text-blue-900 text-center mb-2 font-bold">Share your voice with CHITTI</h1>
      </div>
      <input
        type="text"
        value={pages[currentPage].title}
        onChange={handleTitleChange}
        placeholder="Enter Title"
        className="w-full text-2xl font-bold p-2 mb-4 bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-blue-500"
      />

      {/* Carousel Wrapper */}
      <div className="relative overflow-hidden w-full" ref={carouselRef}>
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {pages.map((page, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {/* Notebook Content Section */}
              <textarea
                value={page.content}
                onChange={handleContentChange}
                placeholder="Start writing here..."
                className="w-full text-lg h-96 p-8 bg-transparent bg-gray-700 rounded-lg focus:outline-none focus:border-blue-500 resize-none leading-loose"
                style={{
                  lineHeight: '25px',
                  fontFamily: 'monospace',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="mt-4 w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
      >
        Save
      </button>

      {saved && (
        <div className="mt-2 text-green-400 text-center">
          Your content has been saved!
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={handlePrevPage}
          className="w-10 h-10 bg-gray-500 text-white rounded-full flex items-center justify-center hover:bg-gray-600"
          disabled={currentPage === 0}
        >
          &#8249;
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={handleNextPage}
          className="w-10 h-10 bg-gray-500 text-white rounded-full flex items-center justify-center hover:bg-gray-600"
          disabled={currentPage === pages.length - 1}
        >
          &#8250;
        </button>
      </div>

      {/* Add New Page Button */}
      <button
        onClick={addNewPage}
        className="absolute top-24 lg:top-6 right-6 w-6 lg:w-10 h-6 lg:h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600"
        title="Add New Page"
      >
        +
      </button>

      {/* Delete Page Button */}
      <button
        onClick={deleteCurrentPage}
        className="absolute top-24 lg:top-6 right-12 lg:right-16 w-6 lg:w-10 h-6 lg:h-10 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
        title="Delete Current Page"
      >
        🗑️
      </button>

      {/* Page Numbers Navigation */}
      <div className="flex flex-row items-center w-2/3 mx-auto overflow-x-scroll justify-center mt-4">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(index)}
            className={`w-8 h-8 mx-1 rounded-full ${
              index === currentPage ? 'bg-blue-500' : 'bg-gray-500'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* AI Button */}
      <div
        ref={buttonRef}
        className="absolute cursor-pointer"
        style={{ top: buttonPosition.y, left: buttonPosition.x }}
        onMouseDown={handleMouseDown}
      >
      
     {
        !chatbotclicked&& <button onClick={handlechatbot}
        className="w-10 h-10 bg-green-700 text-white rounded-full flex items-center justify-center"
        title="AI Assistant"
      >
        <RiRobot3Fill className="text-2xl" />
      </button>
     }
     <div className='flex flex-col items-end w-76 lg:w-96 h-96 overflow-scroll'>
           {!chatbox&&<button onClick={handlechatbox} className='text-xl '><RxCrossCircled /></button>}
             {(chatbotclicked&&!chatbox)&&<ChatBox messages={messages} onSendMessage={handleSendMessage} />}
     </div>

      </div>
    </div>
  );
};

export default Diary;
