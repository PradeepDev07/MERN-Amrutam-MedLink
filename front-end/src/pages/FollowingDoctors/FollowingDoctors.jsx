import Navbar from '../../components/Navbar/Navbar'
import { useContext } from 'react'
import { StorageContext } from '../../context/StorageContext'
import styles from './FollowingDoctors.module.css'

const FollowingDoctors = () => {
  const { followingDoctors, unfollowDoctor } = useContext(StorageContext)

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.inner}>
        <h1 className={styles.title}>Following Doctors</h1>

        {followingDoctors && followingDoctors.length > 0 ? (
          <ul className={styles.list}>
            {followingDoctors.map((doc) => (
              <li key={doc.id} className={styles.item}>
                <div className={styles.info}>
                  {doc.image && <img src={doc.image} alt={doc.name} className={styles.avatar} />}
                  <div>
                    <div className={styles.name}>{doc.name}</div>
                    <div className={styles.meta}>{doc.specialization} — {doc.location}</div>
                  </div>
                </div>
                <div>
                  <button className={styles.unfollow} onClick={() => unfollowDoctor(doc.id)}>Unfollow</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.empty}>You are not following any doctors yet.</p>
        )}
      </div>
    </div>
  )
}

export default FollowingDoctors