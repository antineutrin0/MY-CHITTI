import React, { useState, useEffect, useRef } from 'react';
import { RiRobot3Fill } from "react-icons/ri";

function ChatBox({ messages, onSendMessage }) {
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  useEffect(() => {
    // Scroll to the bottom whenever messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className='flex flex-col h-full justify-between'>
      <div className="flex-1 overflow-y-scroll p-4 bg-slate-600 rounded-lg shadow-lg mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex mb-4 ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-300 text-black'
              } rounded-lg p-3 max-w-lg break-words`}
            >
              {message.sender === 'user' ? (
                <p className='text-sm p-1 font-bold text-black bg-slate-200 rounded-full inline-block mr-2'>You</p>
              ) : (
                <RiRobot3Fill className='text-3xl p-1 text-gray-900 bg-slate-200 rounded-full inline-block mr-2' />
              )}
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <div className="relative w-full">
        <input
          type="text"
          className="p-4 border text-gray-900 border-gray-300 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-20"
          placeholder="Type your message."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          className="absolute right-0 top-0 mt-1 mr-2 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
