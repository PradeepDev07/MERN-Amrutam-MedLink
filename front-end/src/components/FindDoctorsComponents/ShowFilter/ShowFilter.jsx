import styles from './ShowFilter.module.css'

const ShowFilter = ({ filters, onDeleteFilter, onClearFilters }) => {
  return (
    <div className={styles.container}>
      {Object.entries(filters).map(([key, value]) => (
        value !== 'All' && (
          <div key={key} className={styles.chip}>
            {key}: {value}
            <button className={styles.clearBtn} onClick={() => onDeleteFilter(key)}>×</button>
          </div>
        )
      ))}
 {
        Object.values(filters).every(value => value === 'All') ? (
          <div className={styles.noFilters}></div>
        ) : <button className={styles.clearBtn} onClick={onClearFilters}>Clear All</button>
      }

    </div>
  )
}

export default ShowFilter