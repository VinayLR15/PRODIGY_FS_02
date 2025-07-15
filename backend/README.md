Employee Management System (EMS)
A full-stack Employee Management System built with Node.js, Express, MongoDB, and a simple HTML/CSS frontend. This system allows administrators to manage employee records securely with full CRUD operations and JWT-based authentication.
📌 Features
• Register & Login (JWT Auth)
• Add, View, Edit, and Delete employee records
• Secure backend with authentication middleware
• Clean, modern UI using custom CSS
• RESTful API with token-protected routes
🚀 Tech Stack
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB (Mongoose ORM)
Auth: JWT (jsonwebtoken)
🧑‍💻 Folder Structure

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

🔧 Setup Instructions
1. Clone the Repository:
   git clone https://github.com/your-username/employee-management-system.git
2. Install Dependencies:
   cd backend
   npm install
3. Create .env File in backend/ with:
   MONGODB_URI=your_uri
   JWT_SECRET=your_secret
   PORT=5000
4. Run the Server:
   node server.js
5. Open Frontend:
   Open public/login.html or register.html in browser
🧪 API Routes
Method	Route	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login & get JWT token
GET	/api/employees	Get all employees (auth)
POST	/api/employees	Add new employee (auth)
PUT	/api/employees/:id	Update employee by ID
DELETE	/api/employees/:id	Delete employee by ID
🔐 Authentication
• JWT token is stored in localStorage after login.
• Token is used to access protected routes.
• auth.js middleware validates token for all employee routes.
📸 Screenshots
Add screenshots here:
[Login Page Placeholder]
[Dashboard Placeholder]
🙏 Acknowledgement
I would like to express my sincere gratitude to Prodigy InfoTech for providing this internship opportunity. This project was developed as part of the Full Stack Web Development Task-02, which enhanced my practical skills in building secure, full-stack applications.

Special thanks to the mentors and the community for guidance and resources that made this project possible.
📄 License & Author
This project is licensed under the MIT License.

Author: Vinay L.R
GitHub: https://github.com/VinayLR15
