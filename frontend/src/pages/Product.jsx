import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products, currency ,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')
  const [size,setSize] = useState('')

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })

  }

  useEffect(() => {
    fetchProductData();
  }, [productId,products])

  return productData ? (
    <div className='border-t-2 pt-6 sm:pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*----------- Product Data-------------- */}
      <div className='flex gap-4 sm:gap-8 md:gap-12 flex-col md:flex-row'>

        {/*---------- Product Images------------- */}
        <div className='flex-1 flex flex-col-reverse gap-2 sm:gap-3 md:flex-row'>
          <div className='flex md:flex-col overflow-x-auto md:overflow-y-auto justify-between md:justify-normal md:w-[18.7%] w-full gap-2'>
              {
                productData.image.map((item,index)=>(
                  <img onClick={()=>setImage(item)} src={item} key={index} className='w-[22%] md:w-full md:mb-3 flex-shrink-0 cursor-pointer border-2 border-transparent hover:border-gray-400 rounded' alt="" />
                ))
              }
          </div>
          <div className='w-full md:w-[80%]'>
              <img className='w-full h-auto rounded-lg' src={image} alt="" />
          </div>
        </div>

        {/* -------- Product Info ---------- */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl sm:text-3xl mt-2'>{productData.name}</h1>
          <div className=' flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className='pl-2'>(122)</p>
          </div>
          <div className='flex flex-col gap-4 my-6 sm:my-8'>
              <p className='text-sm sm:text-base font-medium'>Select Size</p>
              <div className='flex gap-2 flex-wrap'>
                {productData.sizes.map((item,index)=>(
                  <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 text-sm sm:text-base transition-all ${item === size ? 'border-orange-500 bg-orange-50' : 'hover:bg-gray-200'}`} key={index}>{item}</button>
                ))}
              </div>
          </div>

          <p className='mt-4 sm:mt-5 text-2xl sm:text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-4 sm:mt-5 text-sm sm:text-base text-gray-500 md:w-4/5 leading-relaxed'>{productData.description}</p>
          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm sm:text-base active:bg-gray-700 hover:bg-gray-800 transition-colors mt-4 sm:mt-6 w-full sm:w-auto'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* ---------- Description & Review Section ------------- */}
      <div className='mt-20'>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
        </div>
      </div>

      {/* --------- display related products ---------- */}

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div>
  ) : <div className=' opacity-0'></div>
}

export default Product
