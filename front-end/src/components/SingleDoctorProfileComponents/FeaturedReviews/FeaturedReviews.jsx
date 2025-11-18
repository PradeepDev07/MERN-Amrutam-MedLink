

import styles from './FeaturedReviews.module.css'
import ReviewerImage from '../../../assets/ReviewerImage.png'
import { FaStar } from 'react-icons/fa'
const FeaturedReviews = ({ featuredReviews }) => {
    
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Featured Reviews</h2>
      </div>

      <div className={styles.FeaturedReviews} aria-label="Doctor featured reviews">
        <div className={styles.grid}>
          {featuredReviews.reviews.map((review, index) => (
            <div key={index} className={styles.card}>
                <div className={styles.reviewContent}>

                
             <div className={styles.reviewHeader}>
                <img src={ReviewerImage} alt={review.reviewer} className={styles.reviewerImage}/>
               
               <div className={styles.reviewerDetails}>
                <h1>{review.reviewer}</h1>
                <p>{review.consultedFor}</p>
                </div> 
             
             </div>
             <p className={styles.reviewDate}>{review.date}</p>
             </div>
             {/* Star Rating */}
                <div className={styles.starRating}>
                {[...Array(5)].map((_,index)=>{
                    if(Math.round(review.rating)>index){
                        return <FaStar key={index} color="#FFD700" />
                  
                    } 
                    return <FaStar key={index} color="#E0E0E0" />
                })}
                </div>
             <p className={styles.reviewText}>{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedReviews


    //   totalReviews: 210,
    //    reviews: [
    //      { reviewer: "Ramesh Kulkarni", consultedFor: "Kidney Stone", date: "02 June 2023", rating: 5, review: "Very knowledgeable and caring doctor." }