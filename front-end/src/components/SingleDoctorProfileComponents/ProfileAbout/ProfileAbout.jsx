import style from './ProfileAbout.module.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";

import { useState } from 'react';
const ProfileAbout = ({ about }) => {
    const [showMore, setShowMore] = useState(false);

    const { title, description, languagesSpoken } = about;

  return (<div className={style.profileContainer}>
    <div className={style.aboutContainer}><h1 >{title}</h1></div>
  <section aria-label="About the Doctor" className={style.profileAbout}>
    

    <span>{showMore ? description : description.substring(0, 100) + '...'}</span>
   <div className={style.showMoreContainer}>
    <hr className={style.divider}/><button className={style.showMore} onClick={() => setShowMore(!showMore)}>{showMore ? 'Show Less' : 'Show More'}</button>
    </div> 
    
    <div className={style.languagesSection}>
    <h3 className={style.languageTitle}>Languages Spoken</h3>
    <div className={style.languageListContainer}>
      <ul className={style.languageList}>
        {languagesSpoken && languagesSpoken.map((language, index) => (
          <li key={index} className={style.languageItem}>{language}</li>
        ))}
      </ul>
    </div>
    </div>

    <div className={style.socialLinksSection}>
        <div className={style.socialLinkItem}>
            <FaFacebookF /> </div>
            <div className={style.socialLinkItem}>
            <FaInstagram/></div>
            <div className={style.socialLinkItem}>
            <FaYoutube/></div>
            <div className={style.socialLinkItem}>
            <CiTwitter />
            </div>
    </div>
  </section></div>
  )
}

export default ProfileAbout