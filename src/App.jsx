import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'remixicon/fonts/remixicon.css'

const data = [
  {
    label: "Illustration",
    value: "illustration",
    url: "https://api.dicebear.com/7.x/avataaars/svg?seed="
  },
  {
    label: "Cartoon",
    value: "cartoon",
    url: "https://api.dicebear.com/7.x/adventurer/svg?seed="
  },
  {
    label: "Sketchy",
    value: "sketchy",
    url: "https://api.dicebear.com/7.x/croodles/svg?seed="
  },
  {
    label: "Robots",
    value: "robots",
    url: "https://api.dicebear.com/7.x/bottts/svg?seed="
  },
  {
    label: "Art",
    value: "art",
    url: "https://api.dicebear.com/7.x/pixel-art/svg?seed="
  },
  {
    label: "Male",
    value: "male",
    url: "https://randomuser.me/api/portraits/men/"
  },
  {
    label: "Female",
    value: "female",
    url: "https://randomuser.me/api/portraits/women/"
  },
]

const App = () => {
  const [src, setSrc] = useState("")
  const [option, setOption] = useState("male")

  const generateNumForPerson = () => {
    return Math.floor(Math.random() * 99) + 1
  }

  const generate = () => {
    const obj = data.find((item) => item.value === option)
    if (!obj) return

    let imgUrl = ""
    if (option === "male" || option === "female") {
      imgUrl = `${obj.url}${generateNumForPerson()}.jpg`
    } else {
      const id = Date.now()
      imgUrl = `${obj.url}${id}`
    }
    setSrc(imgUrl)
  }

  const download=(url)=>{
    const a = document.createElement('a')
    a.href = url
    a.download = `${Date.now()}.jpg`
    a.click();
    a.remove();
  }
  
  const copy=(url)=>{
    navigator.clipboard.writeText(url)
    toast.success("Copied to clipboard")
  }

  const onOptionChange = (e) => {
    setOption(e.target.value)
  }

  useEffect(() => {
    generate()
  }, [option])

  return (
    <div className='min-h-screen bg-gradient-to-br 
     from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center text-white px-4'>
      <div className='w-full max-w-md rounded-2xl shadow-2xl
         backdrop-blur-xl border border-slate-700 p-8 space-y-6
        bg-slate-800/40'>

        {/* Avatar */}
        <div className='flex justify-center'>
          <img
            src={src || "/assets/avtar.webp"}
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
          <select
            className='bg-slate-700/60 rounded-xl w-full py-2 px-4 
             focus:ring-2 focus:ring-rose-500 outline-none transition'
            value={option}
            onChange={onOptionChange}
          >
            {data.map((item, index) => (
              <option value={item.value} key={index}>{item.label}</option>
            ))}
          </select>

          <div className='bg-slate-700/60 rounded-xl w-full py-2 px-4 text-slate-300
            font-mono text-sm'>
            {src || "https://deep.com/avatar123.png"}
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex w-full gap-3 flex-wrap justify-center'>
          <button
            onClick={generate}
            className='flex items-center justify-center gap-2
             bg-gradient-to-r from-rose-500 to-orange-600 px-4 py-2 rounded-lg
            font-medium hover:scale-105 transition-transform shadow-md'>
            <i className='ri-refresh-line'></i> Change
          </button>
          <button onClick={()=>download(src)} className='flex items-center justify-center gap-2
             bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-2 rounded-lg
            font-medium hover:scale-105 transition-transform shadow-md'>
            <i className='ri-download-line'></i> Download
          </button>
          <button onClick={copy} className='flex items-center justify-center gap-2
             bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-2 rounded-lg
            font-medium hover:scale-105 transition-transform shadow-md'>
            <i className='ri-file-copy-line'></i> Copy
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
