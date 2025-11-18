import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import FindDoctors from "./pages/FindDoctors/FindDoctors";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import SingleDoctorProfile from "./pages/SingleDoctorProfile/SingleDoctorProfile";
import FollowingDoctors from "./pages/FollowingDoctors/FollowingDoctors";
import ProtectedRoute from "./ProductedRouter/ProductedRouter";
import BookedAppointments from "./pages/BookedAppointments/BookedAppointments";


import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes */}

  <Route path="/home" element={<Home />} />

  <Route path="/doctors" element={<FindDoctors />} />
  <Route path="/about" element={<About />} />

        <Route path="/doctors/:Id" element={
          <ProtectedRoute redirectTo="/login">
            <SingleDoctorProfile />
          </ProtectedRoute>
        } />
        <Route
          path="/following-doctors"
          element={
            <ProtectedRoute redirectTo="/login">
              <FollowingDoctors />
            </ProtectedRoute>
          }
        />
        <Route
          path="/booked-appointments" 
          element={
            <ProtectedRoute redirectTo="/login">
              <BookedAppointments />
            </ProtectedRoute>
          }
        />


          <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
