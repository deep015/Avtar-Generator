import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "remixicon/fonts/remixicon.css";
import "react-toastify/dist/ReactToastify.css";

const data = [
  { label: "Illustration", value: "illustration", url: "https://api.dicebear.com/7.x/avataaars/svg?seed=", desc: "Cartoonish, stylish human avatars." },
  { label: "Cartoon", value: "cartoon", url: "https://api.dicebear.com/7.x/adventurer/svg?seed=", desc: "Fun adventurous characters." },
  { label: "Sketchy", value: "sketchy", url: "https://api.dicebear.com/7.x/croodles/svg?seed=", desc: "Hand-drawn, sketchy avatars." },
  { label: "Robots", value: "robots", url: "https://api.dicebear.com/7.x/bottts/svg?seed=", desc: "Cute futuristic robots." },
  { label: "Art", value: "art", url: "https://api.dicebear.com/7.x/pixel-art/svg?seed=", desc: "Pixel art avatars with retro style." },
  { label: "Male", value: "male", url: "https://randomuser.me/api/portraits/men/", desc: "Random male avatars." },
  { label: "Female", value: "female", url: "https://randomuser.me/api/portraits/women/", desc: "Random female avatars." },
];

const App = () => {
  const [option, setOption] = useState("male");
  const [avatars, setAvatars] = useState([]);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const generateNumForPerson = () => Math.floor(Math.random() * 99) + 1;

  const generateAvatar = () => {
    const obj = data.find((item) => item.value === option);
    if (!obj) return;
    const imgUrl = option === "male" || option === "female" ? `${obj.url}${generateNumForPerson()}.jpg` : `${obj.url}${Date.now()}`;
    setAvatars([imgUrl, ...avatars]);
  };

  const download = (url) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = `avatar_${Date.now()}.jpg`;
    a.click();
    toast.success("Avatar downloaded!");
  };

  const copy = (url) => {
    navigator.clipboard.writeText(url);
    toast.success("Copied to clipboard!");
  };

  const filteredData = data.filter((item) => item.label.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className={`${darkMode ? "bg-slate-900" : "bg-gray-100"} min-h-screen transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto p-6 space-y-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
          <h1 className={`${darkMode ? "text-white" : "text-gray-900"} text-4xl font-extrabold bg-gradient-to-r from-rose-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent`}>
            Avatar Dashboard
          </h1>

          <div className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Search avatar types..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 rounded-xl outline-none border border-gray-500 focus:ring-2 focus:ring-rose-500"
            />
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:scale-105 transition-transform"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>

        {/* Simple How-to-Use Section */}
        <div className={`${darkMode ? "text-white" : "text-gray-900"} bg-slate-800/40 p-4 rounded-2xl shadow-lg mb-4`}>
          <h2 className="text-xl font-bold mb-2">How to Use</h2>
          <p className="text-sm">
            Select an avatar type, click <strong>Generate Avatar</strong>, then hover over an avatar to <strong>Download</strong> or <strong>Copy URL</strong>.
          </p>
        </div>

        {/* Options */}
        <div className="flex flex-wrap gap-3 mb-4">
          {filteredData.map((item) => (
            <button
              key={item.value}
              onClick={() => setOption(item.value)}
              className={`px-4 py-2 rounded-xl font-medium ${
                option === item.value ? "bg-gradient-to-r from-rose-500 to-orange-500 text-white" : "bg-slate-700/60 text-slate-300"
              } hover:scale-105 transition-transform`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Generate Button */}
        <div className="mb-6">
          <button
            onClick={generateAvatar}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold shadow-lg hover:scale-105 transition-transform"
          >
            Generate Avatar
          </button>
        </div>

        {/* Avatar Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {avatars.length === 0 && <p className={`${darkMode ? "text-white" : "text-gray-900"} col-span-full text-center`}>No avatars generated yet. Click "Generate Avatar" above to start.</p>}
          {avatars.map((avatar, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              draggable
              onDragStart={(e) => e.dataTransfer.setData("text/plain", avatar)}
            >
              <img
                src={avatar}
                alt="Avatar"
                className="w-full h-36 rounded-xl object-cover shadow-lg transition-transform group-hover:scale-105 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 transition-opacity rounded-xl">
                <button onClick={() => download(avatar)} className="px-2 py-1 bg-blue-500 rounded text-sm font-medium">Download</button>
                <button onClick={() => copy(avatar)} className="px-2 py-1 bg-green-500 rounded text-sm font-medium">Copy URL</button>
              </div>
            </div>
          ))}
        </div>

      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default App;
