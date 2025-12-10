import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const ShopContext = createContext();

// Fallback products used when the API is unreachable
const fallbackProducts = [
    {
        _id: 'static-ring-aurora',
        name: 'Aurora Halo Ring',
        description: 'Oval-cut centerpiece with a halo of pavé stones on a slim gold band.',
        price: 18999,
        image: ['https://i.pinimg.com/736x/4b/f0/0d/4bf00d0a9b7bca1af9db14c52ab5ad01.jpg'],
        category: 'Women',
        subCategory: 'Rings',
        sizes: ['5', '6', '7', '8'],
        bestseller: true,
        date: 1733798400000
    },
    {
        _id: 'static-necklace-luna',
        name: 'Luna Pearl Necklace',
        description: 'Graduated freshwater pearls on a hand-knotted silk strand.',
        price: 12999,
        image: ['https://i.pinimg.com/736x/2f/21/4b/2f214b3c309736613d98125f7c23710b.jpg'],
        category: 'Women',
        subCategory: 'Necklaces',
        sizes: ['16 in', '18 in'],
        bestseller: false,
        date: 1733798400000
    },
    {
        _id: 'static-bracelet-atlas',
        name: 'Atlas Cuff Bracelet',
        description: 'Sculpted cuff with clean lines and mirror polish finish.',
        price: 14999,
        image: ['https://i.pinimg.com/736x/cd/05/6f/cd056f9371f1fc8e2ea985dcb9cabb17.jpg'],
        category: 'Unisex',
        subCategory: 'Bracelets',
        sizes: ['S', 'M', 'L'],
        bestseller: true,
        date: 1733798400000
    },
    {
        _id: 'static-earring-nova',
        name: 'Nova Drop Earrings',
        description: 'Sleek droplet silhouette with handset zirconia for everyday shine.',
        price: 8999,
        image: ['https://i.pinimg.com/736x/da/9e/45/da9e459496273b26b83ee9a43eeeca91.jpg'],
        category: 'Women',
        subCategory: 'Earrings',
        sizes: ['One Size'],
        bestseller: false,
        date: 1733798400000
    }
];

const ShopContextProvider = (props) => {

    const currency = '₹';
    const delivery_fee = 80;
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('')
    const navigate = useNavigate();


    const addToCart = async (itemId, size) => {

        if (!size) {
            toast.error('Select Product Size');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);

        if (token) {
            try {

                await axios.post(backendUrl + '/api/cart/add', { itemId, size }, { headers: { token } })

            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }

    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {

                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity) => {

        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;

        setCartItems(cartData)

        if (token) {
            try {

                await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token } })

            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }

    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {

                }
            }
        }
        return totalAmount;
    }

    const getProductsData = async () => {
        try {
            console.log('Fetching products from:', backendUrl + '/api/product/list')
            const response = await axios.get(backendUrl + '/api/product/list')
            console.log('Response:', response.data)
            if (response.data.success) {
                setProducts(response.data.products.reverse())
                console.log('Products loaded:', response.data.products.length)
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log('Error fetching products:', error)
            setProducts(fallbackProducts)
            toast.error('Failed to load products: showing featured picks instead')
        }
    }

    const getUserCart = async ( token ) => {
        try {
            
            const response = await axios.post(backendUrl + '/api/cart/get',{},{headers:{token}})
            if (response.data.success) {
                setCartItems(response.data.cartData)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getProductsData()
    }, [])

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
            getUserCart(localStorage.getItem('token'))
        }
        if (token) {
            getUserCart(token)
        }
    }, [token])

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart,setCartItems,
        getCartCount, updateQuantity,
        getCartAmount, navigate, backendUrl,
        setToken, token
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;