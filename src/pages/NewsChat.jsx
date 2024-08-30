import React, { useState } from 'react'
import ChatBox from '../components/ChatBox'

function NewsChat() {
    const newsData = [
        {
          title: 'Breaking News: Market Hits All-Time High',
          date: 'August 25, 2024',
          source: 'BBC News',
          description: 'The stock market reached an all-time high today, with major indices soaring due to investor optimism.',
        }
        // Add more news items as needed
      ];
    const [messages, setMessages] = useState([
        { sender: 'other', text: 'Hey there! What is your query regarding this news?' },
      ]);
    
      const handleSendMessage = (newMessage) => {
        if (newMessage.trim() !== '') {
          setMessages([...messages, { sender: 'user', text: newMessage }]);
        }
      };

  return (
    <div className='flex flex-col bg-slate-900 items-center w-full h-screen mx-auto '>
        <h1 className='text-2xl text-blue-900 text-center p-2 font-bold font-mono border-b'>Discuss With CHITTI</h1>
        <div className='w-full lg:w-3/4 h-2/5 overflow-scroll'>
      {newsData.map((news, index) => (
        <div key={index} className="p-4">
          <h3 className="text-lg lg:text-xl font-bold text-gray-200">{news.title}</h3>
          <p className="text-sm text-gray-100">{news.date} - {news.source}</p>
          <p className="text-gray-100 lg:text-lg mt-2 border-b">{news.description}</p>
        </div>
      ))}
    </div>
        <div className='w-full lg:w-3/4 h-3/5 '>
        <ChatBox messages={messages} onSendMessage={handleSendMessage} />
        </div>
    </div>
  )
}

export default NewsChat