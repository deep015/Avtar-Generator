import React from 'react'
import 'remixicon/fonts/remixicon.css'
const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br
     from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center text-white px-4'>
      
      {/* Card */}
      <div className='w-full max-w-md rounded-2xl shadow-2xl 
        backdrop-blur-xl border border-slate-700 p-8 space-y-6
        bg-slate-800/40'>
        
        {/* Avatar */}
        <div className='flex justify-center'>
          <img 
            src='./assets/avatar.webp'
            alt="Avatar"  
            className="w-32 h-32 rounded-full border-4 border-slate-600
            shadow-lg object-cover hover:scale-105 transition-transform"
          />
        </div>

        {/* Title + Subtitle */}
        <div className='text-center space-y-2'>
          <h1 className='text-3xl font-bold bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent'>
            Avatar Generator
          </h1>
          <p className='text-slate-400 text-sm'>
            Generate unlimited avatars for your website
          </p>
        </div>

        {/* Controls */}
        <div className='w-full space-y-3'>
          <select className='bg-slate-700/60 rounded-xl w-full py-2 px-4 
            focus:ring-2 focus:ring-rose-500 outline-none transition'>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="random">Random</option>
          </select>

          <div className='bg-slate-700/60 rounded-xl w-full py-2 px-4 text-slate-300
            font-mono text-sm'>
            https://deep.com/avatar123.png
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex w-full gap-3 flex-wrap justify-center'>
          <button className='flex items-center justify-center gap-2 
            bg-gradient-to-r from-rose-500 to-orange-600 px-4 py-2 rounded-lg
            font-medium hover:scale-105 transition-transform shadow-md'>
            <i className='ri-refresh-line'></i> Change
          </button>
          <button className='flex items-center justify-center gap-2 
            bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-2 rounded-lg
            font-medium hover:scale-105 transition-transform shadow-md'>
            <i className='ri-download-line'></i> Download
          </button>
          <button className='flex items-center justify-center gap-2 
            bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-2 rounded-lg
            font-medium hover:scale-105 transition-transform shadow-md'>
            <i className='ri-file-copy-line'></i> Copy
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
