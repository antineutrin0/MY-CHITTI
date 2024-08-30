import React, { useState } from 'react';
import ChatBox from '../components/ChatBox';

function Mychar() {
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

  return (
    <div className="flex flex-col mx-auto w-full lg:w-3/4 h-screen">
      <div>
        <p className="text-3xl text-blue-900 text-center p-2 font-bold font-mono">
          Let's Start Talking
        </p>
      </div>
      <ChatBox messages={messages} onSendMessage={handleSendMessage} />
    </div>
  );
}

export default Mychar;
