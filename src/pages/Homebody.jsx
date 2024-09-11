import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

function Homebody() {

  return (
    <div className='flex flex-col bg-slate-900 opacity-100 w-full lg:w-3/4 h-full mx-auto justify-between items-center'>
      <div className='flex flex-col justify-between items-center'>
        <div>
          <img
            src="https://i.ibb.co/K6jnQ3J/Untitled-design-3-removebg-preview.png"
            alt="Logo"
            className="h-44 w-44 mt-3"
          />
        </div>
        <div>
          <p className='text-xl lg:text-6xl -mt-16 text-blue-900 font-bold text-center font-mono'> Hello! Introducing Your Daily Assistant </p>
        </div>
        <div>
          <p className='text-lg  lg:text-xl p-8 text-gray-200 text-center'>MYAI is a collaboration between ChatGPT and Gemini AI, designed to enhance your daily life by providing versatile assistance across various tasks.MYAI combines the strengths of both AI systems to deliver a seamless and efficient experience. </p>
        </div>
      </div>
      <div className="carousel w-3/4 rounded-xl mb-0">
        <div id="item1" className="carousel-item w-full">
          <div className='flex flex-col-reverse  lg:flex-row w-full '>
            <div className='typewriter-container p-2 h-1/3 lg:h-full flex flex-col  justify-center items-center  bg-gray-800 rounded-xl lg:mr-4'>
              <p className='typewriter text-lg lg:text-3xl font-sans font-bold text-blue-700 text-center p-2 lg:p-4 '>CHITTI Your Character Model </p>
              <br />
              <p className= 'hidden lg:block text-lg text-center font-semibold  text-white p-2 lg:p-4'>Chat with chitti to know about you. Discuss about your likes and dislikes.</p><br />
              <Link to='/mychar'><button className=" btn btn-active btn-primary">try me</button></Link>
            </div>
            <img
              src="https://i.ibb.co/v3ZBXNV/Its-me-1-1.png"
              className="w-full h-full rounded-xl" />
          </div>
        </div>
        <div id="item2" className="carousel-item w-full">
          <div className='flex flex-col-reverse lg:flex-row w-full'>
            <div className='typewriter-container p-2 h-1/3 lg:h-full flex flex-col justify-center items-center  bg-gray-800 rounded-xl lg:mr-4'>
              <p className='typewriter text-xl lg:text-3xl font-sans font-bold text-blue-700 text-center p-2 lg:p-4 '> Smart news reader with AI </p>
              <br />
              <p className='typewriter hidden lg:block text-lg text-center font-semibold text-white p-4'>Read the update news of whole world in one platform at a time. Also discuss with Chitti</p><br />
              <Link to='/news'><button className=" btn btn-active btn-primary">try me</button></Link>
            </div>
            <img
              src="https://i.ibb.co/SDjZCgh/file.png"
              className="w-full h-full rounded-xl" />
          </div>
        </div>
        <div id="item3" className="carousel-item w-full">
          <div className='flex flex-col-reverse lg:flex-row w-full'>
            <div className='typewriter-container p-2 h-1/3 lg:h-full flex flex-col justify-center items-center  bg-gray-800 rounded-xl lg:mr-4'>
              <p className='typewriter text-xl lg:text-3xl font-sans font-bold text-blue-700 text-center p-2 lg:p-4 '>Your Health Assistant</p>
              <br />
              <p className='typewriter hidden lg:block text-lg text-center font-semibold text-white p-4'>Healthy life, better life. Be healthy getting help from Chitti. Chat with Chitti about your health condition and take suggestions.</p><br />
              <button className="btn btn-active btn-primary">try me</button>
            </div>
            <img
              src="https://i.ibb.co/D7Lg4ms/Navy-Creative-AI-Marketing-Trends-Animated-Social-Media.png"
              className="w-full h-full rounded-xl" />
          </div>
        </div>
        <div id="item4" className="carousel-item w-full rounded-xl">
          <div className='flex flex-col-reverse lg:flex-row w-full'>
            <div className='typewriter-container p-2 h-1/3 lg:h-full flex flex-col justify-center items-center  bg-gray-800 rounded-xl lg:mr-4'>
              <p className='typewriter text-xl lg:text-3xl font-sans font-bold text-blue-700 text-center p-2 lg:p-4 '>Weather Update AI</p>
              <br />
              <p className='typewriter hidden lg:block text-lg text-center font-semibold text-white p-4'>Always check current weather for being safe. Make your life better connected to this feature. </p><br />
              <Link to='/weather'><button className=" btn btn-active btn-primary">try me</button></Link>
            </div>
            <img
              src="https://i.ibb.co/TPkXqhR/Modern-Neon-AI-Facebook-Post.png"
              className="w-full h-full rounded-xl" />
          </div>
        </div>
        <div id="item5" className="carousel-item w-full">
          <div className='flex flex-col-reverse lg:flex-row w-full'>
            <div className='typewriter-container p-2 h-1/3 lg:h-full flex flex-col justify-center items-center  bg-gray-800 rounded-xl lg:mr-4'>
              <p className='typewriter text-xl lg:text-3xl font-sans font-bold text-blue-700 text-center p-2 lg:p-4 '>Daily Diary with AI</p>
              <br />
              <p className='typewriter hidden lg:block text-lg text-center font-semibold text-white p-4'>Write in a smart way through this feature. You will get much better experience in writing with Chitti. For any help can knock Chitti-bot.</p><br />
              <Link to='/diary'><button className="btn btn-active btn-primary">try me</button></Link>
            </div>
            <img
              src="https://i.ibb.co/bQzRcs8/Dear-Dairy-Lined-A4-Document.png"
              className="w-full h-full  rounded-xl" />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-1 py-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
        <a href="#item5" className="btn btn-xs">5</a>
      </div>
    </div>
  );
}

export default Homebody;
