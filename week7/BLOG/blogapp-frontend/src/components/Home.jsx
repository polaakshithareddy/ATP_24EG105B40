import React from 'react';
import { NavLink } from 'react-router';

function Home() {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center bg-[#fbfbfd] px-6 rounded-3xl overflow-hidden shadow-sm my-6 relative border border-[#e8e8ed]">
      {/* Decorative subtle pastel blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-pink-100/60 blur-[80px]"></div>
        <div className="absolute top-[20%] right-[0%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[80px]"></div>
        <div className="absolute bottom-[0%] left-[20%] w-[50%] h-[50%] rounded-full bg-orange-50/50 blur-[80px]"></div>
      </div>

      <div className="relative z-10 max-w-2xl text-center space-y-6 mt-4 mb-10">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#1d1d1f]">
          Latest Stories
        </h1>
        <p className="text-lg font-medium text-[#6e6e73] max-w-xl mx-auto leading-relaxed">
          Discover the latest insights and articles from our community.
        </p>
        
        <div className="p-8 mt-10 bg-white/70 backdrop-blur-xl rounded-2xl border border-[#e8e8ed]/60 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transform transition-transform hover:-translate-y-0.5 duration-300 max-w-sm mx-auto">
          <p className="text-[#6e6e73] mb-6 text-sm font-medium">Please log in to view the latest articles.</p>
          <NavLink 
            to="/login" 
            className="inline-block bg-[#0066cc] text-white font-medium text-sm px-8 py-2.5 rounded-full hover:bg-[#004499] transition-colors duration-300 shadow-sm"
          >
            Sign In
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Home;