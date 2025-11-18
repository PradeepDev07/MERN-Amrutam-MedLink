import React from 'react';
// Import the CSS Module file
import styles from './About.module.css';
import Navbar from '../../components/Navbar/Navbar';
import teamImage from "../../assets/logo.png";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const AboutUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.aboutContainer}>
      <Navbar />
      {/* 1. Hero Section */}
      <header className={styles.heroSection}>
        <h1>Meet Amrutam</h1>
        <p className={styles.subheading}>
          Our driving mission is to bring clarity, confidence, and 
          compassion to your healthcare journey.
        </p>
      </header>

      {/* 2. The "CAUSE" (The Problem) */}
      <section className={styles.contentSection}>
        <h2>The 'Why': A Maze of Frustration</h2>
        <p>
          Finding the right doctor shouldn't be a gamble. Yet, for too long, 
          patients have navigated a healthcare maze filled with out-of-date 
          directories, unverified reviews, and endless phone tag. This process 
          is more than just inconvenient; it’s stressful, especially when 
          you or a loved one needs care.
        </p>
        <p>
          This feeling of vulnerability and uncertainty is the problem we 
          exist to solve. We believe that at the heart of good health is 
          access to trusted information and the right professionals.
        </p>
      </section>

      {/* 3. The "WHAT" & "HOW" (Our Solution) */}
      <section className={styles.solutionSection}>
        <div className={styles.solutionContent}>
          <h2>The 'What': A Curated Platform for Care</h2>
          <p>
            Amrutam is not just another list of doctors. We are a dedicated 
            platform built on a foundation of trust. We do the hard work of 
            verifying every single specialist, so you can focus on what 
            matters most—your health.
          </p>

          <h3>How We Do It: Your Path to Confidence</h3>
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <h4>1. We Verify</h4>
              <p>
                Our team rigorously verifies the credentials, certifications, 
                and licenses of every doctor on Amrutam.
              </p>
            </div>
            <div className={styles.stepCard}>
              <h4>2. We Curate</h4>
              <p>
                We provide detailed profiles, real patient reviews, and 
                clear specialty information so you can compare with clarity.
              </p>
            </div>
            <div className={styles.stepCard}>
              <h4>3. We Connect</h4>
              <p>
                Our seamless booking system connects you directly to a 
                doctor's real-time availability. No more waiting on hold.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Team & Values */}
      <section className={styles.teamSection}>
        <div className={styles.teamContent}>
          <div className={styles.teamText}>
            <h2>Our Team & Values</h2>
            <p>
              We are a passionate team of technologists, healthcare advocates, 
              and patient support specialists. We’re united by our shared 
              values and the goal of making healthcare simpler and more 
              human.
            </p>
            <ul className={styles.valuesList}>
              <li><strong>Trust:</strong> It's our foundation. We earn it through transparency and verification.</li>
              <li><strong>Empathy:</strong> We are patients, too. We build with compassion.</li>
              <li><strong>Integrity:</strong> We provide honest, unbiased information.</li>
            </ul>
          </div>
          <div className={styles.teamImage}>
            <img src={teamImage} alt="Amrutam Team" className={styles.imgClass} />
          </div>
        </div>
      </section>

      {/* 5. Help & Support Section */}
      <section className={styles.helpSection}>
        <h2>Here to Help</h2>
        <p className={styles.helpIntro}>
          We're committed to making your experience seamless. 
          Here are answers to some common questions.
        </p>
        
        <div className={styles.helpContent}>
          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary>How are doctors on Amrutam verified?</summary>
              <p>
                Our team performs a multi-step verification process, 
                cross-referencing national medical board databases, 
                certifications, and state licenses.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary>Is booking an appointment on Amrutam free?</summary>
              <p>
                Yes, our service is 100% free for patients. You only pay 
                for your medical care as you normally would, based on 
                your insurance or the doctor's fees.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary>What if I need to cancel or reschedule?</summary>
              <p>
                You can easily manage your appointments through your 
                Amrutam account. We just ask that you respect the 
                doctor's cancellation policy, which is listed on their profile.
              </p>
            </details>
          </div>
          <div className={styles.supportBlock}>
            
            <h3>Still have questions?</h3>
            <p>
              Our patient support team is standing by to assist you.
            </p>
            <button className={styles.contactButton}>Contact Support</button>
          </div>
        </div>
      </section>

      {/* 6. Final CTA Section */}
      <section className={styles.ctaSection}>
        <h2>Ready to experience a better way to find care?</h2>
        <button className={styles.ctaButton} onClick={() => navigate('/doctors')}>Find Your Doctor</button>
      </section>
      
    </div>
    
  );
};

export default AboutUs;