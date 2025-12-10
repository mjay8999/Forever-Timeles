import mongoose from 'mongoose'
import userModel from './models/userModel.js'
import bcrypt from 'bcrypt'
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

const seedAdminUser = async () => {
    try {
        await connectDB()
        
        const adminEmail = process.env.ADMIN_EMAIL || "jay@gmail.com"
        const adminPassword = process.env.ADMIN_PASSWORD || "jaymehta"
        
        // Check if admin already exists
        const existingAdmin = await userModel.findOne({ email: adminEmail })
        if (existingAdmin) {
            console.log("✓ Admin user already exists:", adminEmail)
            process.exit(0)
        }
        
        // Hash password
        const hashedPassword = await bcrypt.hash(adminPassword, 10)
        
        // Create admin user
        const adminUser = new userModel({
            name: "Admin",
            email: adminEmail,
            password: hashedPassword,
            cartData: {}
        })
        
        await adminUser.save()
        
        console.log("✓ Admin user created successfully!")
        console.log(`   Email: ${adminEmail}`)
        console.log(`   Password: ${adminPassword}`)
        console.log("\n⚠️  Keep these credentials safe!")
        
        process.exit(0)
    } catch (error) {
        console.log("✗ Error creating admin user:", error.message)
        process.exit(1)
    }
}

seedAdminUser()
