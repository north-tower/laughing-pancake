import React from 'react'

function Aside() {
  return (
    <aside className="w-64 bg-gray-900 text-white">
    <div className="p-6 text-center text-2xl font-semibold">AERES</div>
    <nav className="mt-10">
      <a href="#" className="block py-2.5 px-4 text-gray-300 hover:bg-gray-700 hover:text-white">
        Home
      </a>
      <a href="#" className="block py-2.5 px-4 text-gray-300 hover:bg-gray-700 hover:text-white">
        Ads
      </a>
      <a href="#" className="block py-2.5 px-4 text-gray-300 hover:bg-gray-700 hover:text-white">
        Reports
      </a>
    </nav>
    <div className="mt-auto px-4 py-6">
      <a href="#" className="block text-gray-300 py-2.5 px-4 hover:bg-gray-700 hover:text-white">
        Settings
      </a>
      <a href="#" className="block text-gray-300 py-2.5 px-4 hover:bg-gray-700 hover:text-white">
        Account
      </a>
    </div>
  </aside>

       
  
  )
}

export default Aside