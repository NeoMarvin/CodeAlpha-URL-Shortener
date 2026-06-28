# CodeAlpha URL Shortener API

A RESTful URL Shortener API built with **Node.js**, **Express.js**, and **MongoDB Atlas**. This API allows users to create, manage, redirect, and track shortened URLs while following a clean layered architecture.

> Developed as part of the **CodeAlpha Backend Development Internship**.

---

## 🚀 Features

### Core Features

- Create shortened URLs
- Redirect users using short URLs
- Store URL mappings in MongoDB Atlas
- Retrieve all shortened URLs
- Delete shortened URLs

### Bonus Features

- Automatic NanoID short code generation
- Custom short code support
- Click tracking
- URL expiration dates
- Centralized error handling
- Layered backend architecture

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- NanoID
- Dotenv
- Nodemon
- Postman

---

## 🏗️ Architecture

The project follows a layered architecture to separate responsibilities and improve maintainability.

```text
Client
   │
   ▼
Routes
   │
   ▼
Controllers
   │
   ▼
Services
   │
   ▼
Repositories
   │
   ▼
MongoDB Atlas
```

### Layer Responsibilities

- **Routes** – Define API endpoints.
- **Controllers** – Handle HTTP requests and responses.
- **Services** – Contain business logic.
- **Repositories** – Handle database queries.
- **Models** – Define MongoDB schemas.
- **Middleware** – Global error handling.
- **Utils** – Shared utilities such as `AppError` and `asyncWrapper`.

---

## 📁 Project Structure

```text
url-shortener/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── app.js
│   └── server.js
│
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── API_DOCUMENTATION.md
└── CodeAlpha_URL_Shortener_Postman_Collection.json
```

## 🌐 Live API

**Base URL**

```
https://codealpha-url-shortener-kfvy.onrender.com
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate into the project

```bash
cd url-shortener
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

### 5. Start the development server

```bash
npm run dev
```

The server will start on:

```
http://localhost:5000
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/urls` | Create a shortened URL |
| GET | `/api/urls` | Retrieve all URLs |
| GET | `/:shortCode` | Redirect to the original URL |
| DELETE | `/api/urls/:shortCode` | Delete a shortened URL |

---

## 📝 Sample Request

### Create a Short URL

```http
POST /api/urls
```

Request Body

```json
{
  "originalUrl": "https://google.com"
}
```

### Create a Custom Short URL

```json
{
  "originalUrl": "https://google.com",
  "shortCode": "marvin"
}
```

### Create an Expiring URL

```json
{
  "originalUrl": "https://google.com",
  "expiresAt": "2026-12-31T23:59:59Z"
}
```

### Create a Custom URL with Expiration

```json
{
  "originalUrl": "https://google.com",
  "shortCode": "marvin",
  "expiresAt": "2026-12-31T23:59:59Z"
}
```

---

## 📊 HTTP Status Codes

| Status Code | Description |
|--------------|-------------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 404 | Not Found |
| 409 | Conflict |
| 410 | Gone |
| 500 | Internal Server Error |

---

## 🎯 Key Learning Outcomes

During this project, I gained practical experience with:

- RESTful API development
- Express.js middleware
- MongoDB Atlas integration
- Mongoose ODM
- Layered architecture (Controller → Service → Repository)
- Centralized error handling
- Async wrapper pattern
- Git version control
- API testing using Postman

---

## 👨‍💻 Author

**Pamilerin Adegbite**

Backend Developer | Software Engineering Student

- GitHub: https://github.com/NeoMarvin
- LinkedIn: https:linkedin.com/in/pamilerin-adegbite

---

## 📄 License

This project was developed for educational purposes as part of the **CodeAlpha Backend Development Internship**.