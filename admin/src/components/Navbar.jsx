import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = ({ setToken }) => {
  return (
    <div className="max-w-screen-lg mx-auto flex items-center justify-between py-2 px-4">
      {/* Left side: Logo and Navigation Links */}
      <div className="flex items-center gap-6">
        <img className="w-[max(10%,80px)]" src={assets.logo} alt="Forever Timeless Logo" />
        {/* Navigation Links integrated from Sidebar */}
        <div className="hidden sm:flex items-center gap-4">
          <NavLink 
            to="/add" 
            className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900"
          >
            <img className="w-5 h-5" src={assets.add_icon} alt="Add Items" />
            <span>Add Items</span>
          </NavLink>
          <NavLink 
            to="/list" 
            className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900"
          >
            <img className="w-5 h-5" src={assets.order_icon} alt="List Items" />
            <span>List Items</span>
          </NavLink>
          <NavLink 
            to="/orders" 
            className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900"
          >
            <img className="w-5 h-5" src={assets.order_icon} alt="Orders" />
            <span>Orders</span>
          </NavLink>
        </div>
      </div>
      {/* Right side: Logout Button */}
      <div>
        <button 
          onClick={() => setToken('')} 
          className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar
