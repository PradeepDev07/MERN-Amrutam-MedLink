
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import doctorsLists from '../../doctorsLists'
import Navbar from '../../components/Navbar/Navbar'
import style from './SingleDoctorProfile.module.css'
import ProfileCard from '../../components/SingleDoctorProfileComponents/ProfileCard/ProfileCard'
import ProfileAbout from '../../components/SingleDoctorProfileComponents/ProfileAbout/ProfileAbout'
import Specialize from '../../components/SingleDoctorProfileComponents/Specialize/Specialize'
import ConcernsTreat from '../../components/SingleDoctorProfileComponents/ConcernsTreat/ConcernsTreat'
import WorkExperience from '../../components/SingleDoctorProfileComponents/WorkExperience/WorkExperience'
import FeaturedReviews from '../../components/SingleDoctorProfileComponents/FeaturedReviews/FeaturedReviews'
import Appointment from '../../components/SingleDoctorProfileComponents/Appointment/Appointment'

const doctorDataLoader= {
  init:"INIT",
  loading:"LOADING",
  success:"SUCCESS",
  error:"ERROR"
}

const SingleDoctorProfile = () => {
    const { Id } = useParams()
    const [doctor, setDoctor] = useState(null)
    const [status, setStatus] = useState(doctorDataLoader.init)

    useEffect(() => {
         window.scrollTo(0, 0)
        const doctorId = Number(Id)
        console.log('[SingleDoctorProfile] Looking up doctor', { doctorId })

        if (Number.isNaN(doctorId)) {
            console.error('[SingleDoctorProfile] Invalid doctor id in route params', doctorId)
            setStatus(doctorDataLoader.error)
            return
        }

        setStatus(doctorDataLoader.loading)
        const foundDoctor = doctorsLists.find((doc) => Number(doc.id) === doctorId)

        if (foundDoctor) {
            setDoctor(foundDoctor)
            setStatus(doctorDataLoader.success)
        } else {
            console.error('[SingleDoctorProfile] Doctor not found', doctorId)
            setStatus(doctorDataLoader.error)
        }
    }, [Id])

    const handleSuccess = () => {

        const profileCardData = {
            id: doctor.id,
            doctorName: doctor.name,
            doctorImage: doctor.image,
            doctorRating: doctor.rating,
            doctorSpecialization: doctor.specialization,
            doctorLocation: doctor.location,
            followers: doctor.followers,
            following: doctor.following,
            posts: doctor.posts,
            appointment: doctor.appointment,
        }

      console.log('[SingleDoctorProfile] Rendering profile for', profileCardData)

        return (
        <div className={style.SingleDoctorProfile}>
        <div className={style.profileContainer}>
            <ProfileCard {...profileCardData} />
         <div className={style.aboutContainer}>
            <div className={style.aboutInner}>
            <ProfileAbout about={doctor.about} />
            <Specialize specializations={doctor.specializations} />
            <ConcernsTreat concerns={doctor.concernsTreated} />
            <WorkExperience workExperience={doctor.workExperience} />
            <FeaturedReviews featuredReviews={doctor.featuredReviews} />
            </div>
            <div className={style.aboutOuter}>
                            <Appointment appointment={doctor.appointment} doctor={{ id: doctor.id, name: doctor.name, image: doctor.image }} />
            </div>
        </div>
        </div>
        </div>)
    }
    const renderSwitch = () => {
    switch (status) {
        case doctorDataLoader.init:
        case doctorDataLoader.loading:
            return <div className={style.loading}>Loading doctor profile...</div>
        case doctorDataLoader.error:
            return <div className={style.error}>Error loading doctor profile. Please try again later.</div>
        case doctorDataLoader.success:
            return handleSuccess()
        default:
            return null
    }
}

    return <>
    <Navbar />
    {renderSwitch()}
    </>
}

export default SingleDoctorProfile

// {
//     id: 30,
//     name: "Dr. Priya Desai",
//     specialization: "Nephrologist",
//     rating: 4.8,
//     followers: 910,
//     following: "19K",
//     posts: 330,
//     appointmentButton: "Book an Appointment",
//     about: {
//       title: "A Little About Me",
//       description:
//         "Hi, I'm Dr. Priya Desai, Nephrologist at Fortis Hospital, Bangalore. I specialize in kidney health and dialysis management.",
//       languagesSpoken: ["English", "Hindi", "Kannada"],
//       socialLinks: ["Instagram", "LinkedIn"],
//     },
//     appointment: {
//       fee: 1500,
//       sessionModes: [
//         { type: "In-Clinic", duration: "50 Mins", selected: true },
//         { type: "Video", duration: "35 Mins", selected: false },
//         { type: "Chat", duration: "15 Mins", selected: false },
//       ],
//       availableDates: [
//         { date: "Tue, 11 Oct", slots: 4 },
//         { date: "Thu, 13 Oct", slots: 3 },
//         { date: "Fri, 14 Oct", slots: 5 },
//       ],
//       availableTimeSlots: {
//         morning: ["09:30 AM", "10:15 AM", "11:00 AM"],
//         evening: ["04:30 PM", "05:15 PM", "06:00 PM"],
//         selectedTime: "10:15 AM",
//       },
//       actionButton: "Make An Appointment",
//     },
//     specializations: ["Kidney Disorders", "Dialysis", "Hypertension"],
//     concernsTreated: ["Kidney Stones", "Chronic Kidney Disease", "Hypertension"],
//     workExperience: {
//       totalExperience: "11+ years",
//       history: [
//         { organization: "Fortis Hospital, Bangalore", role: "Consultant Nephrologist", period: "2015–Present" },
//         { organization: "Manipal Hospital", role: "Resident Doctor", period: "2010–2015" },
//       ],
//     },
//     featuredReviews: {
//       totalReviews: 210,
//       reviews: [
//         { reviewer: "Ramesh Kulkarni", consultedFor: "Kidney Stone", date: "02 June 2023", rating: 5, review: "Very knowledgeable and caring doctor." },
//         { reviewer: "Swati Iyer", consultedFor: "CKD", date: "12 May 2023", rating: 4, review: "Helpful guidance and treatment plan." },
//       ],
//     },
//     location: "Jaipur",
//   }