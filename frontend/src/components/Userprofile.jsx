import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const Userprofile = () => {
  const { user, orders, logout } = useContext(ShopContext);

  return (
    <div className='max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg'>
      <h2 className='text-2xl font-semibold mb-4'>My Profile</h2>
      
      <div className='flex items-center gap-6 border-b pb-4'>
        <img src={user?.profilePic || 'https://via.placeholder.com/100'} className='w-20 h-20 rounded-full' alt='Profile' />
        <div>
          <p className='text-xl font-semibold'>{user?.name || 'Guest User'}</p>
          <p className='text-gray-500'>{user?.email || 'Not Available'}</p>
        </div>
      </div>

      <div className='my-6'>
        <h3 className='text-lg font-semibold mb-2'>Order History</h3>
        {orders && orders.length > 0 ? (
          <ul className='divide-y'>
            {orders.map(order => (
              <li key={order.id} className='py-2'>
                <Link to={`/order/${order.id}`} className='text-blue-600 hover:underline'>
                  Order #{order.id} - {order.status}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-gray-500'>No orders placed yet.</p>
        )}
      </div>

      <div className='flex justify-between mt-6'>
        <button className='bg-gray-200 px-4 py-2 rounded hover:bg-gray-300'>Edit Profile</button>
        <button className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600' onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Userprofile;
   