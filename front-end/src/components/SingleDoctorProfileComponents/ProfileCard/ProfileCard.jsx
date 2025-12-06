import { FaStar } from 'react-icons/fa'
import styles from './ProfileCard.module.css'

import { VscVerifiedFilled } from "react-icons/vsc";
import { useContext } from 'react'
import { StorageContext } from '../../../context/StorageContext'

const buildStars = (rating) => {
  const filledCount = Math.round(Number(rating) || 0)
  return Array.from({ length: 5 }, (_, index) => index < filledCount)
}

const ProfileCard = ({
  id,
  doctorName,
  doctorImage,
  doctorRating,
  doctorSpecialization,
  doctorLocation,
  followers,
  following,
  posts,
  appointment,
}) => {
  const { followingDoctors, followDoctor, unfollowDoctor } = useContext(StorageContext)

  const isFollowing = Boolean(followingDoctors.find(d => d && d.id === id))

  const handleToggleFollow = () => {
    if (!id) return
    if (isFollowing) {
      unfollowDoctor(id)
    } else {
      // provide minimal doctor object to context
      followDoctor({ id, name: doctorName, image: doctorImage, specialization: doctorSpecialization, location: doctorLocation })
    }
  }
  const formattedRating = Number(doctorRating) ? Number(doctorRating).toFixed(1) : '—'
  const appointmentLabel =
    appointment?.actionButton || appointment?.buttonLabel || appointment || 'Book an Appointment'
  const stars = buildStars(doctorRating)

  return (
    <div className={styles.profileCard} aria-label={`Profile header for Dr. ${doctorName}`}>
      <div className={styles["profile-card-bg"]}> </div>
      <div className={styles["profile-card-container"]}>

      <div className={styles["profile-image-container"]}>
  <img src={doctorImage} alt={doctorName} className={styles["profile-image"]} loading='lazy'/>
      </div>
   
     <div className={styles["profile-details"]}>
      <h3 className={styles["doctor-name"]}>{doctorName}</h3> 
      <h3 className={styles["doctor-specialization"]}>{doctorSpecialization}</h3>
      <p className={styles["doctor-location"]}>{doctorLocation}</p>
      <div className={styles["star-rating"]}>
        <h3 className={styles["doctor-rating"]}>{doctorRating}</h3>
        <div className={styles["star"]}>
         {
          [...Array(5)].map((_,index)=>{
            if(Math.round(doctorRating)>index){
          return <FaStar key={index} className={styles.ratingStarFilled}/> 
            }
          })
         }
        </div>
        </div>
        </div>
        <div className={styles["followers-bookAppointment"]}> 
        <div className={styles["follower-content"]}>
          <div >
            <h4>Followes</h4>
            <p>{followers?followers:"-"}</p>
          </div>
          <div >
            <h4>Following</h4>
            <p>{following?following:"-"}</p>
          </div>
          <div >
            <h4>Posts</h4>
            <p>{posts?posts:"-"}</p>
          </div>
        </div>

        <div className={styles["action-buttons"]}>
          <button className={styles["follow-button"]} data-content={isFollowing ? "unfollow" : "follow"} onClick={handleToggleFollow}>
            {isFollowing ? 'unfollow' : 'follow'}
          </button>
          <button className={styles["appointment-button"]}><a href="#BookAppointment" className={styles["appointment-link"]}>Book an Appointment</a></button>
        </div>
        </div>

     
    
</div>
    </div>
  )
}

export default ProfileCard






{/* <section className={styles.profileCard} aria-label={`Profile header for Dr. ${doctorName}`}>
      <div className={styles.circleTop} aria-hidden="true" />
      <div className={styles.circleBottom} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.primaryInfo}>
          <img
            src={doctorImage}
            alt={`Photo of Dr. ${doctorName}`}
            className={styles.profileImage}
            loading="lazy"
          />

          <div className={styles.details}>
            <div className={styles.nameRow}>
              <h1 className={styles.doctorName}>{doctorName}</h1>
            <VscVerifiedFilled className={styles.verified} aria-label="Verified doctor" /> 
            </div>
            <p className={styles.specialization}>{doctorSpecialization}</p>
            <div className={styles.ratingRow} aria-label={`Rating ${formattedRating} out of 5`}>
              <span className={styles.ratingScore}>{formattedRating}</span>
              {stars.map((isFilled, index) => (
                <FaStar
                  key={index}
                  className={isFilled ? styles.ratingStarFilled : styles.ratingStarEmpty}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className={styles.location}>{doctorLocation}</p>
          </div>
        </div>

        <div className={styles.statsAndAction}>
          <dl className={styles.stats}>
            <div className={styles.statItem}>
              <dt>Followers</dt>
              <dd>{followers ?? '—'}</dd>
            </div>
            <div className={styles.statItem}>
              <dt>Following</dt>
              <dd>{following ?? '—'}</dd>
            </div>
            <div className={styles.statItem}>
              <dt>Posts</dt>
              <dd>{posts ?? '—'}</dd>
            </div>
          </dl>

          <button className={styles.appointmentButton} type="button">
            {appointmentLabel}
          </button>
        </div>
      </div>
    </section> */}