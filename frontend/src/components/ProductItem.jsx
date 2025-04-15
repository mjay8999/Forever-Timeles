import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link onClick={() => scrollTo(0, 0)} className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      {/* Fixed Aspect Ratio Container with Rounded Corners */}
      <div className="overflow-hidden rounded-2xl aspect-square">
        <img 
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" 
          src={image[0]} 
          alt={name} 
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
