
// 1. Import the CSS Module
import styles from './Home.module.css';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// Import your logo image
// import AmrutamLogo from './logo.png'; // Make sure the path is correct

const Home = () => {
  const navigate = useNavigate();

  const handleFindDoctorClick = () => {
    navigate('/doctors');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // 2. Use the imported styles object for class names
    <div className={styles.landingPage}>
      <Navbar />

      {/* 2. Hero Section */}
      <header className={styles.heroSection}>
        <h1>Find the Right Specialist. Your Path to Better Health Starts Here.</h1>
        <p>Amrutam connects you with a network of verified, top-rated doctors and specialists. Search, compare, and book your appointment with confidence.</p>
        <button className={styles.btnPrimary} onClick={handleFindDoctorClick}>Find a Doctor</button>
      </header>

      {/* 3. "How It Works" Section */}
      <section id="how-it-works" className={styles.howItWorksSection}>
        <h2>Finding Care in 3 Easy Steps</h2>
        <div className={styles.stepsContainer}>
          <div className={styles.stepCard}>
            <div className={styles.stepIcon}>🔍</div>
            <h3>Search</h3>
            <p>Filter by specialty, location, insurance, and patient reviews.</p>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepIcon}>📋</div>
            <h3>Compare</h3>
            <p>Browse detailed profiles, read verified reviews, and check qualifications.</p>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepIcon}>✅</div>
            <h3>Book</h3>
            <p>See real-time availability and book your appointment instantly.</p>
          </div>
        </div>
      </section>

      {/* 4. Top Specialties Section */}
      <section id="specialties" className={styles.specialtiesSection}>
        <h2>Search by Top Specialties</h2>
        <div className={styles.specialtyGrid}>
          <div className={styles.specialtyCard}>Dermatologist (Skin)</div>
          <div className={styles.specialtyCard}>Cardiologist (Heart)</div>
          <div className={styles.specialtyCard}>Pediatrician (Child)</div>
          <div className={styles.specialtyCard}>Orthopedist (Bones)</div>
          <div className={styles.specialtyCard}>Gynecologist</div>
          <div className={styles.specialtyCard}>Neurologist (Brain)</div>
          <div className={styles.specialtyCard}>Dentist</div>
          <div className={styles.specialtyCard}>Psychiatrist</div>
        </div>
        <a href="#all-specialties" className={styles.viewAllLink}>View All Specialties →</a>
      </section>

      {/* 5. Features & Benefits Section */}
      <section id="features" className={styles.featuresSection}>
        <h2>Health. Simplified.</h2>
        <div className={styles.featuresContainer}>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>🛡️</div>
            <h3>Verified Specialists</h3>
            <p>Every doctor is board-certified and hand-verified by our team.</p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>⭐</div>
            <h3>Real Patient Reviews</h3>
            <p>Make informed decisions with transparent, honest reviews.</p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>🕒</div>
            <h3>24/7 Online Booking</h3>
            <p>Find appointments that fit your schedule and book instantly.</p>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section id="testimonials" className={styles.testimonialsSection}>
        <h2>What Our Patients Say</h2>
        <div className={styles.testimonialContainer}>
          <div className={styles.testimonialCard}>
            <p>"Amrutam made it so easy to find a neurologist. I read the reviews and booked an appointment for the next day. Seamless process."</p>
            <span>- Priya S., Mumbai</span>
          </div>
          <div className={styles.testimonialCard}>
            <p>"I needed a specialist for my father's heart condition. The profiles were detailed, and I found a top-rated cardiologist. Highly recommend!"</p>
            <span>- Rohan K., Delhi</span>
          </div>
        </div>
      </section>

      {/* 7. Final Call-to-Action (CTA) Section */}
      <section className={styles.ctaSection}>
        <h2>Ready to Take Control of Your Health?</h2>
        <p>Join millions of patients finding the right care on Amrutam. Find your doctor today.</p>
        {/* Combine multiple classes by joining the strings */}
        <button className={`${styles.btnPrimary} ${styles.ctaBtn}`} onClick={handleFindDoctorClick}>Find a Doctor Now</button>
      </section>

      {/* 8. Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerColumn}>
            <h3>AMRUTAM</h3>
            <a href="#about">About Us</a>
            <a href="#blog">Blog</a>
            <a href="#careers">Careers</a>
          </div>
          <div className={styles.footerColumn}>
            <h3>For Patients</h3>
            <a href="#find">Find a Doctor</a>
            <a href="#specialties">Search by Specialty</a>
            <a href="#help">Help Center</a>
            <a href="#faq">FAQs</a>
          </div>
          <div className={styles.footerColumn}>
            <h3>For Doctors</h3>
            <a href="#join">Join Our Network</a>
            <a href="#login">Doctor Login</a>
            <a href="#partners">Partnerships</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2025 Amrutam. All rights reserved.</p>
          <div className={styles.footerLegal}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;