<div align="center">

<!-- Animated Wave Top -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,12,18&height=150&section=header" alt="Wave" width="100%"/>

####🖼️ Image Processing Backend Service
Cloudinary-like Image Transformation API

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)](https://jwt.io/)
[![Sharp](https://img.shields.io/badge/Sharp-99CC00?style=for-the-badge&logo=sharp&logoColor=white)](https://sharp.pixelplumbing.com/)

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-api-endpoints">API</a> •
  <a href="#️-how-to-run">Setup</a> •
  <a href="#-learning-outcomes">Learning</a>
</p>

---

### 📚 Project Reference
This project is based on the [Image Processing Service](https://roadmap.sh/projects/image-processing-service) roadmap from **roadmap.sh**

---

</div>

## 📖 About The Project

This project is a **production-ready backend system** for an image processing service similar to **Cloudinary**.  

> **🎯 Backend-Focused Project:** This is primarily a **backend development project**. Frontend is optional and kept minimal for testing purposes only.

The system allows **authenticated users** to:
- 📤 Upload images
- ✨ Apply transformations (resize, rotate, filters, etc.)
- 💾 Retrieve images in different formats efficiently

Built with **Node.js, Express, MongoDB, JWT, Multer, and Sharp**, this project demonstrates real-world backend development skills including **authentication, file handling, image processing, and scalable architecture**.

<br>

---

## 🎯 Problem Statement

> **Design a secure backend system for an image processing service where authenticated users can upload images, apply various transformations such as resizing and filtering, and retrieve images in different formats. The system must efficiently manage image storage, processing, and retrieval while ensuring security, scalability, and performance.**

### 🧠 Real-World Context

Think of services like:
- **Instagram** → Profile photo resizing
- **E-commerce** → Product image compression
- **Blogs** → Thumbnail generation

All use **server-side image processing** — that's what you're building here!

<br>

---

## 🚀 Features

<table>
<tr>
<td width="50%">

### 🔐 User Authentication
- ✅ User Registration (Sign-Up)
- ✅ User Login (Sign-In)
- ✅ JWT-based Authentication
- ✅ Secure protected endpoints
- ✅ Password hashing

</td>
<td width="50%">

### 🖼️ Image Management
- ✅ Upload images (multipart/form-data)
- ✅ Store original images
- ✅ Extract metadata (size, dimensions, format)
- ✅ List user's uploaded images
- ✅ Retrieve original & transformed images

</td>
</tr>
</table>

### 🔄 Image Transformations

Users can apply **one or more transformations** to their images:

| Transformation | Description |
|----------------|-------------|
| **Resize** | Change image dimensions |
| **Crop** | Cut specific portion |
| **Rotate** | Rotate by degrees |
| **Flip** | Vertical flip |
| **Mirror** | Horizontal flip |
| **Compress** | Reduce file size |
| **Format Change** | JPEG ↔ PNG ↔ WebP |
| **Filters** | Grayscale, Sepia, Blur |
| **Watermark** | Add text/image overlay (Optional) |

<br>

---

## 🧱 Tech Stack

<div align="center">

### Backend Technologies

| Technology | Purpose |
|:----------:|:-------:|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) | Runtime Environment |
| ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white) | Web Framework |
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white) | Database |
| ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat&logo=mongoose&logoColor=white) | ODM |
| ![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white) | Authentication |
| ![Multer](https://img.shields.io/badge/Multer-FF6C37?style=flat) | File Upload |
| ![Sharp](https://img.shields.io/badge/Sharp-99CC00?style=flat) | Image Processing |

### Frontend (Optional - Basic UI Only)

> **Note:** Frontend is optional and kept minimal. **Main focus is on Backend architecture.**

| Technology | Purpose |
|:----------:|:-------:|
| ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) | UI Library |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) | Build Tool |
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white) | HTTP Client |
| ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=reactrouter&logoColor=white) | Routing |

</div>

<br>

---

## 📁 Project Structure

```
image-processing-project/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   └── imageController.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   └── Image.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   └── imageRoutes.js
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   └── upload.js
│   │   ├── services/
│   │   │   └── imageService.js
│   │   ├── uploads/
│   │   │   ├── originals/
│   │   │   └── transformed/
│   │   ├── app.js
│   │   └── server.js
│   ├── .env
│   └── package.json
│
├── frontend/ (optional)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

<br>

---

## 🔐 API Endpoints

### Authentication Endpoints

#### 📝 Register User
```http
POST /auth/register
Content-Type: application/json

{
  "username": "user1",
  "email": "user1@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "64f8a9b2c1d2e3f4a5b6c7d8",
    "username": "user1"
  }
}
```

---

#### 🔑 Login User
```http
POST /auth/login
Content-Type: application/json

{
  "username": "user1",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "64f8a9b2c1d2e3f4a5b6c7d8",
    "username": "user1"
  }
}
```

---

### Image Management Endpoints

#### 📤 Upload Image
```http
POST /images
Authorization: Bearer <JWT_TOKEN>
Content-Type: multipart/form-data

