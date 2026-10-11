import { Menu, Moon, Search } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  const links = [
    "Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"
  ]
  return (
    <div className='fixed w-full z-10 shadow-md'>
      <div className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>
        {/* logo */}
        <div className='md:text-2xl text-lg font-bold text-blue-600 cursor-pointer'>
          NewsApp
        </div>

        {/* Desktop links */}
        <div className='hidden md:flex space-x-6'>
          {
            links.map((link) => (
              <p key={link} className='text-gray-700 hover:text-blue-600 transition'>
                {link}
              </p>
            ))
          }
        </div>


        <div className='flex items-center justify-center gap-4'>
          <div className='relative bg-gray-200 p-2 rounded-lg'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4' />
            <input type="text" placeholder='Search news...' className='md:pl-10 pl-7 w-30 md:w-64 outline-none ' />
          </div>
          <button className='bg-gray-200 px-3 py-2 rounded-lg cursor-pointer'>
            <Moon />
          </button>

          {/* Mobile menu button */}
          <button className='md:hidden'>
            <Menu size={25}/>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Navbar