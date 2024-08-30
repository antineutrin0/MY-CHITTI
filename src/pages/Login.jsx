import React from 'react';

const Login = () => {
  return (
    <div className="w-full lg:w-1/3 h-full lg:h-screen mx-auto mt-8 lg:mt-12 flex flex-col items-center justify-center rounded-lg shadow-lg overflow-hidden bg-slate-600">
      
      {/* Signup Form */}
      <div className="w-full p-4 lg:p-8 bg-slate-600">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center text-gray-100">Login</h2>
        
        <form>
          <div className="mb-4">
            <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
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
            Login
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default Login;
