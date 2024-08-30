import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

function Home() {
  const [isSidebarClicked, setIsSidebarClicked] = useState(false);

  // Callback function to receive data from Header
  const handleSidebarStatus = (status) => {
    setIsSidebarClicked(status);
  };

  return (
    <div className='bg-slate-900 h-full w-screen opacity-80'>
      <Header onSidebarToggle={handleSidebarStatus} />
      <div className='flex flex-row mx-auto'>
        <div className={`w-3/4 lg:w-1/4 absolute lg:static z-10 ${isSidebarClicked ? 'block' : 'hidden'}`}>
          <Sidebar />
        </div> 
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
