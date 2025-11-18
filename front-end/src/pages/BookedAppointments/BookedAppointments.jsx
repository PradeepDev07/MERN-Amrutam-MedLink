import Navbar from '../../components/Navbar/Navbar'
import styles from './BookedAppointments.module.css'


const BookedAppointments = () => {
  return (
    <div className={styles.container} >
        <Navbar />
      <h1 className={styles.title}>Booked Appointments</h1>
      {/* You can add more content here */}
    </div>
  )
}

export default BookedAppointments