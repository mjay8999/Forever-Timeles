# 🚀 Deployment Instructions

## Step 1: Deploy Backend to Vercel

1. **Login to Vercel** (in terminal):
   ```bash
   cd d:\TYPROJ\Forever-Timeless\backend
   vercel login
   ```

2. **Deploy Backend**:
   ```bash
   vercel --prod
   ```
   
3. **Follow the prompts**:
   - Set up and deploy? `Y`
   - Which scope? Choose your account
   - Link to existing project? `N`
   - Project name? `forever-timeless-backend` (or your choice)
   - Directory? `.` (current directory)
   - Override settings? `N`

4. **Copy the deployment URL** (e.g., `https://forever-timeless-backend.vercel.app`)

5. **Add Environment Variables in Vercel Dashboard**:
   - Go to: https://vercel.com/dashboard
   - Select your project → Settings → Environment Variables
   - Add these variables:
     ```
     MONGODB_URI = mongodb+srv://jewelleryadmin:Jewelry%402025@cluster0.evq1gsx.mongodb.net/?appName=Cluster0
     JWT_SECRET = hahahyoucant
     ADMIN_EMAIL = jay@gmail.com
     ADMIN_PASSWORD = jaymehta
     CLOUDINARY_API_KEY = 346665496112563
     CLOUDINARY_SECRET_KEY = Q-hQlM6o1k5qkY5pYBe8L72KvqY
     CLOUDINARY_NAME = dzplynomu
     RAZORPAY_KEY_SECRET = UUBRHyJwdLX2Oh7azwDn69mX
     RAZORPAY_KEY_ID = rzp_test_2mTlAvau8YeZyi
     ```
   - Redeploy: `vercel --prod` (in backend folder)

## Step 2: Update Frontend

1. **Edit** `frontend/.env.production`:
   ```
   VITE_BACKEND_URL = "https://your-actual-backend-url.vercel.app"
   ```
   Replace with your actual Vercel backend URL

2. **Rebuild and Deploy Frontend**:
   ```bash
   cd d:\TYPROJ\Forever-Timeless\frontend
   npm run build
   ```

3. **Commit and Push**:
   ```bash
   cd d:\TYPROJ\Forever-Timeless
   git add .
   git commit -m "Configure production backend URL"
   git push origin main
   ```

## Step 3: Enable GitHub Pages

1. Go to: https://github.com/mjay8999/Forever-Timeles/settings/pages
2. Source: **Deploy from a branch**
3. Branch: **gh-pages** / **/ (root)**
4. Click **Save**

## 🎉 Your Site Will Be Live!

- **Frontend**: https://mjay8999.github.io/Forever-Timeles/
- **Backend**: https://your-backend-url.vercel.app

---

## Quick Commands Summary:

```bash
# Deploy Backend
cd d:\TYPROJ\Forever-Timeless\backend
vercel login
vercel --prod

# Update Frontend with backend URL
cd d:\TYPROJ\Forever-Timeless
# Edit frontend/.env.production with your Vercel URL
cd frontend
npm run build

# Push to GitHub
cd ..
git add .
git commit -m "Deploy to production"
git push origin main
```
