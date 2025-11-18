const doctorsLists = [
  {
    id: 1,
    name: "Dr. Sarah Mehta",
    specialization: "Dermatologist",
    rating: 4.7,
    followers: 920,
    following: "21K",
    posts: 320,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "Hello, I am Dr. Sarah Mehta, a Dermatologist at Lotus Skin Clinic, Mumbai. I focus on skincare treatments and advanced dermatological therapy.",
      languagesSpoken: ["English", "Hindi", "Marathi"],
      socialLinks: ["Facebook", "Instagram", "LinkedIn", "Twitter"],
    },
    appointment: {
      fee: 850,
      sessionModes: [
        { type: "In-Clinic", duration: "45 Mins", selected: true },
        { type: "Video", duration: "30 Mins", selected: false },
        { type: "Chat", duration: "10 Mins", selected: false },
      ],
      availableDates: [
        { date: "Mon, 10 Oct", slots: 5 },
        { date: "Tue, 11 Oct", slots: 8 },
        { date: "Wed, 12 Oct", slots: 3 },
      ],
      availableTimeSlots: {
        morning: ["09:00 AM", "09:30 AM", "10:15 AM", "11:00 AM"],
        evening: ["04:00 PM", "04:30 PM", "05:00 PM"],
        selectedTime: "10:15 AM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: [
      "Skin Care",
      "Acne Treatment",
      "Cosmetic Dermatology",
      "Hair Loss",
    ],
    concernsTreated: ["Acne", "Pigmentation", "Hair Fall", "Dark Circles", "Wrinkles"],
    workExperience: {
      totalExperience: "9+ years",
      history: [
        {
          organization: "Lotus Skin Clinic",
          role: "Consultant Dermatologist",
          period: "2018–Present",
        },
        {
          organization: "Apollo Hospitals",
          role: "Junior Doctor",
          period: "2014–2018",
        },
      ],
    },
    featuredReviews: {
      totalReviews: 210,
      reviews: [
        {
          reviewer: "Anjali Verma",
          consultedFor: "Acne",
          date: "12 July 2023",
          rating: 5,
          review:
            "Great experience, acne reduced visibly after treatment!",
        },
        {
          reviewer: "Karan Patel",
          consultedFor: "Hair Loss",
          date: "05 June 2023",
          rating: 4,
          review:
            "Helpful and patient doctor, explained everything clearly.",
        },
      ],
    },
    location: "Mumbai",
  },
  {
    id: 2,
    name: "Dr. Rajesh Iyer",
    specialization: "Cardiologist",
    rating: 4.9,
    followers: 1200,
    following: "30K",
    posts: 400,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "I am Dr. Rajesh Iyer, a senior Cardiologist with 12+ years of experience treating heart diseases and performing interventional procedures.",
      languagesSpoken: ["English", "Tamil", "Hindi"],
      socialLinks: ["Facebook", "Instagram", "YouTube"],
    },
    appointment: {
      fee: 1200,
      sessionModes: [
        { type: "In-Clinic", duration: "45 Mins", selected: true },
        { type: "Video", duration: "30 Mins", selected: false },
        { type: "Chat", duration: "15 Mins", selected: false },
      ],
      availableDates: [
        { date: "Tue, 11 Oct", slots: 6 },
        { date: "Wed, 12 Oct", slots: 4 },
        { date: "Thu, 13 Oct", slots: 7 },
      ],
      availableTimeSlots: {
        morning: ["09:00 AM", "09:30 AM", "10:15 AM"],
        evening: ["04:00 PM", "05:00 PM", "06:00 PM"],
        selectedTime: "05:00 PM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: ["Cardiology", "Heart Surgery", "Blood Pressure Management"],
    concernsTreated: ["Chest Pain", "Hypertension", "Arrhythmia", "Heart Blockage"],
    workExperience: {
      totalExperience: "12+ years",
      history: [
        {
          organization: "Fortis Heart Center",
          role: "Senior Cardiologist",
          period: "2015–Present",
        },
        {
          organization: "Apollo Hospital",
          role: "Resident Doctor",
          period: "2012–2015",
        },
      ],
    },
    featuredReviews: {
      totalReviews: 184,
      reviews: [
        {
          reviewer: "Suresh Nair",
          consultedFor: "Hypertension",
          date: "02 June 2023",
          rating: 5,
          review: "Highly professional and knowledgeable. Truly a lifesaver.",
        },
        {
          reviewer: "Priya Ramesh",
          consultedFor: "Heart Check-up",
          date: "15 May 2023",
          rating: 5,
          review: "Explained procedure clearly with a calm and patient approach.",
        },
      ],
    },
    location: "Bengaluru",
  },
  {
    id: 3,
    name: "Dr. Aditi Sharma",
    specialization: "Pediatrician",
    rating: 4.8,
    followers: 780,
    following: "15K",
    posts: 290,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "Hi, I’m Dr. Aditi Sharma, a Pediatrician with 10 years of experience in child healthcare, immunization, and nutrition counseling.",
      languagesSpoken: ["English", "Hindi", "Punjabi"],
      socialLinks: ["Facebook", "Instagram", "Twitter"],
    },
    appointment: {
      fee: 700,
      sessionModes: [
        { type: "In-Clinic", duration: "30 Mins", selected: false },
        { type: "Video", duration: "20 Mins", selected: true },
        { type: "Chat", duration: "10 Mins", selected: false },
      ],
      availableDates: [
        { date: "Wed, 12 Oct", slots: 10 },
        { date: "Thu, 13 Oct", slots: 8 },
        { date: "Fri, 14 Oct", slots: 6 },
      ],
      availableTimeSlots: {
        morning: ["09:15 AM", "09:45 AM", "10:30 AM"],
        evening: ["04:30 PM", "05:15 PM"],
        selectedTime: "09:45 AM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: ["Child Health", "Vaccination", "Nutrition", "Growth Monitoring"],
    concernsTreated: ["Fever", "Cough", "Allergies", "Child Nutrition"],
    workExperience: {
      totalExperience: "10+ years",
      history: [
        {
          organization: "Rainbow Kids Hospital",
          role: "Consultant Pediatrician",
          period: "2018–Present",
        },
        {
          organization: "City Health Clinic",
          role: "Junior Doctor",
          period: "2013–2018",
        },
      ],
    },
    featuredReviews: {
      totalReviews: 125,
      reviews: [
        {
          reviewer: "Rohit Khanna",
          consultedFor: "Fever",
          date: "01 August 2023",
          rating: 5,
          review:
            "Very kind and attentive doctor. My child recovered quickly.",
        },
        {
          reviewer: "Sneha Tiwari",
          consultedFor: "Vaccination",
          date: "20 July 2023",
          rating: 4,
          review: "Smooth process, friendly interaction with kids.",
        },
      ],
    },
    location: "Chennai",
  },
  {
    id: 4,
    name: "Dr. Vikram Rao",
    specialization: "Orthopedic Surgeon",
    rating: 4.6,
    followers: 680,
    following: "12K",
    posts: 310,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "I am Dr. Vikram Rao, an Orthopedic Surgeon specializing in joint replacement and sports injury rehabilitation with over 11 years of experience.",
      languagesSpoken: ["English", "Hindi", "Kannada"],
      socialLinks: ["Facebook", "LinkedIn", "Twitter"],
    },
    appointment: {
      fee: 950,
      sessionModes: [
        { type: "In-Clinic", duration: "45 Mins", selected: true },
        { type: "Video", duration: "25 Mins", selected: false },
        { type: "Chat", duration: "10 Mins", selected: false },
      ],
      availableDates: [
        { date: "Mon, 10 Oct", slots: 4 },
        { date: "Tue, 11 Oct", slots: 5 },
        { date: "Wed, 12 Oct", slots: 2 },
      ],
      availableTimeSlots: {
        morning: ["09:30 AM", "10:00 AM", "10:45 AM"],
        evening: ["05:00 PM", "05:30 PM", "06:00 PM"],
        selectedTime: "05:00 PM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: ["Joint Replacement", "Sports Injuries", "Arthroscopy"],
    concernsTreated: ["Knee Pain", "Fractures", "Back Pain", "Arthritis"],
    workExperience: {
      totalExperience: "11+ years",
      history: [
        {
          organization: "Sunrise Ortho Care",
          role: "Senior Consultant",
          period: "2017–Present",
        },
        {
          organization: "Manipal Hospital",
          role: "Orthopedic Specialist",
          period: "2013–2017",
        },
      ],
    },
    featuredReviews: {
      totalReviews: 160,
      reviews: [
        {
          reviewer: "Ananya Joshi",
          consultedFor: "Knee Pain",
          date: "02 July 2023",
          rating: 5,
          review:
            "Recovered from knee pain within weeks! Very professional.",
        },
        {
          reviewer: "Ravi Deshmukh",
          consultedFor: "Back Pain",
          date: "10 June 2023",
          rating: 4,
          review:
            "Good diagnosis and effective treatment plan.",
        },
      ],
    },
    location: "Kolkata",
  },
  {
    id: 5,
    name: "Dr. Neha Kapoor",
    specialization: "Gynecologist",
    rating: 4.8,
    followers: 1500,
    following: "40K",
    posts: 350,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "I’m Dr. Neha Kapoor, a consultant Gynecologist and Obstetrician with 10+ years of experience helping women with maternity and reproductive health.",
      languagesSpoken: ["English", "Hindi"],
      socialLinks: ["Instagram", "LinkedIn", "YouTube"],
    },
    appointment: {
      fee: 1000,
      sessionModes: [
        { type: "In-Clinic", duration: "45 Mins", selected: true },
        { type: "Video", duration: "25 Mins", selected: false },
        { type: "Chat", duration: "15 Mins", selected: false },
      ],
      availableDates: [
        { date: "Tue, 11 Oct", slots: 6 },
        { date: "Wed, 12 Oct", slots: 5 },
        { date: "Thu, 13 Oct", slots: 4 },
      ],
      availableTimeSlots: {
        morning: ["09:00 AM", "09:45 AM", "10:30 AM"],
        evening: ["04:30 PM", "05:00 PM"],
        selectedTime: "09:45 AM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: ["Pregnancy Care", "Infertility", "Reproductive Health"],
    concernsTreated: ["Pregnancy", "PCOD", "Menstrual Issues", "Infertility"],
    workExperience: {
      totalExperience: "10+ years",
      history: [
        {
          organization: "MotherCare Hospital",
          role: "Consultant Gynecologist",
          period: "2016–Present",
        },
        {
          organization: "Max Healthcare",
          role: "Resident Doctor",
          period: "2012–2016",
        },
      ],
    },
    featuredReviews: {
      totalReviews: 190,
      reviews: [
        {
          reviewer: "Ritika Sinha",
          consultedFor: "Pregnancy",
          date: "05 August 2023",
          rating: 5,
          review:
            "Dr. Neha was extremely caring throughout my pregnancy.",
        },
        {
          reviewer: "Mona Aggarwal",
          consultedFor: "PCOD",
          date: "22 July 2023",
          rating: 4,
          review:
            "Helpful advice and personalized treatment plan.",
        },
      ],
    },
    location: "Delhi",
  },
  {
    id: 6,
    name: "Dr. Arjun Menon",
    specialization: "Neurologist",
    rating: 4.9,
    followers: 890,
    following: "18K",
    posts: 410,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "I’m Dr. Arjun Menon, a Neurologist with 14 years of experience diagnosing and managing neurological disorders and brain-related conditions.",
      languagesSpoken: ["English", "Malayalam", "Hindi"],
      socialLinks: ["Facebook", "LinkedIn", "YouTube"],
    },
    appointment: {
      fee: 1500,
      sessionModes: [
        { type: "In-Clinic", duration: "45 Mins", selected: true },
        { type: "Video", duration: "30 Mins", selected: false },
        { type: "Chat", duration: "10 Mins", selected: false },
      ],
      availableDates: [
        { date: "Mon, 10 Oct", slots: 6 },
        { date: "Tue, 11 Oct", slots: 4 },
        { date: "Wed, 12 Oct", slots: 5 },
      ],
      availableTimeSlots: {
        morning: ["09:15 AM", "09:45 AM", "10:30 AM"],
        evening: ["04:30 PM", "05:15 PM"],
        selectedTime: "05:15 PM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: ["Neurology", "Epilepsy", "Stroke Management", "Brain Health"],
    concernsTreated: ["Seizures", "Headache", "Stroke", "Memory Loss"],
    workExperience: {
      totalExperience: "14+ years",
      history: [
        {
          organization: "NeuroCare Hospital",
          role: "Senior Neurologist",
          period: "2016–Present",
        },
        {
          organization: "KIMS Hospital",
          role: "Neurology Consultant",
          period: "2011–2016",
        },
      ],
    },
    featuredReviews: {
      totalReviews: 175,
      reviews: [
        {
          reviewer: "Naveen Thomas",
          consultedFor: "Headache",
          date: "11 August 2023",
          rating: 5,
          review:
            "Very clear and precise in diagnosis. Highly recommended.",
        },
        {
          reviewer: "Asha Kurup",
          consultedFor: "Stroke",
          date: "01 July 2023",
          rating: 5,
          review:
            "Excellent post-recovery care and follow-up.",
        },
      ],
    },
    location: "Jaipur",
  },
  {
    id: 7,
    name: "Dr. Neha Kapoor",
    specialization: "Cardiologist",
    rating: 4.8,
    followers: 1500,
    following: "18K",
    posts: 410,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "I am Dr. Neha Kapoor, a Cardiologist at HeartCare Clinic, Delhi, specializing in heart health, blood pressure management, and preventive cardiology.",
      languagesSpoken: ["English", "Hindi", "Punjabi"],
      socialLinks: ["Facebook", "Instagram", "LinkedIn", "Twitter"],
    },
    appointment: {
      fee: 1200,
      sessionModes: [
        { type: "In-Clinic", duration: "45 Mins", selected: true },
        { type: "Video", duration: "30 Mins", selected: false },
        { type: "Chat", duration: "10 Mins", selected: false },
      ],
      availableDates: [
        { date: "Mon, 10 Oct", slots: 6 },
        { date: "Tue, 11 Oct", slots: 7 },
        { date: "Wed, 12 Oct", slots: 4 },
      ],
      availableTimeSlots: {
        morning: ["09:30 AM", "10:00 AM", "10:45 AM"],
        evening: ["05:00 PM", "05:30 PM", "06:15 PM"],
        selectedTime: "10:45 AM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: [
      "Heart Disease",
      "Cholesterol Management",
      "Blood Pressure",
      "Preventive Cardiology",
    ],
    concernsTreated: ["Chest Pain", "High BP", "Fatigue", "Shortness of Breath"],
    workExperience: {
      totalExperience: "12+ years",
      history: [
        {
          organization: "HeartCare Clinic",
          role: "Senior Cardiologist",
          period: "2017–Present",
        },
        {
          organization: "AIIMS Delhi",
          role: "Resident Doctor",
          period: "2012–2017",
        },
      ],
    },
    featuredReviews: {
      totalReviews: 250,
      reviews: [
        {
          reviewer: "Rohit Sharma",
          consultedFor: "High BP",
          date: "20 July 2023",
          rating: 5,
          review:
            "She gave a clear treatment plan that really helped stabilize my BP.",
        },
        {
          reviewer: "Meera Iyer",
          consultedFor: "Chest Pain",
          date: "10 June 2023",
          rating: 4,
          review:
            "Very attentive and knowledgeable doctor. Highly recommended.",
        },
      ],
    },
    location: "Varanasi",
  },
  {
    id: 8,
    name: "Dr. Rakesh Nair",
    specialization: "Orthopedic Surgeon",
    rating: 4.6,
    followers: 890,
    following: "13K",
    posts: 275,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "I’m Dr. Rakesh Nair, an Orthopedic Surgeon at Spine & Joint Center, Bangalore. My focus is on treating bone fractures, arthritis, and joint replacement.",
      languagesSpoken: ["English", "Kannada", "Hindi"],
      socialLinks: ["Facebook", "LinkedIn", "Instagram"],
    },
    appointment: {
      fee: 950,
      sessionModes: [
        { type: "In-Clinic", duration: "40 Mins", selected: true },
        { type: "Video", duration: "25 Mins", selected: false },
      ],
      availableDates: [
        { date: "Mon, 10 Oct", slots: 5 },
        { date: "Tue, 11 Oct", slots: 6 },
        { date: "Wed, 12 Oct", slots: 2 },
      ],
      availableTimeSlots: {
        morning: ["09:15 AM", "09:45 AM", "10:30 AM"],
        evening: ["05:15 PM", "05:45 PM", "06:30 PM"],
        selectedTime: "09:45 AM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: ["Joint Pain", "Fracture Treatment", "Arthritis Care"],
    concernsTreated: ["Knee Pain", "Back Pain", "Shoulder Injury", "Sprain"],
    workExperience: {
      totalExperience: "10+ years",
      history: [
        {
          organization: "Spine & Joint Center",
          role: "Orthopedic Consultant",
          period: "2016–Present",
        },
        {
          organization: "Fortis Hospital",
          role: "Orthopedic Resident",
          period: "2012–2016",
        },
      ],
    },
    featuredReviews: {
      totalReviews: 190,
      reviews: [
        {
          reviewer: "Suresh Kumar",
          consultedFor: "Knee Pain",
          date: "14 May 2023",
          rating: 5,
          review: "Recovered faster than expected. Great care and attention.",
        },
        {
          reviewer: "Pooja Menon",
          consultedFor: "Fracture",
          date: "02 April 2023",
          rating: 4,
          review:
            "Good experience, clear explanation of post-surgery recovery steps.",
        },
      ],
    },
    location: "Hyderabad",
  },
  {
    id: 9,
    name: "Dr. Anjali Singh",
    specialization: "Gynecologist",
    rating: 4.9,
    followers: 2200,
    following: "28K",
    posts: 510,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "Hello, I am Dr. Anjali Singh, a Gynecologist at BloomCare Women’s Hospital, Pune. I specialize in pregnancy care, fertility, and reproductive health.",
      languagesSpoken: ["English", "Hindi", "Marathi"],
      socialLinks: ["Facebook", "Instagram", "LinkedIn"],
    },
    appointment: {
      fee: 1000,
      sessionModes: [
        { type: "In-Clinic", duration: "45 Mins", selected: true },
        { type: "Video", duration: "30 Mins", selected: false },
      ],
      availableDates: [
        { date: "Mon, 10 Oct", slots: 5 },
        { date: "Tue, 11 Oct", slots: 6 },
        { date: "Wed, 12 Oct", slots: 4 },
      ],
      availableTimeSlots: {
        morning: ["09:00 AM", "09:45 AM", "10:15 AM"],
        evening: ["04:30 PM", "05:15 PM", "06:00 PM"],
        selectedTime: "09:45 AM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: ["Fertility", "Pregnancy Care", "Menstrual Health"],
    concernsTreated: ["Irregular Periods", "Pregnancy", "Hormonal Imbalance"],
    workExperience: {
      totalExperience: "11+ years",
      history: [
        {
          organization: "BloomCare Women’s Hospital",
          role: "Senior Gynecologist",
          period: "2017–Present",
        },
        {
          organization: "KEM Hospital",
          role: "Resident Doctor",
          period: "2013–2017",
        },
      ],
    },
    featuredReviews: {
      totalReviews: 310,
      reviews: [
        {
          reviewer: "Sneha Patil",
          consultedFor: "Pregnancy Care",
          date: "25 June 2023",
          rating: 5,
          review: "Very supportive throughout pregnancy. Highly skilled.",
        },
        {
          reviewer: "Ritika Sharma",
          consultedFor: "Hormonal Imbalance",
          date: "10 May 2023",
          rating: 5,
          review: "Helped balance my hormones naturally. Great doctor!",
        },
      ],
    },
    location: "Mumbai",
  },
  {
    id: 10,
    name: "Dr. Vikram Rao",
    specialization: "Neurologist",
    rating: 4.5,
    followers: 720,
    following: "12K",
    posts: 180,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "I am Dr. Vikram Rao, a Neurologist at BrainCare Center, Chennai. I treat neurological disorders, headaches, and epilepsy.",
      languagesSpoken: ["English", "Tamil", "Hindi"],
      socialLinks: ["LinkedIn", "Twitter", "Facebook"],
    },
    appointment: {
      fee: 1300,
      sessionModes: [
        { type: "In-Clinic", duration: "60 Mins", selected: true },
        { type: "Video", duration: "30 Mins", selected: false },
      ],
      availableDates: [
        { date: "Mon, 10 Oct", slots: 3 },
        { date: "Tue, 11 Oct", slots: 5 },
        { date: "Wed, 12 Oct", slots: 4 },
      ],
      availableTimeSlots: {
        morning: ["09:15 AM", "10:00 AM"],
        evening: ["05:00 PM", "06:00 PM"],
        selectedTime: "05:00 PM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: ["Epilepsy", "Migraine", "Stroke Recovery", "Parkinson’s"],
    concernsTreated: ["Headache", "Memory Loss", "Dizziness", "Seizures"],
    workExperience: {
      totalExperience: "14+ years",
      history: [
        {
          organization: "BrainCare Center",
          role: "Consultant Neurologist",
          period: "2018–Present",
        },
        {
          organization: "Apollo Hospitals",
          role: "Neurology Fellow",
          period: "2011–2018",
        },
      ],
    },
    featuredReviews: {
      totalReviews: 200,
      reviews: [
        {
          reviewer: "Ajay Kumar",
          consultedFor: "Migraine",
          date: "15 May 2023",
          rating: 4,
          review:
            "Migraine relief was noticeable after just two visits. Very thankful!",
        },
        {
          reviewer: "Deepika R",
          consultedFor: "Dizziness",
          date: "09 June 2023",
          rating: 5,
          review:
            "Explained every step clearly. Felt reassured and confident.",
        },
      ],
    },
    location: "Bengaluru",
  },
  {
    id: 11,
    name: "Dr. Priya Deshmukh",
    specialization: "Pediatrician",
    rating: 4.8,
    followers: 1900,
    following: "24K",
    posts: 340,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "Hi, I’m Dr. Priya Deshmukh, a Pediatrician at ChildCare Clinic, Nagpur. I focus on newborn care, growth monitoring, and child nutrition.",
      languagesSpoken: ["English", "Hindi", "Marathi"],
      socialLinks: ["Instagram", "Facebook", "LinkedIn"],
    },
    appointment: {
      fee: 700,
      sessionModes: [
        { type: "In-Clinic", duration: "30 Mins", selected: true },
        { type: "Video", duration: "20 Mins", selected: false },
      ],
      availableDates: [
        { date: "Mon, 10 Oct", slots: 6 },
        { date: "Tue, 11 Oct", slots: 8 },
        { date: "Wed, 12 Oct", slots: 5 },
      ],
      availableTimeSlots: {
        morning: ["09:30 AM", "10:15 AM", "11:00 AM"],
        evening: ["05:30 PM", "06:00 PM"],
        selectedTime: "09:30 AM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: ["Child Nutrition", "Immunization", "Growth Monitoring"],
    concernsTreated: ["Cold", "Cough", "Fever", "Weak Immunity"],
    workExperience: {
      totalExperience: "8+ years",
      history: [
        {
          organization: "ChildCare Clinic",
          role: "Pediatrician",
          period: "2018–Present",
        },
        {
          organization: "AIIMS Nagpur",
          role: "Resident Pediatrician",
          period: "2015–2018",
        },
      ],
    },
    featuredReviews: {
      totalReviews: 270,
      reviews: [
        {
          reviewer: "Ravi Sharma",
          consultedFor: "Fever in Child",
          date: "18 June 2023",
          rating: 5,
          review:
            "Very kind and patient with kids. Accurate diagnosis and advice.",
        },
        {
          reviewer: "Lata Naik",
          consultedFor: "Child Nutrition",
          date: "12 July 2023",
          rating: 5,
          review:
            "Explained diet plan clearly. My child’s health improved visibly.",
        },
      ],
    },
    location: "Chennai",
  }, {
    id: 12,
    name: "Dr. Arjun Khanna",
    specialization: "ENT Specialist",
    rating: 4.6,
    followers: 1050,
    following: "15K",
    posts: 290,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "Hi, I’m Dr. Arjun Khanna, an ENT Specialist at ClearHear Clinic, Delhi. I specialize in ear, nose, and throat disorders with a focus on sinus and hearing issues.",
      languagesSpoken: ["English", "Hindi", "Punjabi"],
      socialLinks: ["Facebook", "Instagram", "LinkedIn"],
    },
    appointment: {
      fee: 800,
      sessionModes: [
        { type: "In-Clinic", duration: "30 Mins", selected: true },
        { type: "Video", duration: "20 Mins", selected: false },
      ],
      availableDates: [
        { date: "Mon, 10 Oct", slots: 7 },
        { date: "Tue, 11 Oct", slots: 6 },
        { date: "Wed, 12 Oct", slots: 4 },
      ],
      availableTimeSlots: {
        morning: ["09:00 AM", "09:45 AM", "10:30 AM"],
        evening: ["05:00 PM", "05:30 PM"],
        selectedTime: "09:45 AM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: ["Sinus Treatment", "Hearing Loss", "Throat Infection"],
    concernsTreated: ["Ear Pain", "Tonsillitis", "Blocked Nose", "Hearing Loss"],
    workExperience: {
      totalExperience: "10+ years",
      history: [
        {
          organization: "ClearHear Clinic",
          role: "Consultant ENT Specialist",
          period: "2017–Present",
        },
        {
          organization: "Max Hospital",
          role: "ENT Resident",
          period: "2013–2017",
        },
      ],
    },
    featuredReviews: {
      totalReviews: 180,
      reviews: [
        {
          reviewer: "Rajesh Kumar",
          consultedFor: "Sinus Infection",
          date: "22 May 2023",
          rating: 5,
          review: "Effective treatment, no recurrence since last visit!",
        },
        {
          reviewer: "Sonia Verma",
          consultedFor: "Ear Pain",
          date: "09 June 2023",
          rating: 4,
          review: "Quick diagnosis and gentle care.",
        },
      ],
    },
    location: "Kolkata",
  },
  {
    id: 13,
    name: "Dr. Kavita Menon",
    specialization: "Psychiatrist",
    rating: 4.9,
    followers: 2500,
    following: "30K",
    posts: 600,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "Hello, I am Dr. Kavita Menon, a Psychiatrist at MindEase Wellness, Kochi. I specialize in stress management, depression, and anxiety therapy.",
      languagesSpoken: ["English", "Malayalam", "Hindi"],
      socialLinks: ["LinkedIn", "Instagram", "Twitter"],
    },
    appointment: {
      fee: 1100,
      sessionModes: [
        { type: "Video", duration: "45 Mins", selected: true },
        { type: "Chat", duration: "20 Mins", selected: false },
      ],
      availableDates: [
        { date: "Mon, 10 Oct", slots: 4 },
        { date: "Tue, 11 Oct", slots: 5 },
        { date: "Wed, 12 Oct", slots: 3 },
      ],
      availableTimeSlots: {
        morning: ["09:30 AM", "10:15 AM"],
        evening: ["04:45 PM", "05:30 PM"],
        selectedTime: "04:45 PM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: ["Depression", "Anxiety", "Therapy", "Stress Management"],
    concernsTreated: ["Sleep Disorders", "Mood Swings", "Work Stress"],
    workExperience: {
      totalExperience: "13+ years",
      history: [
        {
          organization: "MindEase Wellness",
          role: "Chief Psychiatrist",
          period: "2016–Present",
        },
        {
          organization: "NIMHANS",
          role: "Resident Psychiatrist",
          period: "2010–2016",
        },
      ],
    },
    featuredReviews: {
      totalReviews: 370,
      reviews: [
        {
          reviewer: "Ananya Thomas",
          consultedFor: "Anxiety",
          date: "02 July 2023",
          rating: 5,
          review: "Felt heard and supported throughout my sessions.",
        },
        {
          reviewer: "Rahul Das",
          consultedFor: "Stress",
          date: "16 June 2023",
          rating: 5,
          review: "Her techniques for stress management work wonders.",
        },
      ],
    },
    location: "Delhi",
  },
  {
    id: 14,
    name: "Dr. Aditya Reddy",
    specialization: "Dentist",
    rating: 4.7,
    followers: 1400,
    following: "20K",
    posts: 230,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "I am Dr. Aditya Reddy, a Dentist at SmileBright Dental Clinic, Hyderabad. I specialize in cosmetic dentistry, root canal treatments, and dental hygiene.",
      languagesSpoken: ["English", "Telugu", "Hindi"],
      socialLinks: ["Instagram", "Facebook", "LinkedIn"],
    },
    appointment: {
      fee: 600,
      sessionModes: [
        { type: "In-Clinic", duration: "30 Mins", selected: true },
        { type: "Video", duration: "15 Mins", selected: false },
      ],
      availableDates: [
        { date: "Mon, 10 Oct", slots: 8 },
        { date: "Tue, 11 Oct", slots: 5 },
        { date: "Wed, 12 Oct", slots: 3 },
      ],
      availableTimeSlots: {
        morning: ["09:15 AM", "10:00 AM"],
        evening: ["05:15 PM", "06:00 PM"],
        selectedTime: "09:15 AM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: ["Root Canal", "Braces", "Teeth Whitening", "Dental Implants"],
    concernsTreated: ["Cavities", "Tooth Pain", "Bad Breath", "Sensitivity"],
    workExperience: {
      totalExperience: "9+ years",
      history: [
        {
          organization: "SmileBright Dental Clinic",
          role: "Dental Surgeon",
          period: "2018–Present",
        },
        {
          organization: "Apollo Dental",
          role: "Resident Dentist",
          period: "2014–2018",
        },
      ],
    },
    featuredReviews: {
      totalReviews: 210,
      reviews: [
        {
          reviewer: "Harsha K",
          consultedFor: "Root Canal",
          date: "01 May 2023",
          rating: 5,
          review: "Painless and quick. Excellent dental care!",
        },
        {
          reviewer: "Divya Singh",
          consultedFor: "Teeth Whitening",
          date: "14 June 2023",
          rating: 4,
          review: "Very good results, my teeth look much brighter.",
        },
      ],
    },
    location: "Jaipur",
  },
  {
    id: 15,
    name: "Dr. Mehul Joshi",
    specialization: "Ophthalmologist",
    rating: 4.8,
    followers: 1700,
    following: "21K",
    posts: 330,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "Hi, I’m Dr. Mehul Joshi, an Ophthalmologist at VisionCare Clinic, Ahmedabad. I treat eye disorders, perform LASIK surgeries, and offer vision therapy.",
      languagesSpoken: ["English", "Gujarati", "Hindi"],
      socialLinks: ["Facebook", "Instagram", "LinkedIn"],
    },
    appointment: {
      fee: 900,
      sessionModes: [
        { type: "In-Clinic", duration: "30 Mins", selected: true },
        { type: "Video", duration: "20 Mins", selected: false },
      ],
      availableDates: [
        { date: "Mon, 10 Oct", slots: 5 },
        { date: "Tue, 11 Oct", slots: 7 },
        { date: "Wed, 12 Oct", slots: 6 },
      ],
      availableTimeSlots: {
        morning: ["09:00 AM", "10:15 AM"],
        evening: ["05:00 PM", "06:15 PM"],
        selectedTime: "10:15 AM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: ["LASIK", "Vision Therapy", "Eye Surgery"],
    concernsTreated: ["Blurry Vision", "Dry Eyes", "Eye Pain", "Cataract"],
    workExperience: {
      totalExperience: "11+ years",
      history: [
        {
          organization: "VisionCare Clinic",
          role: "Senior Ophthalmologist",
          period: "2016–Present",
        },
        {
          organization: "Civil Hospital Ahmedabad",
          role: "Eye Surgeon",
          period: "2010–2016",
        },
      ],
    },
    featuredReviews: {
      totalReviews: 220,
      reviews: [
        {
          reviewer: "Aditi Sharma",
          consultedFor: "LASIK Surgery",
          date: "05 May 2023",
          rating: 5,
          review: "Perfect vision after surgery, very smooth process.",
        },
        {
          reviewer: "Manoj Patel",
          consultedFor: "Dry Eyes",
          date: "11 June 2023",
          rating: 4,
          review: "Good guidance, eyes feel much better now.",
        },
      ],
    },
    location: "Varanasi",
  },
  {
    id: 16,
    name: "Dr. Simran Kaur",
    specialization: "Nutritionist",
    rating: 4.9,
    followers: 3200,
    following: "35K",
    posts: 720,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "Hello! I am Dr. Simran Kaur, a Nutritionist at FitLife Clinic, Chandigarh. I help patients with weight management, diet planning, and overall fitness.",
      languagesSpoken: ["English", "Hindi", "Punjabi"],
      socialLinks: ["Instagram", "LinkedIn", "Twitter"],
    },
    appointment: {
      fee: 700,
      sessionModes: [
        { type: "Video", duration: "30 Mins", selected: true },
        { type: "Chat", duration: "15 Mins", selected: false },
      ],
      availableDates: [
        { date: "Mon, 10 Oct", slots: 6 },
        { date: "Tue, 11 Oct", slots: 7 },
        { date: "Wed, 12 Oct", slots: 3 },
      ],
      availableTimeSlots: {
        morning: ["09:15 AM", "10:30 AM"],
        evening: ["04:30 PM", "05:15 PM"],
        selectedTime: "04:30 PM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: ["Weight Loss", "Sports Nutrition", "Diet Therapy"],
    concernsTreated: ["Obesity", "Fatigue", "Nutrient Deficiency", "Metabolism"],
    workExperience: {
      totalExperience: "8+ years",
      history: [
        {
          organization: "FitLife Clinic",
          role: "Chief Nutritionist",
          period: "2018–Present",
        },
        {
          organization: "Wellness 360",
          role: "Nutrition Consultant",
          period: "2015–2018",
        },
      ],
    },
    featuredReviews: {
      totalReviews: 400,
      reviews: [
        {
          reviewer: "Ritika Malhotra",
          consultedFor: "Weight Loss",
          date: "20 July 2023",
          rating: 5,
          review: "Lost 6kg in 2 months with her diet plan!",
        },
        {
          reviewer: "Karan Singh",
          consultedFor: "Sports Nutrition",
          date: "18 June 2023",
          rating: 5,
          review: "Helped me boost stamina and recovery time. Amazing!",
        },
      ],
    },
    location: "Hyderabad",
  },
  {
    id: 17,
    name: "Dr. Ritu Sharma",
    specialization: "Physiotherapist",
    rating: 4.7,
    followers: 1600,
    following: "22K",
    posts: 340,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "Hi, I am Dr. Ritu Sharma, a Physiotherapist at HealMotion Clinic, Jaipur. I specialize in posture correction, joint rehabilitation, and pain relief.",
      languagesSpoken: ["English", "Hindi"],
      socialLinks: ["Instagram", "LinkedIn", "Facebook"],
    },
    appointment: {
      fee: 750,
      sessionModes: [
        { type: "In-Clinic", duration: "40 Mins", selected: true },
        { type: "Video", duration: "25 Mins", selected: false },
      ],
      availableDates: [
        { date: "Mon, 10 Oct", slots: 5 },
        { date: "Tue, 11 Oct", slots: 8 },
        { date: "Wed, 12 Oct", slots: 4 },
      ],
      availableTimeSlots: {
        morning: ["09:30 AM", "10:15 AM"],
        evening: ["05:00 PM", "05:45 PM"],
        selectedTime: "09:30 AM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: ["Rehabilitation", "Pain Management", "Posture Correction"],
    concernsTreated: ["Back Pain", "Neck Pain", "Joint Stiffness", "Injury Rehab"],
    workExperience: {
      totalExperience: "9+ years",
      history: [
        {
          organization: "HealMotion Clinic",
          role: "Senior Physiotherapist",
          period: "2018–Present",
        },
        {
          organization: "Fortis Hospital Jaipur",
          role: "Physiotherapy Resident",
          period: "2014–2018",
        },
      ],
    },
    featuredReviews: {
      totalReviews: 260,
      reviews: [
        {
          reviewer: "Sonal Mehta",
          consultedFor: "Back Pain",
          date: "14 July 2023",
          rating: 5,
          review: "Pain gone in 3 sessions. She’s the best!",
        },
        {
          reviewer: "Deepak Chauhan",
          consultedFor: "Shoulder Injury",
          date: "09 June 2023",
          rating: 4,
          review: "Professional and motivating experience.",
        },
      ],
    },
    location: "Mumbai",
  },
  {
    id: 18,
    name: "Dr. Varun Patel",
    specialization: "Urologist",
    rating: 4.5,
    followers: 980,
    following: "14K",
    posts: 200,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "I am Dr. Varun Patel, a Urologist at Metro Hospital, Surat. I treat urinary infections, kidney stones, and prostate-related issues.",
      languagesSpoken: ["English", "Gujarati", "Hindi"],
      socialLinks: ["LinkedIn", "Facebook"],
    },
    appointment: {
      fee: 950,
      sessionModes: [
        { type: "In-Clinic", duration: "40 Mins", selected: true },
        { type: "Video", duration: "25 Mins", selected: false },
      ],
      availableDates: [
        { date: "Mon, 10 Oct", slots: 6 },
        { date: "Tue, 11 Oct", slots: 5 },
        { date: "Wed, 12 Oct", slots: 3 },
      ],
      availableTimeSlots: {
        morning: ["09:00 AM", "09:45 AM"],
        evening: ["05:30 PM", "06:15 PM"],
        selectedTime: "09:45 AM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: ["Kidney Stones", "Prostate Care", "Urinary Health"],
    concernsTreated: ["Painful Urination", "Kidney Stone", "UTI", "Prostate Issues"],
    workExperience: {
      totalExperience: "12+ years",
      history: [
        {
          organization: "Metro Hospital Surat",
          role: "Consultant Urologist",
          period: "2016–Present",
        },
        {
          organization: "Civil Hospital Ahmedabad",
          role: "Urology Resident",
          period: "2010–2016",
        },
      ],
    },
    featuredReviews: {
      totalReviews: 180,
      reviews: [
        {
          reviewer: "Ramesh Soni",
          consultedFor: "Kidney Stone",
          date: "22 May 2023",
          rating: 5,
          review: "Smooth procedure, very professional doctor.",
        },
        {
          reviewer: "Nisha Gupta",
          consultedFor: "UTI",
          date: "17 June 2023",
          rating: 4,
          review: "Accurate diagnosis, quick recovery.",
        },
      ],
    },
    location: "Bengaluru",
  },{
    id: 19,
    name: "Dr. Aarav Bansal",
    specialization: "Neurosurgeon",
    rating: 4.9,
    followers: 1280,
    following: "25K",
    posts: 420,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "Hi, I'm Dr. Aarav Bansal, a senior neurosurgeon at Apollo Hospitals, Delhi. I specialize in complex brain and spinal surgeries, focusing on precision and patient recovery.",
      languagesSpoken: ["English", "Hindi"],
      socialLinks: ["Facebook", "LinkedIn", "Twitter"],
    },
    appointment: {
      fee: 2500,
      sessionModes: [
        { type: "In-Clinic", duration: "60 Mins", selected: true },
        { type: "Video", duration: "45 Mins", selected: false },
        { type: "Chat", duration: "20 Mins", selected: false },
      ],
      availableDates: [
        { date: "Mon, 10 Oct", slots: 3 },
        { date: "Tue, 11 Oct", slots: 2 },
        { date: "Wed, 12 Oct", slots: 4 },
      ],
      availableTimeSlots: {
        morning: ["08:30 AM", "09:00 AM", "10:00 AM"],
        evening: ["05:00 PM", "06:00 PM", "07:00 PM"],
        selectedTime: "09:00 AM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: ["Brain Surgery", "Spine Disorders", "Neuro-Oncology"],
    concernsTreated: ["Brain Tumor", "Spinal Cord Injury", "Epilepsy"],
    workExperience: {
      totalExperience: "12+ years",
      history: [
        {
          organization: "Apollo Hospitals, Delhi",
          role: "Senior Neurosurgeon",
          period: "2016–Present",
        },
        {
          organization: "Fortis Healthcare",
          role: "Resident Doctor",
          period: "2012–2016",
        },
      ],
    },
    featuredReviews: {
      totalReviews: 310,
      reviews: [
        {
          reviewer: "Riya Malhotra",
          consultedFor: "Brain Tumor Surgery",
          date: "09 April 2023",
          rating: 5,
          review:
            "Dr. Aarav’s expertise saved my father’s life. Exceptional professionalism!",
        },
        {
          reviewer: "Manish Sharma",
          consultedFor: "Spine Issue",
          date: "12 March 2023",
          rating: 4,
          review: "Excellent doctor, very informative and patient.",
        },
      ],
    },
    location: "Chennai",
  },
  {
    id: 20,
    name: "Dr. Kavita Nair",
    specialization: "Psychiatrist",
    rating: 4.8,
    followers: 890,
    following: "17K",
    posts: 290,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "Hello, I'm Dr. Kavita Nair, a consultant psychiatrist at MindCare Clinic, Bangalore. I provide therapy and medication management for mental well-being.",
      languagesSpoken: ["English", "Hindi", "Kannada"],
      socialLinks: ["Instagram", "LinkedIn"],
    },
    appointment: {
      fee: 1200,
      sessionModes: [
        { type: "In-Clinic", duration: "45 Mins", selected: true },
        { type: "Video", duration: "40 Mins", selected: false },
        { type: "Chat", duration: "15 Mins", selected: false },
      ],
      availableDates: [
        { date: "Tue, 11 Oct", slots: 7 },
        { date: "Wed, 12 Oct", slots: 6 },
        { date: "Thu, 13 Oct", slots: 5 },
      ],
      availableTimeSlots: {
        morning: ["10:00 AM", "10:45 AM", "11:30 AM"],
        evening: ["04:15 PM", "05:00 PM", "05:45 PM"],
        selectedTime: "11:30 AM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: ["Mental Health", "Depression", "Anxiety Therapy"],
    concernsTreated: ["Stress", "Panic Attacks", "Sleep Disorder"],
    workExperience: {
      totalExperience: "10+ years",
      history: [
        {
          organization: "MindCare Clinic, Bangalore",
          role: "Consultant Psychiatrist",
          period: "2017–Present",
        },
        {
          organization: "NIMHANS Hospital",
          role: "Resident Psychiatrist",
          period: "2013–2017",
        },
      ],
    },
    featuredReviews: {
      totalReviews: 190,
      reviews: [
        {
          reviewer: "Priya Verma",
          consultedFor: "Anxiety",
          date: "02 May 2023",
          rating: 5,
          review: "Very understanding and helpful. Therapy sessions were great.",
        },
        {
          reviewer: "Aditya Rao",
          consultedFor: "Depression",
          date: "15 April 2023",
          rating: 4,
          review:
            "Dr. Nair helped me regain confidence and balance. Great listener!",
        },
      ],
    },
    location: "Kolkata",
  },
  {
    id: 21,
    name: "Dr. Rohit Khanna",
    specialization: "Urologist",
    rating: 4.7,
    followers: 620,
    following: "15K",
    posts: 260,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "I am Dr. Rohit Khanna, a consultant urologist at Fortis Hospital, Chandigarh. Specializing in kidney stones and urinary tract disorders.",
      languagesSpoken: ["English", "Hindi", "Punjabi"],
      socialLinks: ["Facebook", "Instagram"],
    },
    appointment: {
      fee: 1000,
      sessionModes: [
        { type: "In-Clinic", duration: "45 Mins", selected: true },
        { type: "Video", duration: "30 Mins", selected: false },
        { type: "Chat", duration: "15 Mins", selected: false },
      ],
      availableDates: [
        { date: "Mon, 10 Oct", slots: 4 },
        { date: "Wed, 12 Oct", slots: 3 },
        { date: "Fri, 14 Oct", slots: 6 },
      ],
      availableTimeSlots: {
        morning: ["09:15 AM", "09:45 AM", "10:30 AM"],
        evening: ["05:00 PM", "05:45 PM", "06:30 PM"],
        selectedTime: "09:45 AM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: ["Kidney Stones", "Prostate Issues", "UTI Treatment"],
    concernsTreated: ["Kidney Stone", "UTI", "Prostate Enlargement"],
    workExperience: {
      totalExperience: "9+ years",
      history: [
        {
          organization: "Fortis Hospital, Chandigarh",
          role: "Consultant Urologist",
          period: "2018–Present",
        },
        {
          organization: "Max Healthcare",
          role: "Resident Urologist",
          period: "2014–2018",
        },
      ],
    },
    featuredReviews: {
      totalReviews: 165,
      reviews: [
        {
          reviewer: "Sonal Thakur",
          consultedFor: "Kidney Stone",
          date: "07 June 2023",
          rating: 5,
          review: "Quick diagnosis and smooth recovery. Highly recommend!",
        },
        {
          reviewer: "Rajiv Sharma",
          consultedFor: "UTI",
          date: "11 May 2023",
          rating: 4,
          review: "Explained all options clearly and professionally.",
        },
      ],
    },
    location: "Delhi",
  },
  {
    id: 22,
    name: "Dr. Meenakshi Suresh",
    specialization: "Endocrinologist",
    rating: 4.8,
    followers: 710,
    following: "18K",
    posts: 310,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "I am Dr. Meenakshi Suresh, Endocrinologist at Global Health Center, Chennai. I help patients manage hormonal imbalances and metabolic disorders.",
      languagesSpoken: ["English", "Hindi", "Tamil"],
      socialLinks: ["LinkedIn", "Instagram"],
    },
    appointment: {
      fee: 1300,
      sessionModes: [
        { type: "In-Clinic", duration: "50 Mins", selected: true },
        { type: "Video", duration: "35 Mins", selected: false },
        { type: "Chat", duration: "15 Mins", selected: false },
      ],
      availableDates: [
        { date: "Tue, 11 Oct", slots: 5 },
        { date: "Thu, 13 Oct", slots: 4 },
        { date: "Fri, 14 Oct", slots: 6 },
      ],
      availableTimeSlots: {
        morning: ["10:00 AM", "10:45 AM", "11:30 AM"],
        evening: ["04:00 PM", "04:45 PM", "05:30 PM"],
        selectedTime: "10:45 AM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: ["Diabetes", "Thyroid Disorders", "Hormonal Therapy"],
    concernsTreated: ["Diabetes", "Thyroid", "Obesity"],
    workExperience: {
      totalExperience: "11+ years",
      history: [
        {
          organization: "Global Health Center, Chennai",
          role: "Consultant Endocrinologist",
          period: "2016–Present",
        },
        {
          organization: "Apollo Hospitals",
          role: "Junior Doctor",
          period: "2011–2016",
        },
      ],
    },
    featuredReviews: {
      totalReviews: 230,
      reviews: [
        {
          reviewer: "Deepa Nair",
          consultedFor: "Thyroid Disorder",
          date: "18 June 2023",
          rating: 5,
          review: "Explained every detail and created a clear treatment plan.",
        },
        {
          reviewer: "Anand Krishnan",
          consultedFor: "Diabetes",
          date: "29 May 2023",
          rating: 4,
          review: "Highly knowledgeable, gives practical advice.",
        },
      ],
    },
    location: "Jaipur",
  },
  {
    id: 23,
    name: "Dr. Suresh Rana",
    specialization: "Rheumatologist",
    rating: 4.7,
    followers: 520,
    following: "12K",
    posts: 220,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "I’m Dr. Suresh Rana, Rheumatologist at Medicover Hospitals, Pune. My focus is on treating arthritis and autoimmune disorders.",
      languagesSpoken: ["English", "Hindi", "Marathi"],
      socialLinks: ["Facebook", "Twitter"],
    },
    appointment: {
      fee: 1100,
      sessionModes: [
        { type: "In-Clinic", duration: "45 Mins", selected: true },
        { type: "Video", duration: "30 Mins", selected: false },
        { type: "Chat", duration: "10 Mins", selected: false },
      ],
      availableDates: [
        { date: "Mon, 10 Oct", slots: 6 },
        { date: "Wed, 12 Oct", slots: 4 },
        { date: "Fri, 14 Oct", slots: 5 },
      ],
      availableTimeSlots: {
        morning: ["09:15 AM", "09:45 AM", "10:30 AM"],
        evening: ["05:00 PM", "05:30 PM", "06:15 PM"],
        selectedTime: "10:30 AM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: ["Arthritis", "Autoimmune Diseases", "Joint Pain"],
    concernsTreated: ["Rheumatoid Arthritis", "Lupus", "Joint Pain"],
    workExperience: {
      totalExperience: "10+ years",
      history: [
        {
          organization: "Medicover Hospitals, Pune",
          role: "Consultant Rheumatologist",
          period: "2016–Present",
        },
        {
          organization: "Ruby Hall Clinic",
          role: "Resident Doctor",
          period: "2012–2016",
        },
      ],
    },
    featuredReviews: {
      totalReviews: 145,
      reviews: [
        {
          reviewer: "Shalini Patil",
          consultedFor: "Joint Pain",
          date: "09 May 2023",
          rating: 5,
          review: "Effective treatment and great communication.",
        },
        {
          reviewer: "Rahul Singh",
          consultedFor: "Arthritis",
          date: "23 April 2023",
          rating: 4,
          review: "Very supportive and explains medicines well.",
        },
      ],
    },
    location: "Varanasi",
  },
  {
    id: 24,
    name: "Dr. Priyanka Reddy",
    specialization: "Ophthalmologist",
    rating: 4.9,
    followers: 960,
    following: "20K",
    posts: 410,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "Hi, I'm Dr. Priyanka Reddy, Senior Ophthalmologist at VisionPlus Clinic, Hyderabad. I specialize in laser surgeries and cataract management.",
      languagesSpoken: ["English", "Hindi", "Telugu"],
      socialLinks: ["Instagram", "LinkedIn", "Twitter"],
    },
    appointment: {
      fee: 1400,
      sessionModes: [
        { type: "In-Clinic", duration: "50 Mins", selected: true },
        { type: "Video", duration: "40 Mins", selected: false },
        { type: "Chat", duration: "15 Mins", selected: false },
      ],
      availableDates: [
        { date: "Tue, 11 Oct", slots: 6 },
        { date: "Thu, 13 Oct", slots: 4 },
        { date: "Fri, 14 Oct", slots: 5 },
      ],
      availableTimeSlots: {
        morning: ["10:15 AM", "10:45 AM", "11:15 AM"],
        evening: ["04:15 PM", "05:00 PM", "05:45 PM"],
        selectedTime: "10:45 AM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: ["Laser Surgery", "Cataract", "Retina Treatment"],
    concernsTreated: ["Cataract", "Blurred Vision", "Dry Eyes"],
    workExperience: {
      totalExperience: "11+ years",
      history: [
        {
          organization: "VisionPlus Clinic, Hyderabad",
          role: "Senior Ophthalmologist",
          period: "2016–Present",
        },
        {
          organization: "LV Prasad Eye Institute",
          role: "Consultant",
          period: "2012–2016",
        },
      ],
    },
    featuredReviews: {
      totalReviews: 270,
      reviews: [
        {
          reviewer: "Sneha Gupta",
          consultedFor: "Cataract Surgery",
          date: "11 July 2023",
          rating: 5,
          review:
            "Smooth process and quick recovery, excellent experience!",
        },
        {
          reviewer: "Vikram Rao",
          consultedFor: "Dry Eyes",
          date: "14 June 2023",
          rating: 4,
          review: "Professional and helpful advice. Highly skilled doctor.",
        },
      ],
    },
    location: "Hyderabad",
  },{
    id: 25,
    name: "Dr. Ananya Mukherjee",
    specialization: "Gastroenterologist",
    rating: 4.8,
    followers: 830,
    following: "16K",
    posts: 280,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "Hi, I'm Dr. Ananya Mukherjee, Gastroenterologist at Apollo Hospitals, Kolkata. I specialize in digestive disorders and liver health.",
      languagesSpoken: ["English", "Hindi", "Bengali"],
      socialLinks: ["Facebook", "Instagram", "LinkedIn"],
    },
    appointment: {
      fee: 1100,
      sessionModes: [
        { type: "In-Clinic", duration: "45 Mins", selected: true },
        { type: "Video", duration: "30 Mins", selected: false },
        { type: "Chat", duration: "15 Mins", selected: false },
      ],
      availableDates: [
        { date: "Mon, 10 Oct", slots: 5 },
        { date: "Wed, 12 Oct", slots: 3 },
        { date: "Fri, 14 Oct", slots: 6 },
      ],
      availableTimeSlots: {
        morning: ["09:00 AM", "09:45 AM", "10:30 AM"],
        evening: ["04:00 PM", "04:45 PM", "05:30 PM"],
        selectedTime: "09:45 AM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: ["Digestive Health", "Liver Disorders", "Nutrition Guidance"],
    concernsTreated: ["Acid Reflux", "Ulcer", "IBS", "Hepatitis"],
    workExperience: {
      totalExperience: "10+ years",
      history: [
        { organization: "Apollo Hospitals, Kolkata", role: "Consultant Gastroenterologist", period: "2015–Present" },
        { organization: "Fortis Hospital, Kolkata", role: "Resident Doctor", period: "2011–2015" },
      ],
    },
    featuredReviews: {
      totalReviews: 175,
      reviews: [
        { reviewer: "Rohit Das", consultedFor: "Ulcer", date: "05 June 2023", rating: 5, review: "Very professional and explained everything clearly." },
        { reviewer: "Anika Sen", consultedFor: "IBS", date: "12 May 2023", rating: 4, review: "Helpful guidance and effective treatment." },
      ],
    },
    location: "Mumbai",
  },
  {
    id: 26,
    name: "Dr. Vikram Chawla",
    specialization: "Orthopedic Surgeon",
    rating: 4.9,
    followers: 1020,
    following: "22K",
    posts: 380,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "I'm Dr. Vikram Chawla, Senior Orthopedic Surgeon at Fortis Hospital, Delhi. I specialize in joint replacement and sports injuries.",
      languagesSpoken: ["English", "Hindi"],
      socialLinks: ["Instagram", "LinkedIn", "Twitter"],
    },
    appointment: {
      fee: 1800,
      sessionModes: [
        { type: "In-Clinic", duration: "50 Mins", selected: true },
        { type: "Video", duration: "35 Mins", selected: false },
        { type: "Chat", duration: "20 Mins", selected: false },
      ],
      availableDates: [
        { date: "Tue, 11 Oct", slots: 4 },
        { date: "Thu, 13 Oct", slots: 3 },
        { date: "Fri, 14 Oct", slots: 5 },
      ],
      availableTimeSlots: {
        morning: ["09:30 AM", "10:15 AM", "11:00 AM"],
        evening: ["04:30 PM", "05:15 PM", "06:00 PM"],
        selectedTime: "10:15 AM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: ["Joint Replacement", "Sports Injuries", "Fracture Care"],
    concernsTreated: ["Knee Pain", "Shoulder Injury", "Fractures", "Arthritis"],
    workExperience: {
      totalExperience: "12+ years",
      history: [
        { organization: "Fortis Hospital, Delhi", role: "Senior Orthopedic Surgeon", period: "2013–Present" },
        { organization: "Apollo Hospitals, Delhi", role: "Resident Surgeon", period: "2010–2013" },
      ],
    },
    featuredReviews: {
      totalReviews: 210,
      reviews: [
        { reviewer: "Neha Sharma", consultedFor: "Knee Pain", date: "01 July 2023", rating: 5, review: "Excellent care and very professional." },
        { reviewer: "Amit Verma", consultedFor: "Fracture", date: "15 June 2023", rating: 4, review: "Timely and effective treatment." },
      ],
    },
    location: "Bengaluru",
  },
  {
    id: 27,
    name: "Dr. Sneha Gupta",
    specialization: "Pulmonologist",
    rating: 4.7,
    followers: 770,
    following: "14K",
    posts: 270,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "I am Dr. Sneha Gupta, Pulmonologist at Max Hospital, Delhi. I specialize in lung and respiratory disorders.",
      languagesSpoken: ["English", "Hindi"],
      socialLinks: ["Facebook", "Instagram"],
    },
    appointment: {
      fee: 1250,
      sessionModes: [
        { type: "In-Clinic", duration: "45 Mins", selected: true },
        { type: "Video", duration: "35 Mins", selected: false },
        { type: "Chat", duration: "15 Mins", selected: false },
      ],
      availableDates: [
        { date: "Mon, 10 Oct", slots: 4 },
        { date: "Wed, 12 Oct", slots: 5 },
        { date: "Thu, 13 Oct", slots: 3 },
      ],
      availableTimeSlots: {
        morning: ["09:00 AM", "09:45 AM", "10:30 AM"],
        evening: ["04:00 PM", "05:00 PM", "05:45 PM"],
        selectedTime: "09:45 AM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: ["Asthma", "COPD", "Lung Infection"],
    concernsTreated: ["Asthma", "Bronchitis", "Tuberculosis", "Pneumonia"],
    workExperience: {
      totalExperience: "10+ years",
      history: [
        { organization: "Max Hospital, Delhi", role: "Consultant Pulmonologist", period: "2014–Present" },
        { organization: "AIIMS, Delhi", role: "Resident Doctor", period: "2010–2014" },
      ],
    },
    featuredReviews: {
      totalReviews: 160,
      reviews: [
        { reviewer: "Rajat Malhotra", consultedFor: "Asthma", date: "10 May 2023", rating: 5, review: "Very professional and effective treatment." },
        { reviewer: "Pooja Singh", consultedFor: "Bronchitis", date: "18 April 2023", rating: 4, review: "Helpful guidance and clear advice." },
      ],
    },
    location: "Chennai",
  },
  {
    id: 28,
    name: "Dr. Karan Mehta",
    specialization: "ENT Specialist",
    rating: 4.8,
    followers: 880,
    following: "18K",
    posts: 310,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "Hi, I'm Dr. Karan Mehta, ENT Specialist at Fortis Hospital, Mumbai. I treat ear, nose, and throat disorders with advanced surgical techniques.",
      languagesSpoken: ["English", "Hindi", "Marathi"],
      socialLinks: ["Instagram", "LinkedIn"],
    },
    appointment: {
      fee: 1150,
      sessionModes: [
        { type: "In-Clinic", duration: "45 Mins", selected: true },
        { type: "Video", duration: "30 Mins", selected: false },
        { type: "Chat", duration: "15 Mins", selected: false },
      ],
      availableDates: [
        { date: "Tue, 11 Oct", slots: 5 },
        { date: "Thu, 13 Oct", slots: 4 },
        { date: "Fri, 14 Oct", slots: 6 },
      ],
      availableTimeSlots: {
        morning: ["09:15 AM", "10:00 AM", "10:45 AM"],
        evening: ["04:15 PM", "05:00 PM", "05:45 PM"],
        selectedTime: "10:00 AM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: ["Sinus Surgery", "Hearing Loss", "Voice Disorders"],
    concernsTreated: ["Sinus Infection", "Ear Pain", "Hearing Issues", "Tonsillitis"],
    workExperience: {
      totalExperience: "11+ years",
      history: [
        { organization: "Fortis Hospital, Mumbai", role: "Senior ENT Specialist", period: "2015–Present" },
        { organization: "Lilavati Hospital", role: "Consultant", period: "2010–2015" },
      ],
    },
    featuredReviews: {
      totalReviews: 200,
      reviews: [
        { reviewer: "Alok Jain", consultedFor: "Sinus Infection", date: "08 July 2023", rating: 5, review: "Highly skilled doctor, very professional." },
        { reviewer: "Sonia Kapoor", consultedFor: "Hearing Issue", date: "20 June 2023", rating: 4, review: "Explained clearly and treated effectively." },
      ],
    },
    location: "Kolkata",
  },
  {
    id: 29,
    name: "Dr. Raghav Sharma",
    specialization: "Oncologist",
    rating: 4.9,
    followers: 1130,
    following: "24K",
    posts: 400,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "I’m Dr. Raghav Sharma, Oncologist at Tata Memorial Hospital, Mumbai. I specialize in cancer care and chemotherapy management.",
      languagesSpoken: ["English", "Hindi", "Marathi"],
      socialLinks: ["Facebook", "LinkedIn", "Twitter"],
    },
    appointment: {
      fee: 2800,
      sessionModes: [
        { type: "In-Clinic", duration: "60 Mins", selected: true },
        { type: "Video", duration: "45 Mins", selected: false },
        { type: "Chat", duration: "20 Mins", selected: false },
      ],
      availableDates: [
        { date: "Mon, 10 Oct", slots: 2 },
        { date: "Wed, 12 Oct", slots: 3 },
        { date: "Fri, 14 Oct", slots: 2 },
      ],
      availableTimeSlots: {
        morning: ["08:30 AM", "09:15 AM", "10:00 AM"],
        evening: ["04:00 PM", "04:45 PM", "05:30 PM"],
        selectedTime: "09:15 AM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: ["Cancer Treatment", "Chemotherapy", "Radiation Therapy"],
    concernsTreated: ["Breast Cancer", "Lung Cancer", "Leukemia"],
    workExperience: {
      totalExperience: "13+ years",
      history: [
        { organization: "Tata Memorial Hospital, Mumbai", role: "Senior Oncologist", period: "2012–Present" },
        { organization: "Apollo Hospitals, Mumbai", role: "Resident Oncologist", period: "2009–2012" },
      ],
    },
    featuredReviews: {
      totalReviews: 320,
      reviews: [
        { reviewer: "Sakshi Agarwal", consultedFor: "Breast Cancer", date: "05 May 2023", rating: 5, review: "Compassionate and highly knowledgeable doctor." },
        { reviewer: "Ankit Mehra", consultedFor: "Leukemia", date: "20 April 2023", rating: 4, review: "Excellent guidance and treatment plan." },
      ],
    },
    location: "Delhi",
  },
  {
    id: 30,
    name: "Dr. Priya Desai",
    specialization: "Nephrologist",
    rating: 4.8,
    followers: 910,
    following: "19K",
    posts: 330,
    appointmentButton: "Book an Appointment",
    about: {
      title: "A Little About Me",
      description:
        "Hi, I'm Dr. Priya Desai, Nephrologist at Fortis Hospital, Bangalore. I specialize in kidney health and dialysis management.",
      languagesSpoken: ["English", "Hindi", "Kannada"],
      socialLinks: ["Instagram", "LinkedIn"],
    },
    appointment: {
      fee: 1500,
      sessionModes: [
        { type: "In-Clinic", duration: "50 Mins", selected: true },
        { type: "Video", duration: "35 Mins", selected: false },
        { type: "Chat", duration: "15 Mins", selected: false },
      ],
      availableDates: [
        { date: "Tue, 11 Oct", slots: 4 },
        { date: "Thu, 13 Oct", slots: 3 },
        { date: "Fri, 14 Oct", slots: 5 },
      ],
      availableTimeSlots: {
        morning: ["09:30 AM", "10:15 AM", "11:00 AM"],
        evening: ["04:30 PM", "05:15 PM", "06:00 PM"],
        selectedTime: "10:15 AM",
      },
      actionButton: "Make An Appointment",
    },
    specializations: ["Kidney Disorders", "Dialysis", "Hypertension"],
    concernsTreated: ["Kidney Stones", "Chronic Kidney Disease", "Hypertension"],
    workExperience: {
      totalExperience: "11+ years",
      history: [
        { organization: "Fortis Hospital, Bangalore", role: "Consultant Nephrologist", period: "2015–Present" },
        { organization: "Manipal Hospital", role: "Resident Doctor", period: "2010–2015" },
      ],
    },
    featuredReviews: {
      totalReviews: 210,
      reviews: [
        { reviewer: "Ramesh Kulkarni", consultedFor: "Kidney Stone", date: "02 June 2023", rating: 5, review: "Very knowledgeable and caring doctor." },
        { reviewer: "Swati Iyer", consultedFor: "CKD", date: "12 May 2023", rating: 4, review: "Helpful guidance and treatment plan." },
      ],
    },
    location: "Jaipur",
  },
];

// Ensure every doctor has an image property (use shared placeholder if missing)
const DEFAULT_IMAGE = "https://res.cloudinary.com/dwtnlcpd8/image/upload/v1755103154/assets_task_01jvd68036eg0r3gkekqnqv9bh_1747420739_img_3_lhnkue.webp";
doctorsLists.forEach((doc,index) => {
  if (!doc.image) doc.image = DEFAULT_IMAGE;
  if(!doc.gender) doc.gender = index % 2 === 0 ? "Female" : "Male"  ;
});

export default doctorsLists;
 
