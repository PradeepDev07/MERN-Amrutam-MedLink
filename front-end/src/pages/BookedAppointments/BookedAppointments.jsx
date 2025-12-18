import Navbar from '../../components/Navbar/Navbar'
import styles from './BookedAppointments.module.css'
import { useContext } from 'react'
import { StorageContext } from '../../context/StorageContext'

const BookedAppointments = () => {
  const { bookedAppointments, removeBookedAppointment } = useContext(StorageContext)

  return (
    <><Navbar />
    <div className={styles.container} >
       
      <h1 className={styles.title}>Booked Appointments</h1>

      {bookedAppointments && bookedAppointments.length > 0 ? (
        <ul className={styles.list}>
          {bookedAppointments.map(app => (
            <li key={app.id} className={styles.item}>
              <div className={styles.info}>
                <div className={styles.doctor}>{app.doctor?.name ?? 'Unknown Doctor'}</div>
                <div className={styles.details}>{app.mode} • {app.date} • {app.time}</div>
              </div>
              <div>
                <div className={styles.fee}>₹{app.fee}</div>
                <button className={styles.cancel} onClick={() => removeBookedAppointment(app.id)}>Cancel</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.empty}>No booked appointments yet.</p>
      )}
    </div>
    </>
  )
}

export default BookedAppointments