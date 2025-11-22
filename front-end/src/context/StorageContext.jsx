import React, { createContext, useCallback, useState } from 'react';

// Context default shape
export const StorageContext = createContext({
  followingDoctors: [],
  bookedAppointments: [],
  setFollowingDoctors: () => {},
  setBookedAppointments: () => {},
  followDoctor: () => {},
  unfollowDoctor: () => {},
  addBookedAppointment: () => {},
  removeBookedAppointment: () => {},
});

export const StorageProvider = ({ children }) => {
  const [followingDoctors, setFollowingDoctors] = useState([]);
  const [bookedAppointments, setBookedAppointments] = useState([]);

  // Add a doctor to followingDoctors if not already present
  const followDoctor = useCallback((doctor) => {
    if (!doctor) return;
    setFollowingDoctors(prev => {
      const exists = prev.find(d => d && d.id === doctor.id);
      return exists ? prev : [...prev, doctor];
    });
  }, []);

  // Remove a doctor by id
  const unfollowDoctor = useCallback((doctorId) => {
    if (!doctorId) return;
    setFollowingDoctors(prev => prev.filter(d => d && d.id !== doctorId));
  }, []);

  // Add a booked appointment
  const addBookedAppointment = useCallback((appointment) => {
    if (!appointment) return;
    setBookedAppointments(prev => [...prev, appointment]);
  }, []);

  // Remove a booked appointment by id
  const removeBookedAppointment = useCallback((appointmentId) => {
    if (!appointmentId) return;
    setBookedAppointments(prev => prev.filter(a => a && a.id !== appointmentId));
  }, []);

  return (
    <StorageContext.Provider value={{
      followingDoctors,
      bookedAppointments,
      setFollowingDoctors,
      setBookedAppointments,
      followDoctor,
      unfollowDoctor,
      addBookedAppointment,
      removeBookedAppointment,
    }}>
      {children}
    </StorageContext.Provider>
  );
};


