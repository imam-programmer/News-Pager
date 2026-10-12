import { Menu, Moon, Search, Sun, X } from "lucide-react";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import axios from "axios";

const Navbar = () => {
  const { theme, setTheme, category, setCategory, categories ,Articles,setArticles,} =
    useContext(ThemeContext);

  const [open, setOpen] = useState(false);

 async function handleSearch(e){
const search=e.target.value
try{
  const res=await axios.get(`https://newsapi.org/v2/top-headlines?q=${search}&apiKey=${import.meta.env.VITE_API_KEY}`)
  setArticles(res.data.articles)
}catch(error){
  console.log(error)
}
  }
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const handleCategory = (cat) => {
    setCategory(cat);
    setOpen(false);
  };

  const linkClass = (cat) =>
    `capitalize cursor-pointer transition ${
      category === cat
        ? "text-blue-600 dark:text-white font-semibold border-b-2 border-blue-600 dark:border-white"
        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white"
    }`;

  return (
    <div className="fixed w-full z-10 bg-white dark:bg-[#00000083] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* logo */}
        <div className="md:text-2xl text-lg font-bold text-blue-600 dark:text-gray-200 cursor-pointer">
          NewsApp
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={linkClass(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="relative bg-gray-200 p-2 rounded-lg">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
            <input onChange={handleSearch}
              type="text"
              placeholder="Search news..."
              className="md:pl-10 pl-7 w-28 md:w-64 outline-none"
            />
          </div>

          <button
            onClick={toggleTheme}
            className="bg-gray-200 px-3 py-2 dark:bg-blue-500 dark:text-gray-200 rounded-lg cursor-pointer"
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden dark:text-gray-200"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile links */}
      {open && (
        <div className="md:hidden flex flex-col gap-3 px-4 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`${linkClass(cat)} text-left`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;



