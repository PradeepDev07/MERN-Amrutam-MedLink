

import styles from './WorkExperience.module.css'
import Workplace from '../../../assets/workplace.png'
const WorkExperience = ({ workExperience }) => {
    const {totalExperience, history} = workExperience;
    
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Work Experience</h2>
      </div>

      <div className={styles.WorkExperience} aria-label="Doctor work experience">
      
        <div className={styles.grid}>
              <p className={styles.totalExperience}>Total Experience: {totalExperience}</p>
              <hr/>
          {history.map((experience, index) => (
            <div key={index} className={styles.card}>
                <div className={styles.reviewContent}>
                <div className={styles.reviewHeader}>
                    <img src={Workplace} alt={experience.role} className={styles.reviewerImage}/>

                    <div className={styles.reviewerDetails}>
                      <h1>{experience.organization}</h1>
                      <p>{experience.role}</p>
                    </div>
                   
                </div> 
              <p className={styles.reviewDate}>{experience.period}</p>
             </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkExperience

//     workExperience: {
//       totalExperience: "11+ years",
//       history: [
//         { organization: "Fortis Hospital, Bangalore", role: "Consultant Nephrologist", period: "2015–Present" },
//         { organization: "Manipal Hospital", role: "Resident Doctor", period: "2010–2015" },
//       ],
//     },