import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    if (!token) return;
    try {
      const response = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } })
      if (response.data.success) {
        setOrders(response.data.orders.reverse())
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/order/status',
        { orderId, status: event.target.value },
        { headers: { token } }
      )
      if (response.data.success) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [token])

  return (
    <div className="max-w-6xl mx-auto my-8 px-4">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Orders</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {orders.map((order, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
            {/* Header: Customer Name & Order Date */}
            <div className="flex items-center gap-4">
              <img className="w-12 h-12" src={assets.parcel_icon} alt="Parcel Icon" />
              <div>
                <p className="font-semibold text-gray-800">
                  {order.address.firstName} {order.address.lastName}
                </p>
                <p className="text-gray-500 text-sm">
                  {new Date(order.date).toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* Order Items */}
            <div className="border-t pt-4">
              <p className="text-gray-700 text-sm mb-2">Items:</p>
              <ul className="list-disc list-inside text-gray-600 text-xs">
                {order.items.map((item, idx) => (
                  <li key={idx}>
                    {item.name} x {item.quantity} ({item.size})
                  </li>
                ))}
              </ul>
            </div>

            {/* Payment & Order Details */}
            <div className="border-t pt-4">
              <p className="text-gray-700 text-sm">
                Payment: {order.payment ? 'Done' : 'Pending'}
              </p>
              <p className="text-gray-700 text-sm">
                Method: {order.paymentMethod}
              </p>
              <p className="text-gray-700 text-sm">
                Total: {currency}{order.amount}
              </p>
            </div>

            {/* Order Status */}
            <div className="border-t pt-4">
              <label htmlFor={`status-${order._id}`} className="text-gray-700 text-sm block mb-1">
                Status:
              </label>
              <select
                id={`status-${order._id}`}
                value={order.status}
                onChange={(e) => statusHandler(e, order._id)}
                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
