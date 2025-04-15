import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import CartTotal from '../components/CartTotal'

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext)
  const [cartData, setCartData] = useState([])

  useEffect(() => {
    if (products.length > 0) {
      const tempData = []
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item]
            })
          }
        }
      }
      setCartData(tempData)
    }
  }, [cartItems, products])

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Title text1="YOUR" text2="CART" />
        </div>

        <div className="space-y-6">
          {cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id)
            return (
              <div key={index} className="bg-white rounded-lg shadow p-4 flex flex-col sm:flex-row items-center gap-4">
                <img className="w-24 h-24 object-cover rounded-md" src={productData.image[0]} alt={productData.name} />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800">{productData.name}</h3>
                  <div className="mt-2 flex items-center gap-4">
                    <span className="text-gray-600">{currency}{productData.price}</span>
                    <span className="px-3 py-1 border rounded-full text-sm text-gray-500">{item.size}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <input 
                    type="number" 
                    min={1} 
                    defaultValue={item.quantity} 
                    onChange={(e) => {
                      const val = e.target.value;
                      if(val !== '' && Number(val) > 0) {
                        updateQuantity(item._id, item.size, Number(val))
                      }
                    }} 
                    className="w-16 border border-gray-300 rounded px-2 py-1 focus:outline-none"
                  />
                  <button onClick={() => updateQuantity(item._id, item.size, 0)}>
                    <img className="w-5 h-5" src={assets.bin_icon} alt="Remove" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 bg-white rounded-lg shadow p-6">
          <CartTotal />
          <div className="text-right mt-4">
            <button 
              onClick={() => navigate('/place-order')} 
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
