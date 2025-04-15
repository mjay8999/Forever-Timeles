import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header Section */}
      <div className="text-center pt-10 border-t border-gray-300">
        <Title text1="CONTACT" text2="US" />
      </div>

      {/* Main Content: Text on Left, Image on Right */}
      <div className="my-10 flex flex-col md:flex-row items-center md:justify-center gap-10 px-4">
        {/* Text Block */}
        <div className="flex flex-col justify-center items-start gap-6 max-w-lg md:order-1">
          <h3 className="font-semibold text-2xl text-gray-700">Our Store</h3>
          <p className="text-gray-500 leading-relaxed">
            Sion United Jain Students Home <br />
            Mumbai, India
          </p>
          <p className="text-gray-500 leading-relaxed">
            Tel: +91 98765 43210 <br />
            Email: contact@forevertimeless.com
          </p>
          <h3 className="font-semibold text-2xl text-gray-700">Careers at Forever Timeless</h3>
          <p className="text-gray-500 leading-relaxed">
            Learn more about our teams and job openings. Join us on our journey of crafting timeless elegance.
          </p>
          <button className="mt-4 border border-gray-700 px-8 py-4 text-sm font-medium rounded hover:bg-gray-700 hover:text-white transition-all duration-300">
            Contact Us
          </button>
        </div>
        {/* Image Block */}
        <div className="md:order-2">
          <img
            className="w-full md:max-w-[480px] rounded-2xl shadow-lg"
            src={assets.PI3}
            alt="Contact Us"
          />
        </div>
      </div>
    </div>
  )
}

export default Contact
