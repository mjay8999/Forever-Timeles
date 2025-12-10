import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

    const logout = () => {
        navigate('/login');
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
    };

    return (
        <div className='relative z-50 bg-white shadow-md py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-between font-medium'>
            {/* Logo */}
            <Link to='/'>
                <img src={assets.logo} className='w-24 sm:w-36' alt='Forever Timeless Logo' />
            </Link>

            {/* Desktop Navigation */}
            <ul className='hidden sm:flex gap-6 md:gap-8 text-xs sm:text-sm text-gray-700'>
                {['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'].map((item, index) => (
                    <NavLink key={index} to={`/${item.toLowerCase()}`} className='relative group'>
                        <p className='group-hover:text-black transition'>{item}</p>
                        <span className='absolute left-0 bottom-[-2px] w-0 h-[2px] bg-black transition-all group-hover:w-full'></span>
                    </NavLink>
                ))}
            </ul>

            {/* Right Icons */}
            <div className='flex items-center gap-3 sm:gap-6'>
                <img onClick={() => { setShowSearch(true); navigate('/collection'); }} src={assets.search_icon} className='w-4 sm:w-5 cursor-pointer' alt='Search Icon' />
                
                {/* Profile Dropdown */}
                <div className='relative group'>
                    <img onClick={() => token ? null : navigate('/login')} className='w-5 sm:w-6 cursor-pointer' src={assets.profile_icon} alt='Profile Icon' />
                    {token && (
                        <div className='absolute right-0 hidden group-hover:flex flex-col gap-2 w-40 py-3 px-5 bg-white shadow-lg text-gray-600 rounded text-sm'>
                            <p onClick={() => navigate('/Userprofile')} className='cursor-pointer hover:text-black'>My Profile</p>
                            <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                            <p onClick={logout} className='cursor-pointer hover:text-red-600'>Logout</p>
                        </div>
                    )}
                </div>

                {/* Cart Icon */}
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 sm:w-6' alt='Cart Icon' />
                    <p className='absolute -right-2 -bottom-2 w-5 h-5 flex items-center justify-center bg-black text-white text-xs rounded-full'>{getCartCount()}</p>
                </Link>
                
                {/* Mobile Menu Icon */}
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt='Menu Icon' />
            </div>

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-all duration-300 z-50 ${visible ? 'w-64' : 'w-0 overflow-hidden'}`}>
                <div className='flex flex-col text-gray-700 p-4 sm:p-6'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-3 cursor-pointer mb-4'>
                        <img className='h-5 rotate-180' src={assets.dropdown_icon} alt='Close Icon' />
                        <p className='text-sm sm:text-base'>Back</p>
                    </div>
                    {['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'].map((item, index) => (
                        <NavLink key={index} onClick={() => setVisible(false)} className='py-2 sm:py-3 border-b text-sm' to={`/${item.toLowerCase()}`}>{item}</NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;