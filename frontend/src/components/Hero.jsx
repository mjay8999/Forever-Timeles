import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <Link to="/collections">
      <div className="relative group h-[680px] w-full border border-gray-500 rounded-2xl overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={assets.hero2}
          alt="Hero"
        />

        {/* Transparent Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Centered Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center transition-all duration-500">
          {/* Main Title and Subline Container */}
          <div className="transition-all duration-500 group-hover:-translate-y-12 group-hover:scale-90 group-hover:opacity-0">
            <h2 className="prata-regular text-4xl sm:text-5xl lg:text-6xl text-[#D4AF37] mt-10">
              Forever Timeless
            </h2>
            <p className="mt-2 text-sm text-gray-300">
              the things which are meant forever
            </p>
          </div>
          {/* Additional Content: Hidden by default, fades in on hover */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-4 mx-auto">
            <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl text-white">
              Our Latest Collection
            </h1>
            <p className="mt-2 text-sm sm:text-base text-white max-w-xl mx-auto">
              Discover exquisite jewelry pieces that blend timeless elegance with modern sophistication. Experience luxury redefined.
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Hero
