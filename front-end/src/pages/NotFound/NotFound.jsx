import React from 'react'
import styles from './NotFound.module.css'
import { useNavigate } from 'react-router'
function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={styles['not-found']}>
      <img src="src/assets/notfound.png" alt="Not Found" />
      <div className={styles['buttons-container']}>
     <button onClick={() => navigate('/')}>Go to Home</button>
      <button onClick={() => window.location.reload()}>reload</button>
      </div>
 
    </div>
      
  )
}

export default NotFound