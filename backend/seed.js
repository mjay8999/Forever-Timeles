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
        image: ["https://via.placeholder.com/300?text=DiamondRing"],
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
        image: ["https://via.placeholder.com/300?text=RubyRing"],
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
        image: ["https://via.placeholder.com/300?text=EmeraldRing"],
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
        image: ["https://via.placeholder.com/300?text=SapphireRing"],
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
        image: ["https://via.placeholder.com/300?text=GoldChain"],
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
        image: ["https://via.placeholder.com/300?text=PearlNecklace"],
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
        image: ["https://via.placeholder.com/300?text=DiamondPendant"],
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
        image: ["https://via.placeholder.com/300?text=KundanNecklace"],
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
        image: ["https://via.placeholder.com/300?text=DiamondStuds"],
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
        image: ["https://via.placeholder.com/300?text=PearlDrops"],
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
        image: ["https://via.placeholder.com/300?text=RubyEarrings"],
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
        image: ["https://via.placeholder.com/300?text=JhumkaEarrings"],
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
        image: ["https://via.placeholder.com/300?text=GoldBangles"],
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
        image: ["https://via.placeholder.com/300?text=TennisBracelet"],
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
        image: ["https://via.placeholder.com/300?text=GemstoneBracelet"],
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
        image: ["https://via.placeholder.com/300?text=PearlBracelet"],
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
        image: ["https://via.placeholder.com/300?text=GoldAnklet"],
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
        image: ["https://via.placeholder.com/300?text=DiamondAnklet"],
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
        image: ["https://via.placeholder.com/300?text=PayalBells"],
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
        image: ["https://via.placeholder.com/300?text=DiamondBrooch"],
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
        image: ["https://via.placeholder.com/300?text=RubyBrooch"],
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
