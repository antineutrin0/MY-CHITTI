import React, { useState } from 'react';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';

const Signup = () => {
  const [formdata,setformdata]=useState({
    name:'',
    email:'',
    password:''
  })

   function handlesignup(e){
     
   }

  return (
    <div className="w-full lg:w-1/2 h-full lg:h-screen mx-auto mt-8 lg:mt-12 flex flex-col lg:flex-row items-center justify-center rounded-lg shadow-lg overflow-hidden bg-slate-600">
      
      {/* Left Card - Signup Form */}
      <div className="w-full lg:w-1/2 p-4 lg:p-8 bg-slate-600">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center text-gray-100">Signup</h2>
        
        <form onSubmit={handlesignup}>
          <div className="mb-4">
            <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter yol ,ur email"
              className="w-full p-3 border rounded-lg bg-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border rounded-lg bg-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 my-4 bg-slate-800 text-gray-100 font-bold rounded-lg hover:bg-slate-900 focus:outline-none"
          >
            Signup
          </button>
        </form>
      </div>

      {/* Right Card - Information about My-Chitti */}
      <div className="w-full h-full lg:w-1/2 p-4 lg:p-8 bg-slate-800 text-gray-100 flex flex-col justify-center">
        <h2 className="text-2xl lg:text-2xl font-bold my-4 border-b">Welcome to MY-CHITTI</h2>
        <p className="text-lg lg:text-xl">
          MY-CHITTI is your personal AI assistant designed to help you manage your daily tasks. Signin with these ways...
        </p>
        <div className="flex flex-col mt-4 space-y-2">
          <button className="w-full py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 flex items-center justify-center">
            <FaGoogle className="mr-2" /> Sign in with Google
          </button>
          <button className="w-full py-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-950 flex items-center justify-center">
            <FaGithub className="mr-2" /> Sign in with GitHub
          </button>
          <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 flex items-center justify-center">
            <FaFacebook className="mr-2" /> Sign in with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
