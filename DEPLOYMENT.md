# 🚀 Deployment Guide

This guide will help you deploy your full-stack application to production platforms.

## 📋 Prerequisites

- GitHub account
- Vercel account (free)
- Render account (free)
- Supabase account (free)

## 🎯 Deployment Strategy

- **Frontend**: Vercel (Next.js optimized)
- **Backend**: Render (Node.js hosting)
- **Database**: Supabase (PostgreSQL)

---

## 🖥️ Frontend Deployment (Vercel)

### Step 1: Prepare Frontend

1. **Create production environment file**
   ```bash
   cd frontend
   cp env.local.example .env.local
   ```

2. **Update API URL for production**
   ```env
   NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com
   ```

### Step 2: Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Set root directory to `frontend`
   - Add environment variable:
     - `NEXT_PUBLIC_API_URL`: `https://your-backend-url.onrender.com`

3. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your app will be live at `https://your-app.vercel.app`

---

## ⚙️ Backend Deployment (Render)

### Step 1: Prepare Backend

1. **Create production environment file**
   ```bash
   cd backend
   cp env.example .env
   ```

2. **Update environment variables**
   ```env
   PORT=10000
   NODE_ENV=production
   JWT_SECRET=your-super-secret-production-key
   CORS_ORIGIN=https://your-frontend-url.vercel.app
   ```

### Step 2: Deploy to Render

1. **Create Render Account**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

2. **Create Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Name**: `your-app-backend`
     - **Root Directory**: `backend`
     - **Runtime**: `Node`
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`

3. **Add Environment Variables**
   - Go to "Environment" tab
   - Add:
     - `PORT`: `10000`
     - `NODE_ENV`: `production`
     - `JWT_SECRET`: `your-super-secret-production-key`
     - `CORS_ORIGIN`: `https://your-frontend-url.vercel.app`

4. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment
   - Your API will be live at `https://your-app-backend.onrender.com`

---

## 🗄️ Database Setup (Supabase) - Optional

### Step 1: Create Supabase Project

1. **Sign up at Supabase**
   - Go to [supabase.com](https://supabase.com)
   - Create new project

2. **Get Connection Details**
   - Go to Settings → Database
   - Copy connection string

### Step 2: Update Backend

1. **Add database environment variable**
   ```env
   DATABASE_URL=postgresql://postgres:[password]@db.[project].supabase.co:5432/postgres
   ```

2. **Update CORS in Render**
   - Add your Supabase URL to allowed origins

---

## 🔗 Update Frontend API URL

After backend deployment:

1. **Get your backend URL** from Render dashboard
2. **Update Vercel environment variable**:
   - Go to Vercel dashboard → Your project → Settings → Environment Variables
   - Update `NEXT_PUBLIC_API_URL` to your Render backend URL
3. **Redeploy frontend** (automatic on environment variable change)

---

## ✅ Testing Deployment

1. **Test Frontend**: Visit your Vercel URL
2. **Test Backend**: Visit `your-backend-url.onrender.com/health`
3. **Test Full Flow**:
   - Register new user
   - Login
   - Create/edit/delete products
   - Create/edit/delete users

---

## 🔧 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure `CORS_ORIGIN` in backend matches your frontend URL exactly
   - Include protocol: `https://your-app.vercel.app`

2. **Environment Variables**
   - Double-check all environment variables are set correctly
   - Restart services after changing environment variables

3. **Build Errors**
   - Check build logs in Vercel/Render
   - Ensure all dependencies are in `package.json`

### Support

- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Render**: [render.com/docs](https://render.com/docs)
- **Supabase**: [supabase.com/docs](https://supabase.com/docs)

---

## 🎉 Success!

Your application is now live and production-ready! 

**Frontend**: `https://your-app.vercel.app`
**Backend**: `https://your-app-backend.onrender.com`

Update your README with these live URLs for assessment submission. 