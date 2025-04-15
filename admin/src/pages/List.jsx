import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'

const List = ({ token }) => {
  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')
      if (response.data.success) {
        setList(response.data.products.reverse())
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } })
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList()
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className="max-w-6xl mx-auto my-8 p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">All Products List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {list.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col">
            <img
              src={item.image[0]}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.category}</p>
            <p className="text-sm font-medium text-gray-600">{currency}{item.price}</p>
            <button
              onClick={() => removeProduct(item._id)}
              className="mt-auto bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded transition-colors duration-300"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List
