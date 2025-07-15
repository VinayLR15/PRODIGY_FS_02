# 👨‍💼 Employee Management System (EMS)

A full-stack **Employee Management System** built with **Node.js**, **Express**, **MongoDB**, and a simple **HTML/CSS frontend**. This system allows administrators to manage employee records securely with full **CRUD** operations and **JWT-based authentication**.

---

## 📌 Features

- 🧾 Register & Login (JWT Auth)
- 📋 Add, View, Edit, and Delete employee records
- ✅ Secure backend with authentication middleware
- 🧼 Clean, modern UI using custom CSS
- 📦 RESTful API with token-protected routes

---

## 🚀 Tech Stack

| Layer     | Technology                |
|-----------|---------------------------|
| Frontend  | HTML, CSS, JavaScript     |
| Backend   | Node.js, Express.js       |
| Database  | MongoDB (Mongoose ORM)    |
| Auth      | JWT (jsonwebtoken)        |

---

## 🧑‍💻 Folder Structure

PRODIGY_FS_02/
├── backend/
│ ├── models/
│ │ ├── Employee.js
│ │ └── User.js
│ ├── routes/
│ │ ├── auth.js
│ │ └── employee.js
│ ├── middleware/
│ │ └── auth.js
│ └── server.js
├── public/
│ ├── login.html
│ ├── register.html
│ ├── dashboard.html
│ ├── style.css
│ └── script.js
├── .env
├── .gitignore
└── README.md

yaml
Copy code

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/employee-management-system.git
cd employee-management-system
2. Install Dependencies
bash
Copy code
cd backend
npm install
3. Create .env File
Inside backend/, create a .env file with the following:

ini
Copy code
MONGODB_URI=mongodb+srv://yourUsername:yourPassword@cluster0.mongodb.net/ems?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key
PORT=5000
⚠️ Replace yourUsername, yourPassword, and your_jwt_secret_key with your own credentials.

4. Run the Server
bash
Copy code
node server.js
Server will start at http://localhost:5000

5. Open Frontend
Open public/login.html or public/register.html in your browser.

🧪 API Routes
Method	Route	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login & get JWT token
GET	/api/employees	Get all employees (auth)
POST	/api/employees	Add new employee (auth)
PUT	/api/employees/:id	Update employee by ID
DELETE	/api/employees/:id	Delete employee by ID

All /api/employees/* routes require JWT token in Authorization header.

🔐 Authentication
After login, the JWT token is stored in localStorage.

This token is used for accessing protected routes.

Middleware (auth.js) validates the token for all employee routes.

📸 Screenshots


🧑‍🏫 Author
Vinay L R
📧 vinaylrvinaylr54@gmail.com

📄 License
This project is licensed under the MIT License.
