# 🚀 Full Stack Management Application

A modern, production-ready full-stack web application built with Next.js, React, Node.js, and Express. This application demonstrates advanced web development skills including authentication, CRUD operations, responsive design, and modern development practices.

## ✨ Features

### 🔐 Authentication System
- **User Registration & Login**: Secure JWT-based authentication
- **Password Security**: Bcrypt hashing with salt rounds
- **Session Management**: Token-based authentication with localStorage
- **Protected Routes**: Middleware-based route protection

### 👥 User Management
- **CRUD Operations**: Create, Read, Update, Delete users
- **Role Management**: User and Admin roles
- **Search & Filter**: Real-time search and role-based filtering
- **Responsive Table**: Professional data presentation

### 📦 Product Management
- **Complete Product Lifecycle**: Add, edit, delete, and view products
- **Advanced Filtering**: Category-based filtering and search
- **Sorting Options**: Sort by name, price, and stock
- **Grid Layout**: Modern card-based product display
- **Stock Management**: Visual stock indicators

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Professional Styling**: Beautiful gradients, shadows, and transitions
- **Icon Integration**: Lucide React icons for enhanced UX
- **Loading States**: Smooth loading animations and feedback
- **Error Handling**: User-friendly error messages and validation

### 🛡️ Security Features
- **JWT Authentication**: Secure token-based authentication
- **Route Protection**: Middleware-based API security
- **Input Validation**: Server-side validation and sanitization
- **CORS Configuration**: Proper cross-origin resource sharing
- **Helmet Security**: Security headers and protection

## 🛠️ Tech Stack

### Frontend
- **Next.js 15**: Latest React framework with App Router
- **React 19**: Latest React with modern hooks and patterns
- **TypeScript**: Type-safe development
- **Tailwind CSS 4**: Utility-first CSS framework
- **Lucide React**: Beautiful, customizable icons
- **Axios**: HTTP client for API communication

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **JWT**: JSON Web Token authentication
- **Bcrypt**: Password hashing
- **Helmet**: Security middleware
- **Morgan**: HTTP request logger
- **CORS**: Cross-origin resource sharing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fullstack-app
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cp env.example .env
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   cp env.local.example .env.local
   ```

4. **Set up environment variables**
   ```bash
   # Backend (.env)
   JWT_SECRET=your-secret-key-here
   PORT=5000
   NODE_ENV=development
   
   # Frontend (.env.local)
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

5. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```

6. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```

7. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

### 🚀 Quick Deploy

For immediate deployment to production:

1. **Follow the deployment guide**: [DEPLOYMENT.md](./DEPLOYMENT.md)
2. **Deploy to Vercel + Render** (free tier)
3. **Get live URLs** for assessment submission

## 🔑 Default Credentials

For testing purposes, you can use these pre-configured accounts:

### Admin User
- **Email**: jane@example.com
- **Password**: password123
- **Role**: Admin

### Regular User
- **Email**: john@example.com
- **Password**: password123
- **Role**: User

## 📱 Application Flow

1. **Landing Page**: Beautiful authentication interface with login/register toggle
2. **Authentication**: Secure login/registration with form validation
3. **Dashboard**: Main application interface with tabbed navigation
4. **User Management**: Complete user CRUD operations with search and filtering
5. **Product Management**: Product lifecycle management with advanced features

## 🎯 Key Features for Assessment

### Code Quality
- **Clean Architecture**: Well-structured component hierarchy
- **Type Safety**: Full TypeScript implementation
- **Error Handling**: Comprehensive error management
- **Responsive Design**: Mobile-first responsive approach

### Security Implementation
- **JWT Authentication**: Industry-standard authentication
- **Password Security**: Proper hashing and validation
- **Route Protection**: Middleware-based security
- **Input Validation**: Server-side validation

### User Experience
- **Modern UI**: Professional, polished interface
- **Smooth Interactions**: Loading states and transitions
- **Intuitive Navigation**: Clear information architecture
- **Responsive Layout**: Works on all device sizes

### Technical Excellence
- **Latest Technologies**: Next.js 15, React 19, Tailwind CSS 4
- **Performance**: Optimized rendering and state management
- **Maintainability**: Clean, readable, and well-documented code
- **Scalability**: Modular architecture for easy expansion

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Users (Protected)
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Products (Protected)
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

## 📊 Sample Data

The application comes pre-loaded with:
- **5 Sample Users**: Mix of admin and regular users
- **8 Sample Products**: Various categories with realistic data
- **Multiple Categories**: Electronics, Home & Kitchen, Sports, Books

## 🚀 Deployment Ready

This application is production-ready and can be deployed to:
- **Frontend**: Vercel, Netlify, or any static hosting
- **Backend**: Heroku, Railway, DigitalOcean, or any Node.js hosting
- **Database**: Can easily integrate with PostgreSQL, MongoDB, or any database

### 📱 Live Demo (After Deployment)

Once deployed, add your live URLs here:

- **🌐 Frontend**: `https://your-app.vercel.app`
- **⚙️ Backend API**: `https://your-backend.onrender.com`
- **📊 API Health Check**: `https://your-backend.onrender.com/health`

### 🎥 Demo Video

[Add a Loom/ScreenToGif demo video here showing the full application flow]

### 📸 Screenshots

[Add screenshots of key features here]
- Login/Register page
- Dashboard with tabs
- User management table
- Product management grid
- Mobile responsive design

## 🔮 Future Enhancements

- Database integration (PostgreSQL with Prisma)
- Real-time notifications
- File upload for product images
- Advanced analytics dashboard
- Multi-language support
- Dark mode theme

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using modern web technologies**


