# Amrutam MedLink 🏥

A full-stack MERN (MongoDB-ready, Express, React, Node.js) application for booking medical appointments and managing doctor-patient interactions. This platform allows users to search for doctors, view profiles, book appointments, and manage their healthcare needs.

## 🌟 Features

### User Features
- **User Authentication**: Secure login and signup functionality
- **Find Doctors**: Search and filter doctors by specialty, location, and other criteria
- **Doctor Profiles**: Detailed doctor information including experience, specializations, and reviews
- **Appointment Booking**: Schedule appointments with preferred doctors
- **Follow Doctors**: Keep track of favorite healthcare providers
- **Appointment Management**: View and manage booked appointments
- **Responsive Design**: Works seamlessly across desktop and mobile devices

### Technical Features
- **Protected Routes**: Secure pages requiring authentication
- **Context API**: State management for menu, notifications, and storage
- **Modern UI**: Clean and intuitive user interface with modular CSS
- **Toast Notifications**: Real-time feedback for user actions
- **Data Persistence**: Server-based user data storage with fallback support

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - UI library
- **React Router DOM 7.9.4** - Client-side routing
- **Vite 7.1.7** - Build tool and dev server
- **React Icons 5.5.0** - Icon library
- **React Toastify 9.1.3** - Toast notifications
- **JS Cookie 3.0.5** - Cookie management
- **CSS Modules** - Component-scoped styling

### Backend
- **Node.js 18.x** - Runtime environment
- **Express 4.18.2** - Web framework
- **CORS 2.8.5** - Cross-origin resource sharing
- **File-based storage** - JSON data persistence

### Development Tools
- **ESLint** - Code linting
- **Vite** - Fast development and building

## 📁 Project Structure

```
Amrutam-MedLink/
├── front-end/
│   ├── src/
│   │   ├── components/
│   │   │   ├── FindDoctorsComponents/
│   │   │   │   ├── DoctorCard/
│   │   │   │   ├── Filters/
│   │   │   │   ├── SearchBar/
│   │   │   │   └── ShowFilter/
│   │   │   ├── SingleDoctorProfileComponents/
│   │   │   │   ├── Appointment/
│   │   │   │   ├── ConcernsTreat/
│   │   │   │   ├── FeaturedReviews/
│   │   │   │   ├── ProfileAbout/
│   │   │   │   ├── ProfileCard/
│   │   │   │   ├── Specialize/
│   │   │   │   └── WorkExperience/
│   │   │   ├── Navbar/
│   │   │   └── Notifications/
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   ├── FindDoctors/
│   │   │   ├── SingleDoctorProfile/
│   │   │   ├── FollowingDoctors/
│   │   │   ├── BookedAppointments/
│   │   │   ├── Login/
│   │   │   ├── Signup/
│   │   │   ├── About/
│   │   │   └── NotFound/
│   │   ├── context/
│   │   │   ├── MenuContext.jsx
│   │   │   ├── NotificationContext.jsx
│   │   │   └── StorageContext.jsx
│   │   ├── storage/
│   │   │   ├── api.js
│   │   │   ├── log.js
│   │   │   └── users.json
│   │   └── ProtectedRouter/
│   └── scripts/
│       ├── transform_doctors.js
│       └── verify_doctors.mjs
└── back-end/
    └── server/
        ├── index.js
        ├── package.json
        └── src/
            └── storage/
                └── users.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PradeepDev07/MERN-Amrutam-MedLink.git
   cd MERN-Amrutam-MedLink
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd front-end
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../back-end/server
   npm install
   ```

### Running the Application

#### Development Mode

1. **Start the Backend Server**
   ```bash
   cd back-end/server
   npm start
   ```
   Server will run on `http://localhost:3000` (or configured port)

2. **Start the Frontend Development Server**
   ```bash
   cd front-end
   npm run dev
   ```
   Application will open at `http://localhost:5173`

#### Production Build

1. **Build the Frontend**
   ```bash
   cd front-end
   npm run build
   ```

2. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 🔑 Key Components

### Pages
- **Home** - Landing page with overview
- **Find Doctors** - Search and filter doctors
- **Single Doctor Profile** - Detailed doctor information
- **Following Doctors** - List of followed doctors
- **Booked Appointments** - User's appointment history
- **Login/Signup** - Authentication pages
- **About** - Information about the platform

### Context Providers
- **MenuContext** - Navigation menu state
- **NotificationContext** - Toast notification management
- **StorageContext** - User data and authentication state

### Protected Routes
Routes that require authentication redirect unauthenticated users to login:
- Doctor Profile Details (`/doctors/:id`)
- Following Doctors (`/following-doctors`)
- Booked Appointments (`/booked-appointments`)

## 📝 API Endpoints

### Backend Server
- `GET /users` - Fetch all users
- `POST /users` - Save users array
- `POST /users/add` - Add a new user

The backend is deployed at: `https://mern-amrutam-medlink.onrender.com`

## 🎨 Styling

The project uses CSS Modules for component-scoped styling, ensuring:
- No style conflicts
- Better maintainability
- Clear component-style relationships

## 🔧 Scripts

### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run serve-storage # Run storage server
```

### Backend
```bash
npm start           # Start the server
```

## 🌐 Deployment

The backend server is configured for deployment on Render with:
- Node.js 18.x engine specification
- CORS enabled for cross-origin requests
- File-based JSON storage

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is part of the NXTWAVE Projects portfolio.

## 👨‍💻 Author

**PradeepDev07**
- GitHub: [@PradeepDev07](https://github.com/PradeepDev07)

## 🙏 Acknowledgments

- NXTWAVE for project guidance
- React and Vite communities for excellent documentation


---

Made with ❤️ for better healthcare accessibility
