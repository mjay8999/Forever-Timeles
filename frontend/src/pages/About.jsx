import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="bg-gray-50 font-sans">
      {/* About Us Title */}
      <div className="text-center pt-10 border-t border-gray-300">
        <Title text1="ABOUT" text2="US" />
      </div>

      {/* Main About Content: Text on Left, Image on Right */}
      <div className="my-10 flex flex-col md:flex-row gap-16 items-center px-4">
        {/* Text Block */}
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-700 order-1">
          <p className="leading-relaxed">
            Forever Timeless was born from a passion for innovation and a vision to redefine luxury online. We set out to create a platform where discerning clients can discover exquisite jewelry that embodies timeless elegance.
          </p>
          <p className="leading-relaxed">
            Over the years, we have carefully curated a collection that reflects our commitment to quality and sophistication. Each piece is hand-selected, ensuring that our offerings meet the highest standards.
          </p>
          <h3 className="font-semibold text-xl text-gray-800">Our Mission</h3>
          <p className="leading-relaxed">
            Our mission is to empower you with confidence and convenience, providing a seamless experience from discovery to delivery. At Forever Timeless, we believe in offering not just jewelry, but a legacy of elegance.
          </p>
        </div>
        {/* Image Block */}
        <div className="order-2">
          <img
            className="w-full md:max-w-[450px] max-h-[500px] object-cover rounded-2xl shadow-lg"
            src={assets.PI2}
            alt="About Us"
          />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center py-4">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>

      <div className="flex flex-col md:flex-row gap-8 text-sm mb-20 px-4">
        <div className="border border-gray-200 bg-white rounded-2xl shadow-md px-10 md:px-16 py-6 sm:py-20 flex flex-col gap-5">
          <h4 className="font-semibold text-lg text-gray-800">Quality Assurance</h4>
          <p className="text-gray-600">
            We meticulously select each piece, ensuring that our collection reflects the pinnacle of craftsmanship and style.
          </p>
        </div>
        <div className="border border-gray-200 bg-white rounded-2xl shadow-md px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <h4 className="font-semibold text-lg text-gray-800">Convenience</h4>
          <p className="text-gray-600">
            Enjoy a seamless, hassle-free shopping experience that brings the world of exquisite jewelry right to your fingertips.
          </p>
        </div>
        <div className="border border-gray-200 bg-white rounded-2xl shadow-md px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <h4 className="font-semibold text-lg text-gray-800">Exceptional Service</h4>
          <p className="text-gray-600">
            Our dedicated team is committed to providing personalized support and care, ensuring your experience with us is nothing short of exceptional.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
