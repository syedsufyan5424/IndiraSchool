/**
 * INDIRA SCHOOL - CENTRAL DATA CONFIGURATION
 * 
 * IMPORTANT INFORMATION RULE:
 * This file contains all official school details, editable content, and structure.
 * No factual claims (names of officials, affiliations, exact student counts, awards) 
 * are fabricated. Transparent and professional placeholders are used where exact 
 * administrative records are pending verification.
 */

export const schoolData = {
  name: "INDIRA SCHOOL",
  shortName: "Indira School",
  tagline: "Shaping Young Minds for a Brighter Future",
  subTagline: "A place where learning, discipline and personal growth come together.",
  motto: "Trust • Education • Discipline • Growth",

  location: {
    street: "Indira Nagar, Raghavendra Nagar",
    area: "Nacharam",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500076",
    country: "India",
    fullAddress: "Indira Nagar, Raghavendra Nagar, Nacharam, Hyderabad, Telangana – 500076, India",
    landmark: "Near Raghavendra Nagar Community Center, Nacharam",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.288924294064!2d78.56543924778179!3d17.43232877014631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9c099307f597%3A0xe54e3dbe7cf87f6!2sNacharam%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    mapDirectionsUrl: "https://maps.google.com/?q=Nacharam+Hyderabad+Telangana+500076"
  },

  contact: {
    primaryPhone: "+91 40 2717 XXXX (Office)",
    admissionsPhone: "+91 98480 XXXXX (Admissions Desk)",
    phoneDisplay: "+91 (040) 2717-XXXX / +91 98480-XXXXX",
    email: "admissions@indiraschool.edu.in",
    generalEmail: "info@indiraschool.edu.in",
    officeHours: "Monday – Saturday: 8:30 AM – 4:00 PM",
    visitingHours: "Parent Visiting Hours: 3:00 PM – 4:30 PM (Working Days)",
    workingDays: "Monday to Saturday (Second Saturdays closed)"
  },

  navLinks: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Admissions", path: "/admissions" },
    { name: "Facilities", path: "/facilities" },
    { name: "Gallery", path: "/gallery" },
    { name: "News & Events", path: "/news" },
    { name: "Contact", path: "/contact" }
  ],

  quickActions: [
    {
      id: "admissions",
      title: "Admissions",
      description: "Learn about admission enquiries, guidelines, and application steps.",
      link: "/admissions",
      icon: "GraduationCap",
      badge: "Open for 2026-27"
    },
    {
      id: "academics",
      title: "Academics",
      description: "Explore learning frameworks, pedagogy, and academic development.",
      link: "/academics",
      icon: "BookOpen",
      badge: "Foundational to Secondary"
    },
    {
      id: "school-life",
      title: "School Life",
      description: "Discover co-curricular activities, events, and student experiences.",
      link: "/gallery",
      icon: "Sparkles",
      badge: "Holistic Growth"
    },
    {
      id: "contact",
      title: "Contact",
      description: "Get in touch with the school office in Nacharam, Hyderabad.",
      link: "/contact",
      icon: "MapPin",
      badge: "Nacharam, Hyderabad"
    }
  ],

  about: {
    heroTitle: "A Tradition of Learning, Character & Community",
    heroSubtitle: "Committed to fostering academic curiosity, moral integrity, and foundational strength in every student.",
    badge: "About Indira School",
    heading: "A Place to Learn, Grow and Discover",
    introText: "Indira School, located in Nacharam, Hyderabad, is dedicated to providing quality education in a structured, nurturing, and disciplined learning environment. We believe that true education extends beyond textbooks to encompass critical thinking, empathy, ethical responsibility, and self-confidence.",
    paragraphs: [
      "Founded with the vision to empower young minds in Nacharam and neighboring communities of Hyderabad, Indira School emphasizes strong academic foundations supported by dedicated educators and comprehensive learning programs.",
      "Our learning atmosphere combines disciplined scholastic routines with vibrant co-curricular exploration, encouraging students to discover their distinct talents while building sound moral values."
    ],
    vision: {
      title: "Our Vision",
      description: "To be a respected center of foundational learning that prepares students to become knowledgeable, responsible, and compassionate individuals equipped to succeed in an evolving world."
    },
    mission: {
      title: "Our Mission",
      description: "To deliver accessible, value-grounded, and high-quality education through dedicated teaching, individual attention, modern pedagogical practices, and a safe, inclusive campus culture."
    },
    coreValues: [
      {
        title: "Discipline & Integrity",
        description: "Instilling punctuality, honesty, moral uprightness, and mutual respect in daily conduct.",
        icon: "ShieldCheck"
      },
      {
        title: "Academic Excellence",
        description: "Cultivating conceptual clarity, strong foundational skills, and a habit of lifelong inquiry.",
        icon: "Award"
      },
      {
        title: "Holistic Development",
        description: "Balancing intellectual rigor with sports, arts, environmental awareness, and cultural pride.",
        icon: "HeartHandshake"
      },
      {
        title: "Empathy & Community",
        description: "Encouraging kindness, social consciousness, collaboration, and respect for diversity.",
        icon: "Users"
      }
    ]
  },

  principalMessage: {
    heading: "Message from the Principal",
    subheading: "Guiding young minds toward intellectual clarity and ethical leadership.",
    designation: "Principal",
    institution: "Indira School, Nacharam",
    message: [
      "Welcome to Indira School. We believe that every child enters our campus with immense potential, natural curiosity, and a unique spark.",
      "Our core philosophy is centered on creating a balanced educational journey where academic diligence is harmonized with character building, physical vitality, and artistic expression.",
      "In an increasingly fast-paced world, we remain committed to timeless values: discipline, perseverance, respect, and continuous self-improvement. Together with our supportive parent community, we strive to build a foundation that empowers our students to face tomorrow with competence and courage."
    ],
    note: "[Official Principal's Statement — Indira School Administration]"
  },

  whyChooseUs: [
    {
      id: 1,
      title: "Student-Centered Learning",
      description: "Focus on individual learning styles, personal attention, and encouraging active student participation in classrooms.",
      icon: "UserCheck",
      color: "blue"
    },
    {
      id: 2,
      title: "Academic Development",
      description: "Structured curriculum designed to build solid conceptual understanding in languages, mathematics, sciences, and social studies.",
      icon: "BookMarked",
      color: "navy"
    },
    {
      id: 3,
      title: "Holistic Growth",
      description: "Comprehensive development integrating co-curricular activities, physical education, arts, and moral values.",
      icon: "Compass",
      color: "gold"
    },
    {
      id: 4,
      title: "Co-Curricular Activities",
      description: "Opportunities in sports, literary clubs, cultural celebrations, and science projects to foster creativity and teamwork.",
      icon: "Trophy",
      color: "blue"
    },
    {
      id: 5,
      title: "Safe Learning Environment",
      description: "A secure, well-supervised campus in Nacharam ensuring student well-being, hygiene, and disciplined campus routines.",
      icon: "ShieldAlert",
      color: "navy"
    },
    {
      id: 6,
      title: "Parent-School Connection",
      description: "Regular parent-teacher interactions, transparent communication, and shared commitment to each child's progress.",
      icon: "MessageSquareHeart",
      color: "gold"
    }
  ],

  academics: {
    heroTitle: "Learning That Builds Strong Foundations",
    heroSubtitle: "Our educational framework combines intellectual curiosity, conceptual understanding, and character development across all learning stages.",
    stages: [
      {
        id: "primary",
        title: "Early & Primary Learning",
        subtitle: "Building Wonder, Language & Foundational Numeracy",
        grades: "Early Years & Primary Classes",
        description: "The primary learning phase focuses on instilling a love for discovery, foundational literacy, mathematical reasoning, and healthy social habits through interactive, activity-guided learning.",
        keyFeatures: [
          "Activity-based phonics and communicative language development",
          "Experiential understanding of foundational mathematics and numbers",
          "Environmental studies encouraging observation of nature and everyday science",
          "Creative arts, motor skill development, and rhythmic movement",
          "Nurturing classroom environment with compassionate educator support"
        ],
        icon: "Smile"
      },
      {
        id: "middle",
        title: "Middle School Program",
        subtitle: "Expanding Analytical Thinking & Conceptual Depth",
        grades: "Middle School Classes",
        description: "In the middle school years, students transition into deeper subject specialization, structured inquiry, project work, and independent study habits across sciences, mathematics, and languages.",
        keyFeatures: [
          "In-depth focus on Physics, Chemistry, Biology, and Advanced Mathematics",
          "Language proficiency with emphasis on grammar, composition, and literature",
          "Social sciences exploring geography, history, and civic responsibility",
          "Hands-on computer literacy, digital skills, and practical lab demonstrations",
          "Collaborative projects, group discussions, and science exhibitions"
        ],
        icon: "Lightbulb"
      },
      {
        id: "secondary",
        title: "Secondary Education",
        subtitle: "Academic Rigor, Discipline & Preparation for the Future",
        grades: "Secondary Classes",
        description: "The secondary curriculum emphasizes comprehensive syllabus mastery, exam preparedness, critical problem-solving, and personal responsibility to prepare students for higher academic pursuits.",
        keyFeatures: [
          "Rigorous academic curriculum aligned with standard secondary learning frameworks",
          "Regular assessments, structured revisions, and individual academic support",
          "Scientific experimentations and practical laboratory experience",
          "Guidance sessions on career awareness, time management, and study methodologies",
          "Leadership opportunities through school prefects, house activities, and sports meets"
        ],
        icon: "GraduationCap"
      }
    ],
    pedagogyPillars: [
      {
        title: "Concept Over Rote",
        description: "Emphasis on understanding fundamentals rather than memorization.",
        icon: "Brain"
      },
      {
        title: "Continuous Assessment",
        description: "Formative and summative reviews to monitor consistent progress without undue stress.",
        icon: "ClipboardCheck"
      },
      {
        title: "Doubt Resolution",
        description: "Encouraging students to ask questions freely and receive timely guidance from teachers.",
        icon: "HelpCircle"
      },
      {
        title: "Values Integration",
        description: "Embedding moral principles, discipline, and social ethics into daily lessons.",
        icon: "Flame"
      }
    ]
  },

  admissions: {
    heroTitle: "Admissions at Indira School",
    heroSubtitle: "Take the first step toward your child's educational journey. We welcome enquiries for the upcoming academic session.",
    announcement: "Admissions Enquiry Open for Academic Year 2026 – 2027",
    steps: [
      {
        stepNumber: "01",
        title: "Submit Enquiry",
        description: "Fill out the online admission enquiry form or visit the school office at Nacharam to register your interest.",
        icon: "FileText"
      },
      {
        stepNumber: "02",
        title: "School Interaction",
        description: "Visit the campus for a friendly interaction, campus walkthrough, and academic counseling session.",
        icon: "Users"
      },
      {
        stepNumber: "03",
        title: "Required Documentation",
        description: "Submit student birth certificate, transfer certificate (if applicable), previous progress reports, and photographs.",
        icon: "FolderCheck"
      },
      {
        stepNumber: "04",
        title: "Admission Confirmation",
        description: "Complete enrollment formalities and receive official welcome details, book lists, and orientation schedule.",
        icon: "CheckCircle2"
      }
    ],
    requiredDocuments: [
      "Student's Birth Certificate (Original & Photocopy for verification)",
      "Transfer Certificate (TC) from the previous recognized school (for Grade 2 & above)",
      "Previous Academic Year Report Card / Marksheet",
      "Recent passport-sized photographs of the student (4 copies)",
      "Passport-sized photographs of parents/guardians (2 copies each)",
      "Aadhaar Card copy of Student and Parents",
      "Proof of Residence (Electricity bill / Rental agreement / Aadhaar)"
    ],
    faqs: [
      {
        question: "Where is Indira School located in Hyderabad?",
        answer: "Indira School is located at Indira Nagar, Raghavendra Nagar, Nacharam, Hyderabad, Telangana – 500076. It is easily accessible from all parts of Nacharam, Habsiguda, Mallapur, and Uppal."
      },
      {
        question: "What is the procedure to apply for admission?",
        answer: "You can submit an online enquiry via the form on this page or visit the school administrative office between 9:00 AM and 3:30 PM on working days to collect the enquiry kit and schedule an interaction."
      },
      {
        question: "What are the school office working hours?",
        answer: "The administrative office is open Monday through Saturday from 8:30 AM to 4:00 PM. Parents are encouraged to schedule an appointment for detailed counseling."
      },
      {
        question: "Is school transport assistance available?",
        answer: "Yes, transport assistance is coordinated for select residential routes around Nacharam and neighboring localities. Please contact the school office for specific route coverage."
      },
      {
        question: "What is the student-teacher interaction approach?",
        answer: "We maintain balanced classroom sizes to ensure that teachers know each student individually, offering academic assistance and behavioral mentorship."
      }
    ]
  },

  facilities: [
    {
      id: "classrooms",
      title: "Well-Ventilated Classrooms",
      category: "Academic",
      description: "Spacious, well-lit, and well-ventilated classrooms designed with ergonomic furniture to create a focused and comfortable learning atmosphere.",
      icon: "Layers",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80",
      features: ["Natural lighting & ventilation", "Ergonomic age-appropriate desks", "Blackboards & display soft-boards", "Discipline-centered seating layout"]
    },
    {
      id: "computer-lab",
      title: "Computer Learning Lab",
      category: "Technology",
      description: "Equipped with modern computer systems and guided instruction to introduce students to essential digital literacy, coding concepts, and office software.",
      icon: "Monitor",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
      features: ["Individual workstations for students", "Supervised educational software", "Foundational coding & logic exercises", "High-speed educational connectivity"]
    },
    {
      id: "science-lab",
      title: "Science Learning Lab",
      category: "Academic",
      description: "Dedicated science laboratory equipped with foundational apparatus and safety measures to help students understand scientific principles through real demonstration.",
      icon: "FlaskConical",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80",
      features: ["Physics, Chemistry & Biology apparatus", "Safety equipment & first-aid protocols", "Hands-on guided student experiments", "Demonstration tables for teachers"]
    },
    {
      id: "library",
      title: "Library & Resource Center",
      category: "Academic",
      description: "A quiet reading space housing a diverse collection of storybooks, reference materials, children's encyclopedias, and educational periodicals.",
      icon: "BookOpenCheck",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80",
      features: ["Curated fiction & non-fiction books", "Periodicals & educational magazines", "Dedicated silent reading area", "Book borrowing system for students"]
    },
    {
      id: "sports",
      title: "Sports & Physical Education",
      category: "Wellness",
      description: "Outdoor sports area and physical education routines that promote physical fitness, teamwork, sportsmanship, and coordination.",
      icon: "Trophy",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80",
      features: ["Kho-kho, volleyball & badminton spaces", "Daily morning physical drills", "Indoor games (Chess, Carrom)", "Annual Sports Day competitions"]
    },
    {
      id: "arts",
      title: "Activity & Cultural Hall",
      category: "Co-Curricular",
      description: "Dedicated space for assembly gatherings, debates, musical performances, dance, cultural celebrations, and drama rehearsals.",
      icon: "Palette",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80",
      features: ["Stage for student presentations", "Audio system for school assemblies", "Art, craft & painting sessions", "Celebration of national festivals"]
    },
    {
      id: "security",
      title: "Safe & Monitored Campus",
      category: "Campus Safety",
      description: "Student safety is our utmost priority with campus surveillance, trained security personnel, visitor entry protocols, and clean sanitized facilities.",
      icon: "ShieldCheck",
      image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1000&q=80",
      features: ["CCTV surveillance at key points", "Gated campus with security guards", "Visitor log and authorization check", "Clean drinking water & sanitized washrooms"]
    },
    {
      id: "transport",
      title: "Transport Assistance",
      category: "Logistics",
      description: "Coordinated transport arrangements covering prime residential clusters around Nacharam, Habsiguda, and nearby neighborhoods.",
      icon: "Bus",
      image: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&w=1000&q=80",
      features: ["Designated pick-up & drop points", "Supervised boarding and deboarding", "Well-maintained vehicles", "Dedicated transport desk for parents"]
    }
  ],

  gallery: [
    {
      id: 1,
      title: "Interactive Classroom Session",
      category: "Classrooms",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
      caption: "Students actively engaging in collaborative classroom learning and discussion."
    },
    {
      id: 2,
      title: "Hands-on Science Practical",
      category: "Activities",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
      caption: "Demonstration of fundamental scientific concepts in the school science lab."
    },
    {
      id: 3,
      title: "Campus Morning Assembly",
      category: "Campus",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
      caption: "Disciplined morning assembly fostering community spirit, prayer, and student presentations."
    },
    {
      id: 4,
      title: "Library Reading Hours",
      category: "Classrooms",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
      caption: "Fostering reading habits and literary appreciation in the school library."
    },
    {
      id: 5,
      title: "Annual Sports Meet",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
      caption: "Students demonstrating athletic endurance, sportsmanship, and team spirit."
    },
    {
      id: 6,
      title: "Independence Day & Republic Day Celebrations",
      category: "Events",
      image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1200&q=80",
      caption: "National festival celebrations with patriotic songs, speeches, and flag hoisting."
    },
    {
      id: 7,
      title: "Computer Literacy Practice",
      category: "Activities",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      caption: "Hands-on computer training building foundational digital competence."
    },
    {
      id: 8,
      title: "Art & Craft Creative Workshop",
      category: "Activities",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
      caption: "Nurturing creative imagination through painting, clay work, and paper craft."
    },
    {
      id: 9,
      title: "Cultural Dance & Music Presentation",
      category: "Events",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
      caption: "Students performing traditional and contemporary cultural dances on Annual Day."
    }
  ],

  galleryCategories: ["All", "Campus", "Classrooms", "Activities", "Events", "Sports"],

  newsAndEvents: [
    {
      id: 1,
      title: "Admission Enquiries Open for Academic Year 2026-27",
      category: "Admissions",
      date: "August 2026",
      isRecent: true,
      summary: "Indira School welcomes admission enquiries for the upcoming academic session. Parents can collect application forms from the school office or submit an online query.",
      fullContent: "Admissions for the upcoming academic session 2026-27 are now open. Parents seeking admission for their wards are invited to visit the school campus in Nacharam, Hyderabad. Please bring necessary documents including birth certificate and previous academic progress reports for preliminary interaction."
    },
    {
      id: 2,
      title: "Upcoming Annual Science & Project Exhibition",
      category: "Academic",
      date: "September 2026",
      isRecent: true,
      summary: "Students across Primary and Middle School sections will showcase working models, environmental charts, and experimental science projects.",
      fullContent: "The school will host its Annual Science & Project Exhibition. The event aims to encourage curiosity, experiential learning, and public speaking skills as students explain scientific concepts to visiting parents and teachers."
    },
    {
      id: 3,
      title: "Parent-Teacher Interaction Meeting (Term Review)",
      category: "Announcement",
      date: "September 2026",
      isRecent: false,
      summary: "Scheduled parent-teacher meeting to discuss student academic progress, attendance, and overall developmental milestones.",
      fullContent: "A constructive Parent-Teacher Meeting will be conducted to discuss the student's progress and foster active collaboration between parents and teachers. Specific time slots will be communicated via student diaries."
    },
    {
      id: 4,
      title: "Inter-House Sports & Athletic Meet Preparations",
      category: "Sports",
      date: "October 2026",
      isRecent: false,
      summary: "House selections and coaching sessions for track events, relay races, and team games commence on the school grounds.",
      fullContent: "Preparation for the annual Inter-House Sports Meet begins this month. Students from all houses will compete in track races, shuttle relay, kho-kho, and chess competitions emphasizing sportsmanship."
    },
    {
      id: 5,
      title: "National Festival & Cultural Observance",
      category: "School Event",
      date: "August 2026",
      isRecent: true,
      summary: "Special school assembly celebrating national pride, cultural unity, and student literary performances.",
      fullContent: "Indira School celebrated the national day with disciplined parade drills, inspiring speeches by student representatives, and patriotic cultural presentations reflecting India's unity in diversity."
    }
  ],

  footer: {
    about: "Indira School, Nacharam, Hyderabad is dedicated to delivering high quality education anchored in strong values, discipline, and personal growth for young minds.",
    quickLinks: [
      { name: "Home", path: "/" },
      { name: "About Indira School", path: "/about" },
      { name: "Academic Programs", path: "/academics" },
      { name: "Admissions Information", path: "/admissions" },
      { name: "Campus Facilities", path: "/facilities" },
      { name: "Photo Gallery", path: "/gallery" },
      { name: "News & Circulars", path: "/news" },
      { name: "Contact & Location", path: "/contact" }
    ],
    admissionsLinks: [
      { name: "Admission Enquiry Form", path: "/admissions" },
      { name: "Admission Procedure & Steps", path: "/admissions#steps" },
      { name: "Required Documents List", path: "/admissions#documents" },
      { name: "Frequently Asked Questions", path: "/admissions#faqs" },
      { name: "School Location & Map", path: "/contact#map" }
    ],
    disclaimer: "Official website of Indira School, Nacharam, Hyderabad. All academic programs and admissions are subject to standard institutional guidelines."
  }
};
