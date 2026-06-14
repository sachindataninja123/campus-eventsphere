# 🎓 Campus Event Hub

A centralized web platform for managing and discovering campus events. Students can browse, register, and participate in events, while administrators can create, manage, and monitor events—all in one place.

---

## 📖 Overview

Campus Event Hub simplifies campus event management by providing a single platform where:

- Students can discover and register for events.
- Event organizers can manage registrations efficiently.
- Administrators can create, update, and monitor events.
- Colleges can improve event participation and communication.

---

## ✨ Features

### 👨‍🎓 Student Module
- User Registration & Login
- Browse Upcoming Events
- View Detailed Event Information
- Register for Events
- View Registered Events
- Search and Filter Events

### 👨‍💼 Admin Module
- Secure Admin Authentication
- Create New Events
- Update Existing Events
- Delete Events
- Manage Event Registrations
- View Participant Details

### 🎯 Event Management
- Event Categories
- Event Posters Upload
- Event Date & Time Management
- Eligibility Information
- Prize Information
- Venue Details

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JWT (JSON Web Token)
- bcrypt.js

### File Upload
- Multer
- Cloudinary

---

## 📂 Project Structure

```bash
Campus-Event-Hub/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── context/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── README.md
└── package.json
```

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/campus-eventsphere.git
```

### 2. Navigate to Project Directory

```bash
cd campus-eventsphere
```

### 3. Install Dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd backend
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the server directory:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## ▶️ Running the Project

### Start Backend Server

```bash
cd backend
npm run dev
```

### Start Frontend

```bash
cd client
npm run dev
```

## 🔮 Future Enhancements

- Email Notifications
- QR Code-Based Event Entry
- Event Analytics Dashboard
- Certificate Generation
- Real-Time Notifications
- Mobile Application
- AI-Based Event Recommendations

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push changes

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Sachin Kushwaha**

- GitHub: https://github.com/sachindataninja123
- LinkedIn: https://linkedin.com/in/sachikushwaha

---

⭐ If you found this project useful, don't forget to star the repository!


