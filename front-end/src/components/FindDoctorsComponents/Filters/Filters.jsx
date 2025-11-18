import styles from './Filters.module.css'

const Filters = ({ filters, onFilterChange }) => {
  return (
    <div className={styles.filters}>
      <select className={styles.select} name="expertise" value={filters.expertise} onChange={onFilterChange}>
        <option value="All">All Specialties</option>
        <option value="Cardiologist">Cardiologist</option>
        <option value="Dermatologist">Dermatologist</option>
        <option value="Neurologist">Neurologist</option>
        <option value="Pediatrician">Pediatrician</option>
        <option value="Psychiatrist">Psychiatrist</option>
      </select>

      <select className={styles.select} name="gender" value={filters.gender} onChange={onFilterChange}>
        <option value="All">All Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <select className={styles.select} name="fees" value={filters.fees} onChange={onFilterChange}>
        <option value="All">All Fees</option>
        <option value="0-500">₹0 - ₹500</option>
        <option value="501-1000">₹501 - ₹1000</option>
        <option value="1001-2000">₹1001 - ₹2000</option>
        <option value="2001+">₹2001+</option>
      </select>

      <select className={styles.select} name="language" value={filters.language} onChange={onFilterChange}>
        <option value="All">All Languages</option>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Spanish">Spanish</option>
        <option value="French">French</option>
      </select>
    </div>
  )
}

export default Filters