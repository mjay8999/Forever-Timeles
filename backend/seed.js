import mongoose from 'mongoose'
import productModel from './models/productModel.js'
import 'dotenv/config'

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log("✓ DB Connected")
    } catch (error) {
        console.log("✗ DB Connection Failed:", error.message)
        process.exit(1)
    }
}

const jeweleryProducts = [
    // Rings
    {
        name: "Diamond Solitaire Ring",
        description: "Elegant 18K gold ring with 0.5ct certified diamond",
        price: 24999,
        category: "Rings",
        subCategory: "Diamond",
        sizes: ["5", "6", "7", "8", "9", "10"],
        bestseller: true,
        image: ["https://i.pinimg.com/736x/8e/a8/3f/8ea83f65f0d35a4e5c5c5e5c5e5c5e5c.jpg", "https://i.pinimg.com/736x/f3/49/bc/f349bc5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg"],
        date: Date.now()
    },
    {
        name: "Ruby & Gold Ring",
        description: "Classic ruby gemstone ring with intricate gold design",
        price: 18999,
        category: "Rings",
        subCategory: "Gemstone",
        sizes: ["5", "6", "7", "8", "9", "10"],
        bestseller: true,
        image: ["https://i.pinimg.com/736x/7d/1c/ba/7d1cbaf5c5e5c5e5c5e5c5e5c5e5c5e.jpg", "https://i.pinimg.com/736x/6e/ac/42/6eac42f5c5e5c5e5c5e5c5e5c5e5c5e.jpg"],
        date: Date.now()
    },
    {
        name: "Emerald Wedding Ring",
        description: "Premium emerald with diamond accents, 18K gold",
        price: 22999,
        category: "Rings",
        subCategory: "Gemstone",
        sizes: ["5", "6", "7", "8", "9", "10"],
        bestseller: false,
        image: ["https://i.pinimg.com/736x/5f/3c/8d/5f3c8d5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg", "https://i.pinimg.com/736x/4e/2d/7c/4e2d7c5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg"],
        date: Date.now()
    },
    {
        name: "Sapphire Engagement Ring",
        description: "Blue sapphire with white diamond halo",
        price: 28999,
        category: "Rings",
        subCategory: "Gemstone",
        sizes: ["5", "6", "7", "8", "9", "10"],
        bestseller: true,
        image: ["https://i.pinimg.com/736x/3f/1a/9b/3f1a9b5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg", "https://i.pinimg.com/736x/2e/0b/8a/2e0b8a5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg"],
        date: Date.now()
    },
    // Necklaces
    {
        name: "Gold Chain Necklace",
        description: "22K gold traditional chain necklace, 18 inches",
        price: 15999,
        category: "Necklaces",
        subCategory: "Gold",
        sizes: ["16", "18", "20", "22"],
        bestseller: true,
        image: ["https://i.pinimg.com/736x/1d/9c/7e/1d9c7e5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg", "https://i.pinimg.com/736x/0c/8d/6f/0c8d6f5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg"],
        date: Date.now()
    },
    {
        name: "Pearl Drop Necklace",
        description: "South Sea pearl with 18K gold setting",
        price: 19999,
        category: "Necklaces",
        subCategory: "Pearl",
        sizes: ["16", "18", "20"],
        bestseller: true,
        image: ["https://i.pinimg.com/736x/9f/7a/5d/9f7a5d5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg", "https://i.pinimg.com/736x/8e/6b/4c/8e6b4c5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg"],
        date: Date.now()
    },
    {
        name: "Diamond Pendant Necklace",
        description: "Solitaire diamond pendant with gold chain",
        price: 29999,
        category: "Necklaces",
        subCategory: "Diamond",
        sizes: ["16", "18", "20"],
        bestseller: false,
        image: ["https://i.pinimg.com/736x/7e/5c/3b/7e5c3b5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg", "https://i.pinimg.com/736x/6d/4d/2a/6d4d2a5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg"],
        date: Date.now()
    },
    {
        name: "Kundan Necklace",
        description: "Traditional kundan with ruby and emerald stones",
        price: 12999,
        category: "Necklaces",
        subCategory: "Traditional",
        sizes: ["18", "20", "22"],
        bestseller: true,
        image: ["https://i.pinimg.com/736x/5c/3e/1a/5c3e1a5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg", "https://i.pinimg.com/736x/4b/2f/0f/4b2f0f5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg"],
        date: Date.now()
    },
    // Earrings
    {
        name: "Diamond Stud Earrings",
        description: "0.3ct each certified diamond studs in white gold",
        price: 16999,
        category: "Earrings",
        subCategory: "Diamond",
        sizes: ["One Size"],
        bestseller: true,
        image: ["https://i.pinimg.com/736x/3a/9d/8c/3a9d8c5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg", "https://i.pinimg.com/736x/2f/8e/7d/2f8e7d5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg"],
        date: Date.now()
    },
    {
        name: "Pearl Drop Earrings",
        description: "Freshwater pearl with gold hooks",
        price: 8999,
        category: "Earrings",
        subCategory: "Pearl",
        sizes: ["One Size"],
        bestseller: true,
        image: ["https://i.pinimg.com/736x/1e/7f/6c/1e7f6c5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg", "https://i.pinimg.com/736x/0d/6e/5b/0d6e5b5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg"],
        date: Date.now()
    },
    {
        name: "Ruby & Gold Earrings",
        description: "Natural ruby with gold filigree work",
        price: 12999,
        category: "Earrings",
        subCategory: "Gemstone",
        sizes: ["One Size"],
        bestseller: false,
        image: ["https://i.pinimg.com/736x/9c/4a/3f/9c4a3f5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg", "https://i.pinimg.com/736x/8b/3b/2e/8b3b2e5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg"],
        date: Date.now()
    },
    {
        name: "Jhumka Earrings",
        description: "Traditional jhumka with intricate temple work",
        price: 6999,
        category: "Earrings",
        subCategory: "Traditional",
        sizes: ["One Size"],
        bestseller: true,
        image: ["https://i.pinimg.com/736x/7a/1d/4f/7a1d4f5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg", "https://i.pinimg.com/736x/6f/0c/3e/6f0c3e5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg"],
        date: Date.now()
    },
    // Bracelets
    {
        name: "Gold Bangle Set",
        description: "22K gold traditional bangles set of 4",
        price: 18999,
        category: "Bracelets",
        subCategory: "Gold",
        sizes: ["2.2", "2.4", "2.6", "2.8"],
        bestseller: true,
        image: ["https://i.pinimg.com/736x/5e/2c/1d/5e2c1d5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg", "https://i.pinimg.com/736x/4d/1b/0c/4d1b0c5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg"],
        date: Date.now()
    },
    {
        name: "Diamond Tennis Bracelet",
        description: "18K gold with 2.5ct diamonds",
        price: 34999,
        category: "Bracelets",
        subCategory: "Diamond",
        sizes: ["7", "7.5", "8", "8.5"],
        bestseller: false,
        image: ["https://i.pinimg.com/736x/3c/0a/9d/3c0a9d5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg", "https://i.pinimg.com/736x/2b/9f/8c/2b9f8c5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg"],
        date: Date.now()
    },
    {
        name: "Gemstone Bracelet",
        description: "Ruby, emerald and sapphire bracelet",
        price: 21999,
        category: "Bracelets",
        subCategory: "Gemstone",
        sizes: ["7", "7.5", "8", "8.5"],
        bestseller: true,
        image: ["https://i.pinimg.com/736x/1a/8e/7b/1a8e7b5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg", "https://i.pinimg.com/736x/0f/7d/6a/0f7d6a5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg"],
        date: Date.now()
    },
    {
        name: "Pearl Bracelet",
        description: "South Sea pearls with gold clasp",
        price: 14999,
        category: "Bracelets",
        subCategory: "Pearl",
        sizes: ["7", "7.5", "8"],
        bestseller: true,
        image: ["https://i.pinimg.com/736x/9e/6c/5b/9e6c5b5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg", "https://i.pinimg.com/736x/8d/5b/4a/8d5b4a5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg"],
        date: Date.now()
    },
    // Anklets
    {
        name: "Gold Anklet",
        description: "22K gold traditional anklet",
        price: 7999,
        category: "Anklets",
        subCategory: "Gold",
        sizes: ["One Size"],
        bestseller: true,
        image: ["https://i.pinimg.com/736x/7d/4a/3c/7d4a3c5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg", "https://i.pinimg.com/736x/6c/3f/2b/6c3f2b5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg"],
        date: Date.now()
    },
    {
        name: "Diamond Anklet",
        description: "White gold with diamond accents",
        price: 15999,
        category: "Anklets",
        subCategory: "Diamond",
        sizes: ["One Size"],
        bestseller: false,
        image: ["https://i.pinimg.com/736x/5b/2e/1a/5b2e1a5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg", "https://i.pinimg.com/736x/4a/1d/0f/4a1d0f5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg"],
        date: Date.now()
    },
    {
        name: "Payal with Bells",
        description: "Traditional paired payals with jingly bells",
        price: 4999,
        category: "Anklets",
        subCategory: "Traditional",
        sizes: ["One Size"],
        bestseller: true,
        image: ["https://i.pinimg.com/736x/3f/0c/9e/3f0c9e5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg", "https://i.pinimg.com/736x/2e/9b/8d/2e9b8d5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg"],
        date: Date.now()
    },
    // Brooches
    {
        name: "Diamond Brooch",
        description: "18K gold brooch with diamond design",
        price: 11999,
        category: "Brooches",
        subCategory: "Diamond",
        sizes: ["One Size"],
        bestseller: false,
        image: ["https://i.pinimg.com/736x/1c/7a/5f/1c7a5f5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg", "https://i.pinimg.com/736x/0b/6f/4e/0b6f4e5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg"],
        date: Date.now()
    },
    {
        name: "Ruby & Pearl Brooch",
        description: "Vintage style brooch with ruby and pearls",
        price: 9999,
        category: "Brooches",
        subCategory: "Gemstone",
        sizes: ["One Size"],
        bestseller: true,
        image: ["https://i.pinimg.com/736x/9a/5d/3c/9a5d3c5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg", "https://i.pinimg.com/736x/8f/4c/2b/8f4c2b5e5c5e5c5e5c5e5c5e5c5e5c5e.jpg"],
        date: Date.now()
    }
]

const seedDatabase = async () => {
    try {
        await connectDB()
        
        // Clear existing products
        await productModel.deleteMany({})
        console.log("✓ Cleared existing products")
        
        // Insert jewelry products
        const result = await productModel.insertMany(jeweleryProducts)
        console.log(`✓ Successfully added ${result.length} jewelry products to database`)
        
        console.log("\n💎 Jewelry Products Added:")
        result.forEach((product, index) => {
            console.log(`${index + 1}. ${product.name} - ₹${product.price}`)
        })
        
        process.exit(0)
    } catch (error) {
        console.log("✗ Error seeding database:", error.message)
        process.exit(1)
    }
}

seedDatabase()