{
  "image": <file>
}
```

**Response:**
```json
{
  "success": true,
  "image": {
    "id": "64f8a9b2c1d2e3f4a5b6c7d9",
    "url": "/uploads/originals/image-1234567890.jpg",
    "metadata": {
      "width": 1920,
      "height": 1080,
      "format": "jpeg",
      "size": 245632
    }
  }
}
```

---

#### ✨ Apply Transformations
```http
POST /images/:id/transform
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

{
  "resize": {
    "width": 300,
    "height": 300
  },
  "rotate": 90,
  "filters": {
    "grayscale": true
  }
}
```

**Response:**
```json
{
  "success": true,
  "transformedUrl": "/uploads/transformed/image-1234567890-transformed.jpg",
  "metadata": {
    "width": 300,
    "height": 300,
    "format": "jpeg"
  }
}
```

---

#### 🖼️ Get Single Image
```http
GET /images/:id
Authorization: Bearer <JWT_TOKEN>
```

**Response:**
```json
{
  "success": true,
  "image": {
    "id": "64f8a9b2c1d2e3f4a5b6c7d9",
    "url": "/uploads/originals/image-1234567890.jpg",
    "transformedUrl": "/uploads/transformed/image-1234567890-transformed.jpg",
    "metadata": {
      "width": 1920,
      "height": 1080,
      "format": "jpeg"
    }
  }
}
```

---

#### 📋 List User Images
```http
GET /images
Authorization: Bearer <JWT_TOKEN>
```

**Response:**
```json
{
  "success": true,
  "count": 5,
  "images": [
    {
      "id": "64f8a9b2c1d2e3f4a5b6c7d9",
      "url": "/uploads/originals/image-1.jpg",
      "uploadedAt": "2024-09-05T10:30:00Z"
    },
    // ... more images
  ]
}
```

<br>

---

## ⚙️ Environment Variables

Create a `.env` file inside the `backend/` folder:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=mongodb://127.0.0.1:27017/image_service

# Authentication
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d

# File Upload
MAX_FILE_SIZE=5242880
UPLOAD_PATH=./uploads
```

<br>

---

## ▶️ How to Run

### 🔧 Prerequisites

- Node.js (v16 or higher)
- MongoDB (running locally or cloud)
- npm or yarn

### 🚀 Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file (see Environment Variables section above)

# Start development server
npm run dev

# Server will run on http://localhost:5000
```

### 🎨 Frontend Setup (Optional - Not Required)

> **Note:** Frontend is completely optional. You can test all APIs using **Postman** or **cURL** instead.

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Frontend will run on http://localhost:5173
```

<br>

---

## 🧪 Testing the API

### Using cURL

```bash
# Register a user
curl -X POST http://localhost:5000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","email":"test@example.com","password":"test123"}'

# Upload an image
curl -X POST http://localhost:5000/images \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -F "image=@/path/to/image.jpg"
```

### Using Postman

1. Import the API endpoints
2. Set up environment variables for `baseUrl` and `token`
3. Test each endpoint with sample data

<br>

---

## 🧠 Learning Outcomes

By completing this project, you will learn:

| Skill | Description |
|-------|-------------|
| 🔐 **JWT Authentication** | Implementing secure token-based auth |
| 🛡️ **API Security** | Protecting routes and validating requests |
| 📁 **File Handling** | Managing multipart/form-data uploads |
| 🖼️ **Image Processing** | Server-side transformations with Sharp |
| 🗄️ **MongoDB Integration** | Storing metadata and user data |
| 🏗️ **Middleware Architecture** | Building reusable middleware functions |
| 🐛 **Debugging** | Solving real-world backend issues |
| 📈 **Scalability** | Understanding performance considerations |

<br>

---

## 🔮 Future Enhancements

- [ ] **Cloud Storage Integration** (AWS S3, Cloudinary)
- [ ] **Redis Caching** for transformed images
- [ ] **Rate Limiting** for transformation requests
- [ ] **Asynchronous Processing** using Bull Queue
- [ ] **Image Deletion** and versioning
- [ ] **CDN Integration** for faster delivery
- [ ] **Docker Containerization**
- [ ] **CI/CD Pipeline** setup
- [ ] **Image Compression** optimization
- [ ] **Admin Dashboard** for monitoring

<br>

---

## 🎯 One-Line Summary

> **Developed a Cloudinary-like image processing backend with JWT authentication, multipart file uploads, server-side transformations (resize, rotate, filters), and efficient image retrieval using Node.js, Express, MongoDB, Multer, and Sharp.**

> 💡 **Interview Tip:** Emphasize that this is a **backend-focused project** showcasing API design, authentication, file handling, and image processing algorithms.

<br>

---

## 📊 System Design Challenges

| Challenge | Solution |
|-----------|----------|
| **File Handling** | Images are binary data → Multer middleware |
| **Performance** | Image processing is CPU-intensive → Sharp (fast C++ library) |
| **Security** | Private images → JWT authentication |
| **Scalability** | Thousands of images → Cloud storage + CDN |
| **Cost** | Re-processing is expensive → Caching transformed images |

<br>

## 📊 Problem Link 
https://roadmap.sh/projects/image-processing-service

<!-- Animated Wave Bottom -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,12,18&height=150&section=footer" alt="Wave" width="100%"/>
</div>

