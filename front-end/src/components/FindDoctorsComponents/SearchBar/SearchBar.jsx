import { useEffect, useState } from 'react'
import styles from './SearchBar.module.css'
import { FaLocationDot } from 'react-icons/fa6'

const LOCATIONS = {
  MUMBAI: 'Mumbai',
  BENGALURU: 'Bengaluru',
  CHENNAI: 'Chennai',
  KOLKATA: 'Kolkata',
  DELHI: 'Delhi',
  JAIPUR: 'Jaipur',
  VARANASI: 'Varanasi',
  HYDERABAD: 'Hyderabad',
}

const SearchBar = ({ onSearch, defaultLocation = '', defaultSearchTerm = '' }) => {
  const [location, setLocation] = useState(defaultLocation)
  const [searchTerm, setSearchTerm] = useState(defaultSearchTerm)

  useEffect(() => {
    setLocation(defaultLocation)
  }, [defaultLocation])

  useEffect(() => {
    setSearchTerm(defaultSearchTerm)
  }, [defaultSearchTerm])

  useEffect(() => {
    console.log('[SearchBar] Current input state', { searchTerm, location })
  }, [searchTerm, location])

  const handleSubmit = () => {
    const payload = {
      searchTerm: searchTerm.trim(),
      location: location.trim(),
    }
    console.log('[SearchBar] Trigger search', payload)
    onSearch(payload)
  }

  return (
    <div className={styles.searchBar}>
      <div className={styles.locationContainer}>
        <FaLocationDot style={{ color: 'var(--text-secondary)' }} aria-hidden="true" />
        <select
          className={styles.location}
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          aria-label="Select location"
        >
          <option value="">Select Location</option>
          {Object.values(LOCATIONS).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
  <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search for doctors, clinics..."
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSubmit()
          }
        }}
        aria-label="Search term"
      />
      <button
        className={styles.searchBtn}
        onClick={handleSubmit}
        type="button"
        aria-label="Search"
      >
        🔎
      </button>
      </div>
    </div>
  )
}

export default SearchBar