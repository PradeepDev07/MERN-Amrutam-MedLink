import styles from './Appointment.module.css'
import { TiTickOutline } from "react-icons/ti";
import { useState, useContext } from 'react';
import { StorageContext } from '../../../context/StorageContext'
import { toast } from 'react-toastify'

const Appointment = (props) => {
  const {
    appointment = {
      fee: 0,
      sessionModes: [
        { type: "In-Clinic", duration: "50 Mins", selected: true },
        { type: "Video", duration: "35 Mins", selected: false },
        { type: "Chat", duration: "15 Mins", selected: false },
      ],
      availableDates: [
        { date: "Tue, 11 Oct", slots: 4 },
        { date: "Thu, 13 Oct", slots: 3 },
        { date: "Fri, 14 Oct", slots: 5 },
      ],
      availableTimeSlots: {
        morning: ["09:30 AM", "10:15 AM", "11:00 AM"],
        evening: ["04:30 PM", "05:15 PM", "06:00 PM"],
        selectedTime: "10:15 AM",
      },
      actionButton: "Make An Appointment",
    }
  } = props;

  const { fee, sessionModes, availableDates, availableTimeSlots, actionButton } = appointment;

  // State hooks
  const [selectedMode, setSelectedMode] = useState(sessionModes.find(mode => mode.selected)?.type || null);
  const [selectedDate, setSelectedDate] = useState(availableDates[0]?.date);
  const [selectedTime, setSelectedTime] = useState(availableTimeSlots.selectedTime);

  const handleModeSelect = (modeType) => setSelectedMode(modeType);
  const handleDateSelect = (date) => setSelectedDate(date);
  const handleTimeSelect = (time) => setSelectedTime(time);

  const { addBookedAppointment } = useContext(StorageContext)

  const handleSubmit = () => {
    const booking = {
      id: `${Date.now()}`,
      mode: selectedMode,
      date: selectedDate,
      time: selectedTime,
      fee,
      doctor: props.doctor || null,
      createdAt: new Date().toISOString(),
    }

    // save to context
    if (addBookedAppointment) addBookedAppointment(booking)

    // show toast notification instead of alert
    toast.success(`Appointment booked — ${selectedMode} • ${selectedDate} • ${selectedTime}`)
    console.log("Booking Details:", booking);
  };

  return (
    <div className={styles.container}>
      {/* Appointment Fees */}
      <div className={styles.AppointmentFees}>
        <h3>Appointment Fees</h3>
        <p className={styles.fee}>₹{fee}</p>
      </div>

      {/* Session Modes */}
      <div className={styles.SelectYourModeOfSession}>
        <h3>Select Your Mode Of Session</h3>
        <div className={styles.ModesList}>
          {sessionModes.map((mode, index) => (
            <div
              key={index}
              className={`${styles.ModeItem} ${selectedMode === mode.type ? styles.Selected : ''}`}
              onClick={() => handleModeSelect(mode.type)}
            >
              <p className={styles.modeType}>{mode.type}</p>
              <span className={styles.modeDuration}>{mode.duration}</span>
              {selectedMode === mode.type && <TiTickOutline className={styles.TickIcon} />}
            </div>
          ))}
        </div>
      </div>

      {/* Available Dates */}
      <div className={styles.AvailableDates}>
        <h3>Available Dates</h3>
        <div className={styles.DatesList}>
          {availableDates.map((dateObj, index) => (
            <div
              key={index}
              className={`${styles.DateItem} ${selectedDate === dateObj.date ? styles["selected-date"] : ''}`}
              onClick={() => handleDateSelect(dateObj.date)}
            >
              <p className={styles.date}>{dateObj.date}</p>
              <span className={styles.slots}>{dateObj.slots} slots</span>
            </div>
          ))}
        </div>
      </div>

      {/* Time Slots */}
      <div className={styles.TimeSlots}>
        <h3>Available Time Slots</h3>

        <div className={styles.TimeSection}>
          <h4>Morning</h4>
          <div className={styles.SlotList}>
            {availableTimeSlots.morning?.map((time, index) => (
              <span
                key={index}
                className={`${styles.SlotItem} ${selectedTime === time ? styles.SelectedSlot : ''}`}
                onClick={() => handleTimeSelect(time)}
              >
                {time}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.TimeSection}>
          <h4>Evening</h4>
          <div className={styles.SlotList}>
            {availableTimeSlots.evening?.map((time, index) => (
              <span
                key={index}
                className={`${styles.SlotItem} ${selectedTime === time ? styles.SelectedSlot : ''}`}
                onClick={() => handleTimeSelect(time)}
              >
                {time}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Button */}
      <div className={styles.AppointmentButton} id="BookAppointment">
        <button className={styles.button} onClick={handleSubmit}>
          {actionButton}
        </button>
      </div>
    </div>
  );
};

export default Appointment;
