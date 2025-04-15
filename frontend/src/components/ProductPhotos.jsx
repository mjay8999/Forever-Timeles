import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const ProductPhotos = () => {
  return (
    <div className="mt-8 border-t-2 border-gray-300 pt-8">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Left Side: One Large Image with overlay */}
        <div className="sm:w-1/2">
          <Link to="/collection">
            <div className="relative group">
              <img
                src={assets.PI2}
                alt="Featured Product"
                className="w-full h-[695px] object-cover rounded-2xl border-2 border-gray-300"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl">
                <span className="text-white text-xl font-semibold">View Collection</span>
              </div>
            </div>
          </Link>
        </div>
        
        {/* Right Side: Two Stacked Images with overlay on each */}
        <div className="sm:w-1/2 flex flex-col gap-4">
          <Link to="/collection">
            <div className="relative group">
              <img
                src={assets.PI1}
                alt="Product Detail Top"
                className="w-full h-[340px] object-cover rounded-2xl border-2 border-gray-300"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl">
                <span className="text-white text-xl font-semibold">View Collection</span>
              </div>
            </div>
          </Link>
          <Link to="/collection">
            <div className="relative group">
              <img
                src={assets.PI3}
                alt="Product Detail Bottom"
                className="w-full h-[340px] object-cover rounded-2xl border-2 border-gray-300"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl">
                <span className="text-white text-xl font-semibold">View Collection</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductPhotos
