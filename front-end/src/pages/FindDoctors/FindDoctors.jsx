import styles from './FindDoctors.module.css'
import Navbar from '../../components/Navbar/Navbar'
import doctorsLists from '../../doctorsLists'
import { useState, useEffect } from 'react'
import DoctorCard from '../../components/FindDoctorsComponents/DoctorCard/DoctorCard'
import SearchBar from '../../components/FindDoctorsComponents/SearchBar/SearchBar'
import Filters from '../../components/FindDoctorsComponents/Filters/Filters'
import ShowFilter from '../../components/FindDoctorsComponents/ShowFilter/ShowFilter'


const allDoctors = doctorsLists

const FindDoctors = () => {
  const [doctors, setDoctors] = useState(allDoctors)
  const [filters, setFilters] = useState({
    expertise: 'All',
    gender: 'All',
    fees: 'All',
    language: 'All',
    location: 'All',
  })
  const [searchBar, setSearchBar] = useState({ searchTerm: '', location: '' })


  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }))
  }

  const handleSearchBar = ({ searchTerm, location }) => {
    console.log('[FindDoctors] Search payload received', { searchTerm, location })
    setSearchBar({ searchTerm, location })
  }

  const handleClearFilters = () => {
    setFilters({
      expertise: 'All',
      gender: 'All',
      fees: 'All',
      language: 'All',
      location: 'All',
    })
    setSearchBar({ searchTerm: '', location: '' })
    console.log('[FindDoctors] Filters cleared')
  }

  const handleDeleteFilter = (filterName) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: 'All',
    }))
    if (filterName === 'location') {
      setSearchBar((prev) => ({ ...prev, location: '' }))
    }
  }

  // Apply filters whenever they change
  useEffect(() => {
    window.scrollTo(0, 0)
    console.log('[FindDoctors] Applying filters', { filters, searchBar })
    let filtered = [...allDoctors]

    const expertiseFilter = filters.expertise.toLowerCase()
    if (filters.expertise !== 'All') {
      filtered = filtered.filter(
        (doc) => doc.specialization && doc.specialization.toLowerCase() === expertiseFilter
      )
      console.log('[FindDoctors] After expertise filter', filtered.length)
    }

    // gender may not exist on all items; filter only when present
    if (filters.gender !== 'All') {
      const genderFilter = filters.gender.toLowerCase()
      filtered = filtered.filter((doc) => doc.gender && doc.gender.toLowerCase() === genderFilter)
      console.log('[FindDoctors] After gender filter', filtered.length)
    }

    // language stored under about.languagesSpoken
    if (filters.language !== 'All') {
      filtered = filtered.filter(
        (doc) =>
          doc.about &&
          Array.isArray(doc.about.languagesSpoken) &&
          doc.about.languagesSpoken.some((lang) => lang.toLowerCase() === filters.language.toLowerCase())
      )
      console.log('[FindDoctors] After language filter', filtered.length)
    }

    // fees use appointment.fee; support ranges like "0-500" and "2001+"
    if (filters.fees !== 'All') {
      const parseFeeRange = (range) => {
        if (range.includes('+')) {
          const min = parseInt(range.replace('+', ''), 10)
          return [min, Infinity]
        }
        const [min, max] = range.split('-').map((value) => parseInt(value, 10))
        return [min, max]
      }

      const [minFee, maxFee] = parseFeeRange(filters.fees)
      filtered = filtered.filter((doc) => {
        const fee = Number(doc.appointment?.fee)
        if (Number.isNaN(fee)) {
          return false
        }
        return fee >= minFee && fee <= maxFee
      })
      console.log('[FindDoctors] After fee filter', { count: filtered.length, minFee, maxFee })
    }

    // search by name or specialization (comma separated terms)
    if (searchBar.searchTerm && searchBar.searchTerm.trim() !== '') {
      const searchTerms = searchBar.searchTerm
        .split(',')
        .map((term) => term.trim().toLowerCase())
        .filter(Boolean)

      filtered = filtered.filter((doc) => {
        const name = doc.name ? doc.name.toLowerCase() : ''
        const specialization = doc.specialization ? doc.specialization.toLowerCase() : ''
        const languages = Array.isArray(doc.about?.languagesSpoken)
          ? doc.about.languagesSpoken.map((lang) => lang.toLowerCase())
          : []
        return searchTerms.some((term) => {
          return (
            name.includes(term) ||
            specialization.includes(term) ||
            languages.some((lang) => lang.includes(term))
          )
        })
      })
      console.log('[FindDoctors] After search term filter', { count: filtered.length, searchTerms })
    }

    const activeLocation =
      filters.location !== 'All'
        ? filters.location.trim().toLowerCase()
        : searchBar.location.trim().toLowerCase()

    if (activeLocation) {
      filtered = filtered.filter(
        (doc) => doc.location && doc.location.toLowerCase().includes(activeLocation)
      )
      console.log('[FindDoctors] After location filter', { count: filtered.length, activeLocation })
    }

    console.log('[FindDoctors] Final filtered doctors', filtered.length)
    setDoctors(filtered)
  }, [filters, searchBar])
  

  return (
    <>
     <Navbar />
   
    <div className={styles.FindDoctors}>
     
      <div className={styles.content}>
      <h1>Find expert Doctors for an In-clinic session here</h1>
      {/* Filter Component */}
      <SearchBar
        onSearch={handleSearchBar}
        defaultSearchTerm={searchBar.searchTerm}
        defaultLocation={searchBar.location}
      />
      
      </div>
      <div className={styles.filtersSection}>
      <Filters filters={filters} onFilterChange={handleFilterChange} /> {/* import Filter Component */}
      </div>
      <div className={styles.filtersSectionedContainer}> 
       <ShowFilter filters={filters} onDeleteFilter={handleDeleteFilter} onClearFilters={handleClearFilters} />
      </div>
          <div className={styles.doctorsContainer}>
          {
            doctors.length === 0 ? (
              <div className={styles.noDoctors}><p>No doctors found matching the criteria.</p></div>
            ) : (
              <div className={styles.doctorsGrid}>
                {doctors.map((doctor) => (
                  <DoctorCard key={doctor.id} className={styles.card} doctor={doctor} />
                ))}
              </div>
            )}</div>

      </div>


    </>
  )
}

export default FindDoctors
