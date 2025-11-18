
import styles from './DoctorCard.module.css'
import { useNavigate } from 'react-router-dom'

const DoctorCard = ({ doctor, className }) => {
  const rootClass = className ? `${styles.card} ${className}` : styles.card
  const navigate = useNavigate()

  const handleViewProfile = () => {
    navigate(`/doctors/${doctor.id}`)
  }

  return (
    <section className={`${rootClass} ${styles.rootContainer}`} aria-label={`Doctor card for ${doctor.name}`}>
      <header className={styles.imageContainer}>
        <img
          className={styles.avatar}
          src={doctor.image}
          alt={`Photo of Dr. ${doctor.name}`}
          loading="lazy"
        />
        <span className={styles.rating} aria-label={`Rating: ${doctor.rating} stars`}>
          {'⭐'}{doctor.rating}
        </span>
      </header>

      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.name}>{doctor.name}</h2>
          <p className={styles.specialty}>{doctor.specialization}</p>
        </div>

        <ul className={styles.meta}>
          <li className={styles.metaItem} aria-label="Experience">
           📈 {doctor.workExperience && doctor.workExperience.totalExperience}
          </li>
          <li className={styles.metaItem} aria-label="Languages Spoken">
            🗣️{doctor.about && doctor.about.languagesSpoken && doctor.about.languagesSpoken.join(', ')}
          </li>
          <li className={styles.metaItem} aria-label="Location">
            📍{doctor.location}
          </li>
        </ul>

        <div className={styles.fee} aria-label="Consultation Fee">
          Consultation Fee: {'₹'}{doctor.appointment && doctor.appointment.fee}
        </div>

        <footer className={styles.actions}>
          <button className={styles.bookButton} onClick={handleViewProfile} aria-label={`Book appointment with Dr. ${doctor.name}`}>Book Appointment</button>
          <button className={styles.viewProfileButton} onClick={handleViewProfile} aria-label={`View profile of Dr. ${doctor.name}`}>View Profile</button>
        </footer>
      </div>
    </section>
  )
}

export default DoctorCard
