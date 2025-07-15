
# 👨‍💼 Employee Management System (EMS)

A full-stack **Employee Management System** built using **Node.js**, **Express.js**, **MongoDB**, and a clean **HTML/CSS frontend**. The system allows administrators to perform full **CRUD operations** on employee records with secure **JWT-based authentication**.

---

## 📌 Features

- ✅ User Registration & Login (JWT Authentication)
- 🧾 Create, Read, Update, Delete Employee Records
- 🔐 Token-protected API Routes
- 🎨 Clean frontend with form validation
- 🔍 RESTful architecture

---

## 🚀 Tech Stack

| Layer     | Technology             |
|-----------|------------------------|
| Frontend  | HTML, CSS, JavaScript  |
| Backend   | Node.js, Express.js    |
| Database  | MongoDB with Mongoose  |
| Auth      | JSON Web Token (JWT)   |

---

## 🧑‍💻 Folder Structure

```
PRODIGY_FS_02/
├── backend/
│   ├── models/
│   │   ├── Employee.js
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── employee.js
│   ├── middleware/
│   │   └── auth.js
│   └── server.js
├── public/
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── style.css
│   └── script.js
├── .env
├── .gitignore
└── README.md
```

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/VinayLR15/employee-management-system.git
cd employee-management-system
```

### 2. Navigate to Backend Folder and Install Dependencies

```bash
cd backend
npm install
```

### 3. Create a `.env` file inside `/backend`

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

> 🔐 Replace `your_mongodb_connection_string` and `your_jwt_secret` with your actual values.

### 4. Start the Server

```bash
node server.js
```

> The server will run at: [http://localhost:5000](http://localhost:5000)

### 5. Open Frontend

Open the `public/login.html` or `public/register.html` in your browser manually, or serve with a local static file server like Live Server in VS Code.

---

## 🧪 API Routes

| Method | Route                | Description              |
| ------ | -------------------- | ------------------------ |
| POST   | `/api/auth/register` | Register a new user      |
| POST   | `/api/auth/login`    | Login & return JWT token |
| GET    | `/api/employees`     | Get all employees        |
| POST   | `/api/employees`     | Add new employee         |
| PUT    | `/api/employees/:id` | Update employee by ID    |
| DELETE | `/api/employees/:id` | Delete employee by ID    |

> 🔒 All `/api/employees/*` routes require a JWT token in the `Authorization` header.

---

## 🔐 Authentication Workflow

* On successful login, a JWT token is returned and stored in `localStorage`
* This token must be included in all requests to protected routes
* Backend uses `auth.js` middleware to validate and authorize access to APIs

---

## 📸 Screenshots

> *(Add real screenshots and update the links accordingly)*

![Login Page](https://via.placeholder.com/800x400?text=Login+Page)
![Dashboard](https://via.placeholder.com/800x400?text=Dashboard+Page)

---

## 🙏 Acknowledgement

I would like to express my sincere gratitude to **Prodigy InfoTech** for providing this internship opportunity.

This project was developed as part of the **Full Stack Web Development Internship (Task-02)** and has helped me enhance my skills in real-world application development, including secure backend services, authentication, and user interface design.

Special thanks to the mentors and the Prodigy InfoTech team for continuous support and guidance.

---

## 👨‍🎓 Author

**Vinay L.R**  
GitHub: [VinayLR15](https://github.com/VinayLR15)

---

## 📄 License

This project is licensed under the **MIT License**.
