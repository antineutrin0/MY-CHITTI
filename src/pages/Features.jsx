import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-center text-gray-100 mb-8">
        MY-CHITTI Features
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {/* My Character Model Feature */}
        <div className="bg-slate-600 rounded-lg shadow-lg p-6 flex flex-col items-center">
          <img
            src="https://i.ibb.co/v3ZBXNV/Its-me-1-1.png"
            alt="My Character Model"
            className="w-40 h-44 rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-100 mb-2">Your Character Model</h2>
          <p className="text-gray-100 text-center mb-6">
            Customize your own AI character model. Help it to khow about you better.
          </p>
          <Link to='/mychar'>
            <button className="w-44 p-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600">
            Try it
            </button>
          </Link>
        </div>

        {/* AI News Presenter Feature */}
        <div className="bg-slate-600 rounded-lg shadow-lg p-6 flex flex-col items-center">
          <img
            src="https://i.ibb.co/SDjZCgh/file.png"
            alt="AI News Presenter"
            className="w-40 h-44 rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-100 mb-2">Your News Presenter</h2>
          <p className="text-gray-100 text-center mb-6">
            Get the latest news presented by your AI. Also discuss with it about the news.
          </p>
          <Link to='/news'>
            <button className="w-44 p-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
              Try it
            </button>
          </Link>
        </div>

        {/* Health Assistant Feature */}
        <div className="bg-slate-600 rounded-lg shadow-lg p-6 flex flex-col items-center">
          <img
            src="https://i.ibb.co/D7Lg4ms/Navy-Creative-AI-Marketing-Trends-Animated-Social-Media.png"
            alt="Health Assistant"
            className="w-40 h-44 rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-100 mb-2">Health Assistant</h2>
          <p className="text-gray-100 text-center mb-6">
            Your personal health and fitness companion. use it to be always fit.
          </p>
          <Link to='/health'>
            <button className="w-44 p-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600">
              Try it
            </button>
          </Link>
        </div>

        {/* Weather Update Feature */}
        <div className="bg-slate-600 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center sm:col-start-2 lg:col-start-auto">
          <img
            src="https://i.ibb.co/TPkXqhR/Modern-Neon-AI-Facebook-Post.png"
            alt="Weather Update"
            className="w-40 h-44 rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-100 mb-2">Weather Update</h2>
          <p className="text-gray-100 text-center mb-6">
            Stay updated with real-time weather information. Be safe be happy.
          </p>
          <Link to='/weather'>
            <button className="w-44 p-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600">
              Try it
            </button>
          </Link>
        </div>

        {/* AI Diary Feature */}
        <div className="bg-slate-600 rounded-lg shadow-lg p-6 flex flex-col items-center">
          <img
            src="https://i.ibb.co/bQzRcs8/Dear-Dairy-Lined-A4-Document.png"
            alt="AI Diary"
            className="w-40 h-44 rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-100 mb-2">Your AI Diary</h2>
          <p className="text-gray-100 text-center mb-6">
            Maintain your diary with the help of CHITTI. It gonna help to get extreme experience. 
          </p>
          <Link to='/diary'>
            <button className="w-44 p-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600">
             Try it
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;
