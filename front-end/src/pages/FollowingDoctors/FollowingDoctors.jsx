import Navbar from '../../components/Navbar/Navbar'
import { useContext } from 'react'
<<<<<<< HEAD
import {  useNavigate} from 'react-router-dom'
=======
import { useNavigate } from 'react-router-dom'
>>>>>>> 758c11c5f4987141ddd57349a95138c9e5c4b3f3
import { StorageContext } from '../../context/StorageContext'
import styles from './FollowingDoctors.module.css'


const FollowingDoctors = () => {
  const { followingDoctors, unfollowDoctor } = useContext(StorageContext)
  const navigate = useNavigate()
<<<<<<< HEAD

=======
>>>>>>> 758c11c5f4987141ddd57349a95138c9e5c4b3f3

  return (
    <>
    <Navbar />
    <div className={styles.container}>
      
      <div className={styles.inner}>
        <h1 className={styles.title}>Following Doctors</h1>

        {followingDoctors && followingDoctors.length > 0 ? (
          <ul className={styles.list}>
            {followingDoctors.map((doc) => (
<<<<<<< HEAD
              <li key={doc.id} className={styles.item} >
              
                <div className={styles.info} style={{cursor: 'pointer'}} onClick={() => navigate(`/doctors/${doc.id}`)}>
=======
              <li key={doc.id} className={styles.item} onClick={()=>navigate("/doctors/{id}".replace("{id}",doc.id))}>
                <div className={styles.info}>
>>>>>>> 758c11c5f4987141ddd57349a95138c9e5c4b3f3
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
    </>
  )
}

export default FollowingDoctors