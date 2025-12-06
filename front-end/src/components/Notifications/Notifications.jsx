import React, { useContext } from 'react'
import styles from './Notifications.module.css'
import { NotificationContext } from '../../context/NotificationContext'

const Notifications = () => {
  const { notifications, removeNotification } = useContext(NotificationContext)

  if (!notifications || notifications.length === 0) return null

  return (
    <div className={styles.container} aria-live="polite" aria-atomic="true">
      {notifications.map((n) => (
        <div key={n.id} className={`${styles.note} ${styles[n.type]}`}>
          <div className={styles.message}>{n.message}</div>
          <button className={styles.close} onClick={() => removeNotification(n.id)} aria-label="Dismiss">×</button>
        </div>
      ))}
    </div>
  )
}

export default Notifications
