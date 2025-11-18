

import styles from './ConcernsTreat.module.css'

const ConcernsTreat = ({ concerns = [] }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Concerns Treated</h2>
      </div>

      <div className={styles.ConcernsTreat} aria-label="Doctor concerns treated">
        <div className={styles.grid}>
          {concerns.map((label, index) => (
            <article key={index} className={styles.card}>
              <span className={styles.cardLabel}>{label}</span>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ConcernsTreat
