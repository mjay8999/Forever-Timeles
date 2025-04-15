import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({ token }) => {
  const [image1, setImage1] = useState(null)
  const [image2, setImage2] = useState(null)
  const [image3, setImage3] = useState(null)
  const [image4, setImage4] = useState(null)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("Men")
  const [subCategory, setSubCategory] = useState("Topwear")
  const [bestseller, setBestseller] = useState(false)
  const [sizes, setSizes] = useState([])

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestseller", bestseller)
      formData.append("sizes", JSON.stringify(sizes))

      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await axios.post(backendUrl + "/api/product/add", formData, { headers: { token } })

      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(null)
        setImage2(null)
        setImage3(null)
        setImage4(null)
        setPrice('')
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="bg-gray-50 p-8 max-w-3xl mx-auto mt-8 rounded-3xl shadow-lg space-y-6">
      {/* Image Upload Section */}
      <div>
        <p className="text-xl font-semibold mb-3">Upload Images</p>
        <div className="flex gap-4">
          {[image1, image2, image3, image4].map((img, index) => (
            <label key={index} htmlFor={`image${index+1}`} className="cursor-pointer">
              <div className="w-24 h-24 border-2 border-dashed border-gray-300 flex items-center justify-center rounded-xl">
                {!img ? (
                  <img src={assets.upload_area} alt="upload" className="w-10 opacity-50" />
                ) : (
                  <img src={URL.createObjectURL(img)} alt={`upload ${index+1}`} className="w-full h-full object-cover rounded-xl" />
                )}
              </div>
              <input onChange={(e) => {
                const file = e.target.files[0]
                if (index === 0) setImage1(file)
                else if (index === 1) setImage2(file)
                else if (index === 2) setImage3(file)
                else if (index === 3) setImage4(file)
              }} type="file" id={`image${index+1}`} className="hidden" />
            </label>
          ))}
        </div>
      </div>

      {/* Product Name */}
      <div>
        <p className="text-xl font-semibold mb-2">Product Name</p>
        <input 
          onChange={(e) => setName(e.target.value)} 
          value={name} 
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200" 
          type="text" 
          placeholder="Enter product name" 
          required
        />
      </div>

      {/* Product Description */}
      <div>
        <p className="text-xl font-semibold mb-2">Product Description</p>
        <textarea 
          onChange={(e) => setDescription(e.target.value)} 
          value={description} 
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200" 
          rows="4" 
          placeholder="Enter product description" 
          required
        ></textarea>
      </div>

      {/* Product Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <p className="text-xl font-semibold mb-2">Gender</p>
          <select 
            onChange={(e) => setCategory(e.target.value)} 
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Unisex">Unisex</option>
          </select>
        </div>

        <div>
          <p className="text-xl font-semibold mb-2">Category</p>
          <select 
            onChange={(e) => setSubCategory(e.target.value)} 
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          >
              <option value="Necklace">Necklace</option>
              <option value="Chains">Chains</option>
              <option value="Earrings">Earrings</option>
              <option value="Rings">Rings</option>
              <option value="Anklets">Anklets</option>
              <option value="Bridal Jewelry">Bridal Jewelry</option>
          </select>
        </div>

        <div>
          <p className="text-xl font-semibold mb-2">Material</p>
          <select 
            onChange={(e) => setSubCategory(e.target.value)} 
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          >
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
              <option value="Platinum">Platinum</option>
          </select>
        </div>

        <div>
          <p className="text-xl font-semibold mb-2">Karat</p>
          <select 
            onChange={(e) => setSubCategory(e.target.value)} 
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          >
              <option value="24">24</option>
              <option value="22">22</option>
              <option value="20">20</option>
              <option value="18">18</option>
          </select>
        </div>

        <div>
          <p className="text-xl font-semibold mb-2">Product Price</p>
          <input 
            onChange={(e) => setPrice(e.target.value)} 
            value={price} 
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200" 
            type="number" 
            placeholder="Enter price" 
          />
        </div>
      </div>

      {/* Product Sizes */}
      <div>
        <p className="text-xl font-semibold mb-2">Product Sizes</p>
        <div className="flex gap-3">
          {["6", "7", "8", "9",  "10", "11", "12", "13", "U"].map((size) => (
            <div key={size} onClick={() => setSizes(prev => prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size])} className="cursor-pointer">
              <p className={`${sizes.includes(size) ? "bg-indigo-200" : "bg-gray-200"} px-4 py-2 rounded-lg text-center`}>
                {size}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bestseller Checkbox */}
      <div className="flex items-center gap-3">
        <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id="bestseller" />
        <label className="cursor-pointer text-xl" htmlFor="bestseller">Add to Bestseller</label>
      </div>

      <button type="submit" className="w-32 py-3 bg-black text-white rounded-lg mt-6">
        ADD
      </button>
    </form>
  )
}

export default Add
