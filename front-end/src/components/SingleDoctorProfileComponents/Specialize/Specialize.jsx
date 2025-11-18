import styles from './Specialize.module.css'
import SkinCare from '../../../assets/Skin Care.png'
const Specialize = ({ specializations = [] }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Specializations</h2>
      </div>

      <section className={styles.specialize} aria-label="Doctor specializations">
        <div className={styles.grid}>
          {specializations.map((label, index) => (
            <article key={index} className={styles.card}>
              <img
                src={SkinCare}
                alt={label}
                className={styles.icon}
                aria-hidden="true"
              />
              <span className={styles.cardLabel}>{label}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Specialize
