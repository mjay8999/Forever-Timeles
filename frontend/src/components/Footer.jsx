import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-black text-white rounded-t-2xl py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 text-sm">
          {/* About */}
          <div>
            <img src={assets.logo_white} className="mb-5 w-32" alt="Forever Timeless Logo" />
            <p className="w-full md:w-2/3 text-gray-300">
              Forever Timeless curates exquisite, authentic jewelry that tells a story of elegance and enduring style. Our pieces are crafted to be treasured for generations.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-300">
              <li><a href="/" className="hover:text-gray-400">Home</a></li>
              <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
              <li><a href="/collections" className="hover:text-gray-400">Collections</a></li>
              <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-300">
              <li>+91 98765 43210</li>
              <li>info@forevertimeless.com</li>
              <li>Mumbai, India</li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-8">
          <hr className="border-gray-700" />
          <p className="py-5 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Forever Timeless. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
